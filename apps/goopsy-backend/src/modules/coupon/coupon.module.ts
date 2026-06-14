import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { CouponController } from './coupon.controller';
import { CouponService } from './coupon.service';
import { CouponRepository } from './coupon.repository';

@Module({
  controllers: [CouponController],

  providers: [
    PrismaService,
    CouponService,
    CouponRepository,
  ],

  exports: [
    CouponService,
    CouponRepository,
  ],
})
export class CouponModule {}