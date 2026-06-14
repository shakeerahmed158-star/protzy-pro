import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { VendorController } from './vendor.controller';
import { VendorService } from './vendor.service';
import { VendorRepository } from './vendor.repository';

@Module({
  controllers: [VendorController],

  providers: [
    PrismaService,
    VendorService,
    VendorRepository,
  ],

  exports: [
    VendorService,
    VendorRepository,
  ],
})
export class VendorModule {}