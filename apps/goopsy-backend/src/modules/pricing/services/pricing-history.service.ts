import { Injectable } from '@nestjs/common';

@Injectable()
export class PricingHistoryService {

  async getAllHistory() {
    return {
      success: true,
      message: 'All pricing history fetched',
      data: [],
    };
  }

  async getLeadHistory(leadId: string) {
    return {
      success: true,
      message: `Pricing history for lead ${leadId}`,
      data: [],
    };
  }

}