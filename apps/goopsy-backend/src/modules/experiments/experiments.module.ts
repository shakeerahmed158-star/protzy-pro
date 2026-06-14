import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { ExperimentsController } from './experiments.controller';
import { ExperimentsService } from './experiments.service';
import { ExperimentsRepository } from './experiments.repository';

@Module({
  controllers: [ExperimentsController],

  providers: [
    PrismaService,
    ExperimentsService,
    ExperimentsRepository,
  ],

  exports: [
    ExperimentsService,
    ExperimentsRepository,
  ],
})
export class ExperimentsModule {}