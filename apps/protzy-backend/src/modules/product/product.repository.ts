import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class ProductRepository {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.product.create({ data });
  }

  findAll() {
    return this.prisma.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findById(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  update(id: string, data: any) {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}