import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class CartRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.cart.create({
      data,
    });
  }

  async findAll(userId: string) {
    return this.prisma.cart.findMany({
      where: {
        userId,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.cart.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.cart.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.cart.delete({
      where: {
        id,
      },
    });
  }

  async clearCart(userId: string) {
    return this.prisma.cart.deleteMany({
      where: {
        userId,
      },
    });
  }
}