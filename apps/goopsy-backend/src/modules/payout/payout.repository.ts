import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class PayoutRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.payout.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.payout.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.payout.findUnique({
      where: {
        id,
      },
    });
  }

  async findByDealer(dealerId: string) {
    return this.prisma.payout.findMany({
      where: {
        dealerId,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.payout.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.payout.delete({
      where: {
        id,
      },
    });
  }
}