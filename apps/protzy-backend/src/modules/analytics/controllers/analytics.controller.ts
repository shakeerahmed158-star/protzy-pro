import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';

import { AnalyticsService } from '../services/analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(
    private readonly analyticsService: AnalyticsService,
  ) {}

  @Get('dashboard')
  async dashboard() {
    return this.analyticsService.dashboard();
  }

  @Get('revenue')
  async revenue(
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    return this.analyticsService.revenue(from, to);
  }

  @Get('dealers')
  async dealerAnalytics() {
    return this.analyticsService.dealerAnalytics();
  }

  @Get('inventory')
  async inventoryAnalytics() {
    return this.analyticsService.inventoryAnalytics();
  }

  @Get('repairs')
  async repairAnalytics() {
    return this.analyticsService.repairAnalytics();
  }

  @Get('subscriptions')
  async subscriptionsAnalytics() {
    return this.analyticsService.subscriptionsAnalytics();
  }
}