import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class WishlistRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.wishlist.create({
      data,
    });
  }

  async findAll(userId: string) {
    return this.prisma.wishlist.findMany({
      where: {
        userId,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.wishlist.findUnique({
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    return this.prisma.wishlist.delete({
      where: {
        id,
      },
    });
  }

  async clearWishlist(userId: string) {
    return this.prisma.wishlist.deleteMany({
      where: {
        userId,
      },
    });
  }
}