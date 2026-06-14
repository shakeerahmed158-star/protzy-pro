import { Module } from '@nestjs/common';

import { InventoryController } from './controllers/inventory.controller';

import { InventoryService } from './services/inventory.service';

import { InventoryRepository } from './repositories/inventory.repository';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Module({
  controllers: [
    InventoryController,
  ],

  providers: [
    InventoryService,
    InventoryRepository,
    PrismaService,
  ],

  exports: [
    InventoryService,
  ],
})
export class InventoryModule {}