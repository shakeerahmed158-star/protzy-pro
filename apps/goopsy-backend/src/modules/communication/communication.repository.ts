import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class CommunicationRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.communication.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.communication.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByUser(userId: string) {
    return this.prisma.communication.findMany({
      where: {
        userId,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.communication.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.communication.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.communication.delete({
      where: {
        id,
      },
    });
  }
}