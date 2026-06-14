import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class LeadRepository {
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

        ...(filters?.dealerId && {
          dealerId:
            filters.dealerId,
        }),

        ...(filters?.userId && {
          userId: filters.userId,
        }),
      },

      include: {
        dealer: true,
        orders: true,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.lead.findUnique({
      where: { id },

      include: {
        dealer: true,
        orders: true,
      },
    });
  }

  async update(
    id: string,
    data: any,
  ) {
    return this.prisma.lead.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.lead.delete({
      where: { id },
    });
  }

  async findDealerByUserId(
    userId: string,
  ) {
    return this.prisma.dealer.findUnique({
      where: {
        userId,
      },
    });
  }

  async findDealerLeads(
    dealerId: string,
  ) {
    return this.prisma.lead.findMany({
      where: {
        dealerId,
      },

      include: {
        orders: true,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

async findMatchingDealers(
  model: string,
  condition: string,
) {
  return this.prisma.lead.findMany({
    where: {
      model,
      condition: condition as any,
    },

    orderBy: {
      expectedPrice: 'desc',
    },
  });
}

  async createOrder(data: any) {
    return this.prisma.order.create({
      data,
    });
  }
}