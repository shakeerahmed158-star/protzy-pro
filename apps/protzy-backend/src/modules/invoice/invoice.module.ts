import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';
import { InvoiceRepository } from './invoice.repository';

@Module({
  controllers: [InvoiceController],

  providers: [
    PrismaService,
    InvoiceService,
    InvoiceRepository,
  ],

  exports: [
    InvoiceService,
    InvoiceRepository,
  ],
})
export class InvoiceModule {}