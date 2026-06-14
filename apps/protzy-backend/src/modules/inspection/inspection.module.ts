import { Module } from '@nestjs/common';

import { InspectionController } from './inspection.controller';
import { InspectionService } from './inspection.service';
import { InspectionRepository } from './inspection.repository';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Module({
  controllers: [InspectionController],

  providers: [
    InspectionService,
    InspectionRepository,
    PrismaService,
  ],

  exports: [
    InspectionService,
  ],
})
export class InspectionModule {}