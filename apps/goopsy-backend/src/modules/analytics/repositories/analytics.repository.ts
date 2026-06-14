import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../../shared/prisma/prisma.service';

@Injectable()
export class AnalyticsRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async dashboard() {
    const [
      users,
      dealers,
      orders,
      repairs,
      inventory,
    ] = await Promise.all([
      this.prisma.user.count(),
      this.prisma.dealer.count(),
      this.prisma.order.count(),
      this.prisma.repairLead.count(),
      this.prisma.inventory.count(),
    ]);

    return {
      users,
      dealers,
      orders,
      repairs,
      inventory,
    };
  }

  async revenue(
    from?: string,
    to?: string,
  ) {
    return {
      from,
      to,
      totalRevenue: 0,
    };
  }

  async dealerAnalytics() {
    return this.prisma.dealer.findMany({
      take: 10,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async inventoryAnalytics() {
    return this.prisma.inventory.findMany({
      take: 20,
    });
  }

  async repairAnalytics() {
    return this.prisma.repairLead.findMany({
      take: 20,
    });
  }

  async subscriptionsAnalytics() {
    return [];
  }
}