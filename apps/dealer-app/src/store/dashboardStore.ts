import { create } from "zustand";

import {
  getDealerDashboard,
  getDealerStats,
  getDealerEarnings,
} from "../services/dashboard.service";


interface DashboardState {
  dashboard: any;
  stats: any;
  earnings: any;

  loadDashboard: () => Promise<void>;
}

export const useDashboardStore =
  create<DashboardState>((set) => ({
    dashboard: null,
    stats: null,
    earnings: null,

    loadDashboard: async () => {
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