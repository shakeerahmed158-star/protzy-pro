import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { ReservationRepository } from './reservation.repository';

@Module({
  controllers: [ReservationController],

  providers: [
    PrismaService,
    ReservationService,
    ReservationRepository,
  ],

  exports: [
    ReservationService,
    ReservationRepository,
  ],
})
export class ReservationModule {}