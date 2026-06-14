import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { WishlistController } from './wishlist.controller';
import { WishlistService } from './wishlist.service';
import { WishlistRepository } from './wishlist.repository';

@Module({
  controllers: [WishlistController],

  providers: [
    PrismaService,
    WishlistService,
    WishlistRepository,
  ],

  exports: [
    WishlistService,
    WishlistRepository,
  ],
})
export class WishlistModule {}