import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class InvoiceRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: any) {
    return this.prisma.invoice.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.invoice.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.invoice.findUnique({
      where: {
        id,
      },
    });
  }

  async findByInvoiceNumber(
    invoiceNumber: string,
  ) {
    return this.prisma.invoice.findFirst({
      where: {
        invoiceNumber,
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.invoice.update({
      where: {
        id,
      },

      data,
    });
  }

  async delete(id: string) {
    return this.prisma.invoice.delete({
      where: {
        id,
      },
    });
  }
}