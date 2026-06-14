import { Injectable } from '@nestjs/common';



@Injectable()
export class AdminRepository {
  async getDashboard() {
    return {
      totalUsers: 0,
      totalDealers: 0,
      totalOrders: 0,
      totalRevenue: 0,
    };
  }

  async getPendingDealers() {
    return [];
  }

  async approveDealer(id: string) {
    return {
      message: `Dealer ${id} approved`,
    };
  }

  async rejectDealer(id: string) {
    return {
      message: `Dealer ${id} rejected`,
    };
  }
}