import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { PayoutController } from './payout.controller';
import { PayoutService } from './payout.service';
import { PayoutRepository } from './payout.repository';

@Module({
  controllers: [PayoutController],

  providers: [
    PrismaService,
    PayoutService,
    PayoutRepository,
  ],

  exports: [
    PayoutService,
    PayoutRepository,
  ],
})
export class PayoutModule {}