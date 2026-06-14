import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

import * as crypto from 'crypto';

const Razorpay = require('razorpay');

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class PaymentsService {
  private razorpay: any;

  constructor(
    private readonly prisma: PrismaService,
  ) {

    // ✅ RAZORPAY INIT
    this.razorpay = new Razorpay({
      key_id:
        process.env.RAZORPAY_KEY_ID,

      key_secret:
        process.env.RAZORPAY_SECRET,
    });
  }

  // ✅ CREATE PAYMENT
  async createPayment(orderId: string) {
    try {
const order =
  await this.prisma.order.findUnique({
    where: {
      id: orderId,
    },
  });

if (!order) {
  throw new BadRequestException(
    'Order not found',
  );
}

const amount =
  Number(order.totalAmount || 0);

      if (amount <= 0) {
        throw new BadRequestException(
          'Invalid amount',
        );
      }

      const payment =
        await this.razorpay.orders.create({
          amount: amount * 100,
          currency: 'INR',
          receipt: order.id,
        });

      return {
        success: true,
        payment,
      };

    } catch (error) {

      console.log(
        'PAYMENT CREATE ERROR:',
        error,
      );

      throw new InternalServerErrorException(
        'Payment creation failed',
      );
    }
  }

  // ✅ VERIFY PAYMENT
  async verifyPayment(body: any) {
    try {

      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      } = body;

      if (
        !razorpay_order_id ||
        !razorpay_payment_id ||
        !razorpay_signature
      ) {
        throw new BadRequestException(
          'Invalid payment data',
        );
      }

      // ✅ SIGNATURE VERIFY
      const generatedSignature =
        crypto
          .createHmac(
            'sha256',
            process.env.RAZORPAY_SECRET || '',
          )
          .update(
            razorpay_order_id +
              '|' +
              razorpay_payment_id,
          )
          .digest('hex');

      const isValid =
        generatedSignature ===
        razorpay_signature;

      if (!isValid) {
        throw new BadRequestException(
          'Invalid payment signature',
        );
      }

      return {
        success: true,
        message: 'Payment verified successfully',
        paymentId: razorpay_payment_id,
      };

    } catch (error) {

      console.log(
        'PAYMENT VERIFY ERROR:',
        error,
      );

      throw new InternalServerErrorException(
        'Payment verification failed',
      );
    }
  }
}