import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { ReturnsController } from './returns.controller';
import { ReturnsService } from './returns.service';
import { ReturnsRepository } from './returns.repository';

@Module({
  controllers: [ReturnsController],

  providers: [
    PrismaService,
    ReturnsService,
    ReturnsRepository,
  ],

  exports: [
    ReturnsService,
    ReturnsRepository,
  ],
})
export class ReturnsModule {}