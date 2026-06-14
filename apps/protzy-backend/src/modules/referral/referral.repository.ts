import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class ReferralRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.referral.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.referral.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.referral.findUnique({
      where: {
        id,
      },
    });
  }

  async findByCode(referralCode: string) {
    return this.prisma.referral.findFirst({
      where: {
        referralCode,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.referral.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.referral.delete({
      where: {
        id,
      },
    });
  }
}