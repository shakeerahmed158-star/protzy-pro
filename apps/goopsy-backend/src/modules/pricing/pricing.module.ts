import { Module } from '@nestjs/common';
import { PricingController } from './controllers/pricing.controller';
import { PricingAdminController } from './controllers/pricing-admin.controller';
import { PricingHistoryController } from './controllers/pricing-history.controller';

import { PricingService } from './services/pricing.service';
import { PricingEngineService } from './services/pricing-engine.service';
import { PricingUploadService } from './services/pricing-upload.service';
import { PricingHistoryService } from './services/pricing-history.service';
import { PrismaService } from '../../shared/prisma/prisma.service';

@Module({
  controllers: [
    PricingController,
    PricingAdminController,
    PricingHistoryController,
  ],

  providers: [
    PricingService,
    PricingEngineService,
    PricingUploadService,
    PricingHistoryService,
    PrismaService,
  ],

  exports: [
    PricingService,
    PricingEngineService, 
  ],
})
export class PricingModule {}