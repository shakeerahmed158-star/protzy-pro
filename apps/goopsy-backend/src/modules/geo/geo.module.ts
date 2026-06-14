import { Module } from '@nestjs/common';

import { GeoController } from './geo.controller';
import { GeoService } from './geo.service';
import { GeoRepository } from './geo.repository';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Module({
  controllers: [GeoController],

  providers: [
    GeoService,
    GeoRepository,
    PrismaService,
  ],

  exports: [
    GeoService,
  ],
})
export class GeoModule {}