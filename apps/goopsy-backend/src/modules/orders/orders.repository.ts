import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class OrdersRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.order.create({
      data,
    });
  }

  async findAll(filters?: any) {
    return this.prisma.order.findMany({
      where: {
        ...(filters?.userId && {
          userId: filters.userId,
        }),

        ...(filters?.status && {
          status: filters.status,
        }),
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.order.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.order.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.order.delete({
      where: {
        id,
      },
    });
  }

  async getDealerOrders(
    userId: string,
  ) {
    return this.prisma.order.findMany({
      where: {
        userId,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}