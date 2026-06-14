import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class SeoRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.seo.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.seo.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByPage(slug: string) {
    return this.prisma.seo.findFirst({
      where: {
        slug,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.seo.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.seo.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.seo.delete({
      where: {
        id,
      },
    });
  }
}