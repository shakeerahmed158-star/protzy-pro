import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { CampaignRepository } from './campaign.repository';

@Module({
  controllers: [CampaignController],

  providers: [
    PrismaService,
    CampaignService,
    CampaignRepository,
  ],

  exports: [
    CampaignService,
    CampaignRepository,
  ],
})
export class CampaignModule {}