import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartRepository } from './cart.repository';

@Module({
  controllers: [CartController],

  providers: [
    PrismaService,
    CartService,
    CartRepository,
  ],

  exports: [
    CartService,
    CartRepository,
  ],
})
export class CartModule {}