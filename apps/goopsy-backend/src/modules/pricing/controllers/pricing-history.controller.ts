import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';

import { PricingHistoryService } from '../services/pricing-history.service';

@Controller('pricing/history')
export class PricingHistoryController {
  constructor(
    private readonly pricingHistoryService: PricingHistoryService,
  ) {}

  @Get()
  async getAllHistory() {
    return this.pricingHistoryService.getAllHistory();
  }

  @Get(':leadId')
  async getLeadHistory(
    @Param('leadId') leadId: string,
  ) {
    return this.pricingHistoryService.getLeadHistory(leadId);
  }
}