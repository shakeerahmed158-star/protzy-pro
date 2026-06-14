import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class BuyRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.inventory.create({
      data,
    });
  }

  async findAll(filters?: any) {
    return this.prisma.inventory.findMany({
      where: {
        ...(filters?.dealerId && {
          dealerId: filters.dealerId,
        }),

        ...(filters?.status && {
          status: filters.status,
        }),
      },

      include: {
        dealer: {
          select: {
            id: true,
            shopName: true,
            city: true,
            area: true,
            rating: true,
          },
        },

        product: true,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.inventory.findUnique({
      where: {
        id,
      },

      include: {
        dealer: true,
        product: true,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.inventory.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.inventory.delete({
      where: {
        id,
      },
    });
  }
}