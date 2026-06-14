import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { RecommendationController } from './recommendation.controller';
import { RecommendationService } from './recommendation.service';
import { RecommendationRepository } from './recommendation.repository';

@Module({
  controllers: [RecommendationController],

  providers: [
    PrismaService,
    RecommendationService,
    RecommendationRepository,
  ],

  exports: [
    RecommendationService,
    RecommendationRepository,
  ],
})
export class RecommendationModule {}