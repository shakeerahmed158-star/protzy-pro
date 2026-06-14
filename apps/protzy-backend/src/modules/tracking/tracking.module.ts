import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { TrackingController } from './tracking.controller';
import { TrackingService } from './tracking.service';
import { TrackingRepository } from './tracking.repository';

@Module({
  controllers: [TrackingController],

  providers: [
    PrismaService,
    TrackingService,
    TrackingRepository,
  ],

  exports: [
    TrackingService,
    TrackingRepository,
  ],
})
export class TrackingModule {}