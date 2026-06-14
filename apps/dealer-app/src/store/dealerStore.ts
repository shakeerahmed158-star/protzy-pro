import { create } from "zustand";

import {
  getMyDealer,
} from "../services/dealer.service";

interface DealerState {
  dealer: any;

  loading: boolean;

  loadDealer: () => Promise<void>;

  clearDealer: () => void;
}

export const useDealerStore =
  create<DealerState>((set) => ({
    dealer: null,

    loading: false,

    loadDealer: async () => {
      set({
        loading: true,
      });

      try {
        const dealer =
          await getMyDealer();

        set({
          dealer,
        });
      } finally {
        set({
          loading: false,
        });
      }
    },

    clearDealer: () =>
      set({
        dealer: null,
      }),
  }));