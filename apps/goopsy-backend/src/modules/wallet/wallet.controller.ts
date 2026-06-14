import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { WalletService } from './wallet.service';

import { JwtAuthGuard } from '../../shared/auth/guards/jwt-auth.guard';

@Controller('wallet')
export class WalletController {
  constructor(
    private readonly walletService: WalletService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  createWallet(@Req() req) {
    return this.walletService.createWallet(
      req.user.id,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getWallet(@Req() req) {
    return this.walletService.getWallet(
      req.user.id,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch('credit')
  creditWallet(
    @Req() req,
    @Body()
    body: {
      amount: number;
      description: string;
    },
  ) {
    return this.walletService.creditWallet(
      req.user.id,
      body.amount,
      body.description,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch('debit')
  debitWallet(
    @Req() req,
    @Body()
    body: {
      amount: number;
      description: string;
    },
  ) {
    return this.walletService.debitWallet(
      req.user.id,
      body.amount,
      body.description,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('transactions')
  getTransactions(@Req() req) {
    return this.walletService.getTransactions(
      req.user.id,
    );
  }

  @UseGuards(JwtAuthGuard)
@Post('recharge/create')
createRecharge(
  @Req() req,
  @Body()
  body: {
    amount: number;
  },
) {
  return this.walletService.createRechargeOrder(
    req.user.id,
    body.amount,
  );
}

@UseGuards(JwtAuthGuard)
@Post('recharge/verify')
verifyRecharge(
  @Req() req,
  @Body()
  body: any,
) {
  return this.walletService.verifyRecharge({
    dealerId: req.user.id,
    ...body,
  });
}

}