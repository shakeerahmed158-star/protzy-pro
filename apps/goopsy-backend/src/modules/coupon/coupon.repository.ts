import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class CouponRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.coupon.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.coupon.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.coupon.findUnique({
      where: {
        id,
      },
    });
  }

  async findByCode(code: string) {
    return this.prisma.coupon.findUnique({
      where: {
        code,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.coupon.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.coupon.delete({
      where: {
        id,
      },
    });
  }
}