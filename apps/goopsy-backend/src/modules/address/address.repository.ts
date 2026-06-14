import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class AddressRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.address.create({
      data,
    });
  }

  async findAll(userId: string) {
    return this.prisma.address.findMany({
      where: {
        userId,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.address.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.address.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.address.delete({
      where: {
        id,
      },
    });
  }
}