import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class TrackingRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.tracking.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.tracking.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByTrackingNumber(
    trackingNumber: string,
  ) {
    return this.prisma.tracking.findMany({
      where: {
        trackingNumber,
      },

      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.tracking.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.tracking.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.tracking.delete({
      where: {
        id,
      },
    });
  }
}