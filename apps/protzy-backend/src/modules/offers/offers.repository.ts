import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class OffersRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.offer.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.offer.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.offer.findUnique({
      where: {
        id,
      },
    });
  }

  async findBySlug(slug: string) {
    return this.prisma.offer.findFirst({
      where: {
        slug,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.offer.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.offer.delete({
      where: {
        id,
      },
    });
  }
}