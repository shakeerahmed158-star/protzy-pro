import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class ReturnsRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.returnRequest.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.returnRequest.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByUser(userId: string) {
    return this.prisma.returnRequest.findMany({
      where: {
        userId,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.returnRequest.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.returnRequest.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.returnRequest.delete({
      where: {
        id,
      },
    });
  }
}