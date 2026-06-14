import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { SlotController } from './slot.controller';
import { SlotService } from './slot.service';
import { SlotRepository } from './slot.repository';

@Module({
  controllers: [SlotController],

  providers: [
    PrismaService,
    SlotService,
    SlotRepository,
  ],

  exports: [
    SlotService,
    SlotRepository,
  ],
})
export class SlotModule {}