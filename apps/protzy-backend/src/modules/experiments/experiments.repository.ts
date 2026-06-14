import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class ExperimentsRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.experiment.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.experiment.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.experiment.findUnique({
      where: {
        id,
      },
    });
  }

  async findByKey(key: string) {
    return this.prisma.experiment.findFirst({
      where: {
        key,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.experiment.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.experiment.delete({
      where: {
        id,
      },
    });
  }
}