import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class MembershipRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.membership.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.membership.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByUser(userId: string) {
    return this.prisma.membership.findFirst({
      where: {
        userId,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.membership.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.membership.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.membership.delete({
      where: {
        id,
      },
    });
  }
}