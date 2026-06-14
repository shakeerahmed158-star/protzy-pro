import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class WarehouseRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.warehouse.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.warehouse.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.warehouse.findUnique({
      where: {
        id,
      },
    });
  }

  async findByCode(code: string) {
    return this.prisma.warehouse.findFirst({
      where: {
        code,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.warehouse.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.warehouse.delete({
      where: {
        id,
      },
    });
  }
}