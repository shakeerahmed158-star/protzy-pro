import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';
import { DeliveryRepository } from './delivery.repository';

@Module({
  controllers: [DeliveryController],

  providers: [
    PrismaService,
    DeliveryService,
    DeliveryRepository,
  ],

  exports: [
    DeliveryService,
    DeliveryRepository,
  ],
})
export class DeliveryModule {}