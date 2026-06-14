import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class PermissionRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.permission.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.permission.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.permission.findUnique({
      where: {
        id,
      },
    });
  }

  async findByKey(key: string) {
    return this.prisma.permission.findFirst({
      where: {
        key,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.permission.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.permission.delete({
      where: {
        id,
      },
    });
  }
}