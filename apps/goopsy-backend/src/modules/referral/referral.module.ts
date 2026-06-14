import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { ReferralController } from './referral.controller';
import { ReferralService } from './referral.service';
import { ReferralRepository } from './referral.repository';

@Module({
  controllers: [ReferralController],

  providers: [
    PrismaService,
    ReferralService,
    ReferralRepository,
  ],

  exports: [
    ReferralService,
    ReferralRepository,
  ],
})
export class ReferralModule {}