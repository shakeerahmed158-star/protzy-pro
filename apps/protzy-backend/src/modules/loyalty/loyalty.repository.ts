import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class LoyaltyRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.loyalty.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.loyalty.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByUser(userId: string) {
    return this.prisma.loyalty.findFirst({
      where: {
        userId,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.loyalty.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.loyalty.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.loyalty.delete({
      where: {
        id,
      },
    });
  }
}