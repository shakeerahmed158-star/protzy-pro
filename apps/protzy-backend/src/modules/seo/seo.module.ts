import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { SeoController } from './seo.controller';
import { SeoService } from './seo.service';
import { SeoRepository } from './seo.repository';

@Module({
  controllers: [SeoController],

  providers: [
    PrismaService,
    SeoService,
    SeoRepository,
  ],

  exports: [
    SeoService,
    SeoRepository,
  ],
})
export class SeoModule {}