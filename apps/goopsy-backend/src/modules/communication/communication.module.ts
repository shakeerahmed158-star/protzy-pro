import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { CommunicationController } from './communication.controller';
import { CommunicationService } from './communication.service';
import { CommunicationRepository } from './communication.repository';

@Module({
  controllers: [CommunicationController],

  providers: [
    PrismaService,
    CommunicationService,
    CommunicationRepository,
  ],

  exports: [
    CommunicationService,
    CommunicationRepository,
  ],
})
export class CommunicationModule {}