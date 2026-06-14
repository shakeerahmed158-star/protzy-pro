import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class ReservationRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.reservation.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.reservation.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByUser(userId: string) {
    return this.prisma.reservation.findMany({
      where: {
        userId,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.reservation.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.reservation.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.reservation.delete({
      where: {
        id,
      },
    });
  }
}