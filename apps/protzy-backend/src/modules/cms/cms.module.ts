import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { CmsController } from './cms.controller';
import { CmsService } from './cms.service';
import { CmsRepository } from './cms.repository';

@Module({
  controllers: [CmsController],

  providers: [
    PrismaService,
    CmsService,
    CmsRepository,
  ],

  exports: [
    CmsService,
    CmsRepository,
  ],
})
export class CmsModule {}