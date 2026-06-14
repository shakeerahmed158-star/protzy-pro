import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { ContentRepository } from './content.repository';

@Module({
  controllers: [ContentController],

  providers: [
    PrismaService,
    ContentService,
    ContentRepository,
  ],

  exports: [
    ContentService,
    ContentRepository,
  ],
})
export class ContentModule {}