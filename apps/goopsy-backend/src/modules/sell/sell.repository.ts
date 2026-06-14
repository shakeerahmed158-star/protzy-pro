import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class SellRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.lead.create({
      data,
    });
  }

  async findAll(filters?: any) {
    return this.prisma.lead.findMany({
      where: {
        ...(filters?.status && {
          status: filters.status,
        }),

        ...(filters?.customerId && {
          userId: filters.customerId,
        }),

        ...(filters?.dealerId && {
          dealerId: filters.dealerId,
        }),
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.lead.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    data: any,
  ) {
    return this.prisma.lead.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.lead.delete({
      where: {
        id,
      },
    });
  }
}