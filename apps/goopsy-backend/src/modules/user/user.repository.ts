import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.user.create({
      data,
    });
  }

  async findAll(filters?: any) {
    return this.prisma.user.findMany({
      where: {
        ...(filters?.phone && {
          phone: filters.phone,
        }),

        ...(filters?.name && {
          name: {
            contains:
              filters.name,

            mode: 'insensitive',
          },
        }),
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByPhone(
    phone: string,
  ) {
    return this.prisma.user.findUnique({
      where: { phone },
    });
  }

  async update(
    id: string,
    data: any,
  ) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}