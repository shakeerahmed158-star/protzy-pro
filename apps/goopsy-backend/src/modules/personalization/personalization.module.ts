import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { PersonalizationController } from './personalization.controller';
import { PersonalizationService } from './personalization.service';
import { PersonalizationRepository } from './personalization.repository';

@Module({
  controllers: [PersonalizationController],

  providers: [
    PrismaService,
    PersonalizationService,
    PersonalizationRepository,
  ],

  exports: [
    PersonalizationService,
    PersonalizationRepository,
  ],
})
export class PersonalizationModule {}