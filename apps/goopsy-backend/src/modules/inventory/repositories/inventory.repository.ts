import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/prisma/prisma.service';

@Injectable()
export class InventoryRepository {
  constructor(
    private prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.inventory.create({
      data,
    });
  }

  async update(id: string, data: any) {
    return this.prisma.inventory.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.inventory.delete({
      where: { id },
    });
  }

  async findByDealer(dealerId: string) {
    return this.prisma.inventory.findMany({
      where: {
        dealerId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.inventory.findUnique({
      where: { id },
    });
  }

  async findDealerInventory(
  inventoryId: string,
  dealerId: string,
) {
  return this.prisma.inventory.findFirst({
    where: {
      id: inventoryId,
      dealerId,
    },
  });
}




}