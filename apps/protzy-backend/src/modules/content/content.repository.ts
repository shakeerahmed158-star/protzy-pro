import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class ContentRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.content.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.content.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.content.findUnique({
      where: {
        id,
      },
    });
  }

  async findBySlug(slug: string) {
    return this.prisma.content.findFirst({
      where: {
        slug,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.content.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.content.delete({
      where: {
        id,
      },
    });
  }
}