import { Module } from '@nestjs/common';

import { AnalyticsController } from './controllers/analytics.controller';
import { AnalyticsService } from './services/analytics.service';
import { AnalyticsRepository } from './repositories/analytics.repository';

import { PrismaModule } from '../../shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],

  controllers: [AnalyticsController],

  providers: [
    AnalyticsService,
    AnalyticsRepository,
  ],

  exports: [AnalyticsService],
})
export class AnalyticsModule {}