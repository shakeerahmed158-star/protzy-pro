import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { LoyaltyController } from './loyalty.controller';
import { LoyaltyService } from './loyalty.service';
import { LoyaltyRepository } from './loyalty.repository';

@Module({
  controllers: [LoyaltyController],

  providers: [
    PrismaService,
    LoyaltyService,
    LoyaltyRepository,
  ],

  exports: [
    LoyaltyService,
    LoyaltyRepository,
  ],
})
export class LoyaltyModule {}