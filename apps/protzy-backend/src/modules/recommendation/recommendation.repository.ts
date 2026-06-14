import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class RecommendationRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.recommendation.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.recommendation.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByUser(userId: string) {
    return this.prisma.recommendation.findMany({
      where: {
        userId,
      },

      orderBy: {
        score: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.recommendation.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.recommendation.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.recommendation.delete({
      where: {
        id,
      },
    });
  }
}