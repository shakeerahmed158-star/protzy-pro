import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { Prisma, RepairLead, WorkflowStatus } from '@prisma/client';

@Injectable()
export class RepairRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.RepairLeadCreateInput) {
    return this.prisma.repairLead.create({
      data,
    });
  }

  async findAll(filters?: {
    status?: WorkflowStatus;
    dealerId?: string;
    customerId?: string;
  }) {
    return this.prisma.repairLead.findMany({
      where: {
        status: filters?.status,
        dealerId: filters?.dealerId,
        customerId: filters?.customerId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.repairLead.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: Prisma.RepairLeadUpdateInput) {
    return this.prisma.repairLead.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.repairLead.delete({
      where: { id },
    });
  }
}