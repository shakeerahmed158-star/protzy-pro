import { Module } from '@nestjs/common';

import { LeadController } from './lead.controller';
import { LeadService } from './lead.service';
import { LeadRepository } from './lead.repository';

import { PrismaModule } from '../../shared/prisma/prisma.module';

import { PricingModule } from '../pricing/pricing.module';

@Module({
  imports: [
    PrismaModule,
    PricingModule,
  ],

  controllers: [LeadController],

  providers: [
    LeadService,
    LeadRepository,
  ],

  exports: [LeadService],
})
export class LeadModule {}