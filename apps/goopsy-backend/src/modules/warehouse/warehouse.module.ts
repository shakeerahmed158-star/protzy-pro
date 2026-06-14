import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { WarehouseController } from './warehouse.controller';
import { WarehouseService } from './warehouse.service';
import { WarehouseRepository } from './warehouse.repository';

@Module({
  controllers: [WarehouseController],

  providers: [
    PrismaService,
    WarehouseService,
    WarehouseRepository,
  ],

  exports: [
    WarehouseService,
    WarehouseRepository,
  ],
})
export class WarehouseModule {}