import { Module } from '@nestjs/common';

import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrdersRepository } from './orders.repository';

import { PrismaModule } from '../../shared/prisma/prisma.module';


@Module({
  imports: [PrismaModule],

  controllers: [OrdersController],

  providers: [
    OrdersService,
    OrdersRepository,
  ],

  exports: [OrdersService],
})
export class OrdersModule {}