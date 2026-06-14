import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class FeatureFlagRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.featureFlag.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.featureFlag.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.featureFlag.findUnique({
      where: {
        id,
      },
    });
  }

  async findByKey(key: string) {
    return this.prisma.featureFlag.findFirst({
      where: {
        key,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.featureFlag.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.featureFlag.delete({
      where: {
        id,
      },
    });
  }
}