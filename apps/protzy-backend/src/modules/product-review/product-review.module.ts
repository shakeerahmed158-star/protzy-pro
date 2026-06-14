import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { ProductReviewController } from './product-review.controller';
import { ProductReviewService } from './product-review.service';
import { ProductReviewRepository } from './product-review.repository';

@Module({
  controllers: [ProductReviewController],

  providers: [
    PrismaService,
    ProductReviewService,
    ProductReviewRepository,
  ],

  exports: [
    ProductReviewService,
    ProductReviewRepository,
  ],
})
export class ProductReviewModule {}