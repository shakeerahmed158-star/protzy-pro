import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class PersonalizationRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.personalization.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.personalization.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByUser(userId: string) {
    return this.prisma.personalization.findFirst({
      where: {
        userId,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.personalization.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.personalization.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.personalization.delete({
      where: {
        id,
      },
    });
  }
}