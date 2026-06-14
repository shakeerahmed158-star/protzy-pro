import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { WalletRepository } from './wallet.repository';

import * as crypto from 'crypto';

const Razorpay = require('razorpay');

@Injectable()
export class WalletService {

  private razorpay: any;

  constructor(
    private readonly walletRepository: WalletRepository,
  ) {

    // ✅ RAZORPAY INIT
    this.razorpay = new Razorpay({
      key_id:
        process.env.RAZORPAY_KEY_ID,

      key_secret:
        process.env.RAZORPAY_SECRET,
    });
  }

  // ✅ CREATE WALLET
  async createWallet(userId: string) {

    const existingWallet =
      await this.walletRepository.findWalletByUserId(
        userId,
      );

    if (existingWallet) {
      return existingWallet;
    }

    return this.walletRepository.createWallet(
      userId,
    );
  }

  // ✅ GET WALLET
  async getWallet(userId: string) {

    const wallet =
      await this.walletRepository.findWalletByUserId(
        userId,
      );

    if (!wallet) {
      throw new NotFoundException(
        'Wallet not found',
      );
    }

    return wallet;
  }

  // ✅ CREDIT WALLET
  async creditWallet(
    userId: string,
    amount: number,
    description: string,
  ) {

    if (amount <= 0) {
      throw new BadRequestException(
        'Amount must be greater than zero',
      );
    }

    const wallet =
      await this.walletRepository.findWalletByUserId(
        userId,
      );

    if (!wallet) {
      throw new NotFoundException(
        'Wallet not found',
      );
    }

    return this.walletRepository.creditWallet(
      wallet.id,
      amount,
      description,
    );
  }

  // ✅ DEBIT WALLET
  async debitWallet(
    userId: string,
    amount: number,
    description: string,
  ) {

    if (amount <= 0) {
      throw new BadRequestException(
        'Amount must be greater than zero',
      );
    }

    const wallet =
      await this.walletRepository.findWalletByUserId(
        userId,
      );

    if (!wallet) {
      throw new NotFoundException(
        'Wallet not found',
      );
    }

    if (wallet.balance < amount) {
      throw new BadRequestException(
        'Insufficient wallet balance',
      );
    }

    return this.walletRepository.debitWallet(
      wallet.id,
      amount,
      description,
    );
  }

  // ✅ GET TRANSACTIONS
  async getTransactions(userId: string) {

    const wallet =
      await this.walletRepository.findWalletByUserId(
        userId,
      );

    if (!wallet) {
      throw new NotFoundException(
        'Wallet not found',
      );
    }

    return this.walletRepository.getTransactions(
      wallet.id,
    );
  }

  // ✅ CREATE RECHARGE ORDER
  async createRechargeOrder(
    userId: string,
    amount: number,
  ) {

    if (amount <= 0) {
      throw new BadRequestException(
        'Invalid recharge amount',
      );
    }

    const wallet =
      await this.walletRepository.findWalletByUserId(
        userId,
      );

    if (!wallet) {
      throw new NotFoundException(
        'Wallet not found',
      );
    }

    const razorpayOrder =
      await this.razorpay.orders.create({
        amount: amount * 100,
        currency: 'INR',
        receipt: userId,
      });

    return {
      success: true,
      order: razorpayOrder,
    };
  }

  // ✅ VERIFY RECHARGE
  async verifyRecharge(body: any) {

    const {
      dealerId,
      amount,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    // ✅ VERIFY SIGNATURE
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

    // ✅ CREDIT WALLET
    await this.creditWallet(
      dealerId,
      Number(amount),
      'Wallet Recharge',
    );

    return {
      success: true,
      message:
        'Wallet recharged successfully',
    };
  }
}