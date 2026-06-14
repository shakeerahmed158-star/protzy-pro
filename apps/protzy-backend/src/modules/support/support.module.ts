import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { SupportController } from './support.controller';
import { SupportService } from './support.service';
import { SupportRepository } from './support.repository';

@Module({
  controllers: [SupportController],

  providers: [
    PrismaService,
    SupportService,
    SupportRepository,
  ],

  exports: [
    SupportService,
    SupportRepository,
  ],
})
export class SupportModule {}