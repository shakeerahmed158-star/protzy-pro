import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class SupportRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.support.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.support.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByUser(userId: string) {
    return this.prisma.support.findMany({
      where: {
        userId,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.support.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.support.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.support.delete({
      where: {
        id,
      },
    });
  }
}