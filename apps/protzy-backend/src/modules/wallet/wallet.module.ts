import { Module } from '@nestjs/common';

import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';
import { WalletRepository } from './wallet.repository';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Module({
  controllers: [WalletController],
  providers: [
    WalletService,
    WalletRepository,
    PrismaService,
  ],
  exports: [WalletService],
})
export class WalletModule {}