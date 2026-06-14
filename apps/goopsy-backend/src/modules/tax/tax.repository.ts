import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class TaxRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.tax.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.tax.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.tax.findUnique({
      where: {
        id,
      },
    });
  }

  async findByCode(code: string) {
    return this.prisma.tax.findFirst({
      where: {
        code,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.tax.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.tax.delete({
      where: {
        id,
      },
    });
  }
}