import {
  Body,
  Controller,
  Get,
  Post,
  BadRequestException,
} from '@nestjs/common';

import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(
    private readonly paymentsService: PaymentsService,
  ) {}

  // ✅ HEALTH CHECK
  @Get('health')
  health() {
    return {
      success: true,
      message: 'Payments Module Running',
    };
  }

  // ✅ CREATE PAYMENT ORDER
  @Post('create')
  async createPayment(
    @Body() body: { orderId: string },
  ) {
    if (!body.orderId) {
      throw new BadRequestException(
        'orderId is required',
      );
    }

    return this.paymentsService.createPayment(
      body.orderId,
    );
  }

  // ✅ VERIFY PAYMENT
  @Post('verify')
  async verifyPayment(@Body() body: any) {
    return this.paymentsService.verifyPayment(
      body,
    );
  }
}