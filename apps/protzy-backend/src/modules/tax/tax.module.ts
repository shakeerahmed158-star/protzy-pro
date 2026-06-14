import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { TaxController } from './tax.controller';
import { TaxService } from './tax.service';
import { TaxRepository } from './tax.repository';

@Module({
  controllers: [TaxController],

  providers: [
    PrismaService,
    TaxService,
    TaxRepository,
  ],

  exports: [
    TaxService,
    TaxRepository,
  ],
})
export class TaxModule {}