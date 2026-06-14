import { create } from "zustand";

import {
  getDealerDashboard,
  getDealerStats,
  getDealerEarnings,
} from "../services/dashboard.service";

interface OrderState {
  dashboard: any;
  stats: any;
  earnings: any;

  loadOrders: () => Promise<void>;
}

export const useOrderStore =
  create<OrderState>((set) => ({
    dashboard: null,
    stats: null,
    earnings: null,

    loadOrders: async () => {
      const dashboard =
        await getDealerDashboard();

      const stats =
        await getDealerStats();

      const earnings =
        await getDealerEarnings();

      set({
        dashboard,
        stats,
        earnings,
      });
    },
  }));