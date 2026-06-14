import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class DealerRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.dealer.create({
      data,
    });
  }

  async findAll(filters?: any) {
    return this.prisma.dealer.findMany({
      where: {
        ...(filters?.status && {
          status: filters.status,
        }),

        ...(filters?.type && {
          type: filters.type,
        }),
      },

      include: {
        user: true,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.dealer.findUnique({
      where: { id },

      include: {
        user: true,
      },
    });
  }

 async findByUserId(
  userId: string,
) {
  return this.prisma.dealer.findUnique({
    where: {
      userId,
    },

    include: {
      user: true,
    },
  });
}

async findByDealerCode(
  dealerCode: string,
) {
  return this.prisma.dealer.findUnique({
    where: {
      dealerCode,
    },
  });
}

async update(
  id: string,
  data: any,
) {
  return this.prisma.dealer.update({
    where: { id },
    data,
  });
}

  async delete(id: string) {
    return this.prisma.dealer.delete({
      where: { id },
    });
  }
}