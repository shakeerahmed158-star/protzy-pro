import { Injectable } from '@nestjs/common';

import { AnalyticsRepository } from '../repositories/analytics.repository';

@Injectable()
export class AnalyticsService {
  constructor(
    private readonly analyticsRepository: AnalyticsRepository,
  ) {}

  async dashboard() {
    return this.analyticsRepository.dashboard();
  }

  async revenue(
    from?: string,
    to?: string,
  ) {
    return this.analyticsRepository.revenue(
      from,
      to,
    );
  }

  async dealerAnalytics() {
    return this.analyticsRepository.dealerAnalytics();
  }

  async inventoryAnalytics() {
    return this.analyticsRepository.inventoryAnalytics();
  }

  async repairAnalytics() {
    return this.analyticsRepository.repairAnalytics();
  }

  async subscriptionsAnalytics() {
    return this.analyticsRepository.subscriptionsAnalytics();
  }
}