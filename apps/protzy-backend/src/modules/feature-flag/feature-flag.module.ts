import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { FeatureFlagController } from './feature-flag.controller';
import { FeatureFlagService } from './feature-flag.service';
import { FeatureFlagRepository } from './feature-flag.repository';

@Module({
  controllers: [FeatureFlagController],

  providers: [
    PrismaService,
    FeatureFlagService,
    FeatureFlagRepository,
  ],

  exports: [
    FeatureFlagService,
    FeatureFlagRepository,
  ],
})
export class FeatureFlagModule {}