import { create } from "zustand";

import {
  getWallet,
  getTransactions,
  createRecharge,
  verifyRecharge,
} from "../services/wallet.service";

interface WalletState {
  wallet: any;
  transactions: any[];
  loading: boolean;

  loadWallet: () => Promise<void>;

  createWalletRecharge: (
    amount: number
  ) => Promise<any>;

  verifyWalletRecharge: (
    payload: any
  ) => Promise<any>;
}

export const useWalletStore =
  create<WalletState>((set) => ({
    wallet: null,
    transactions: [],
    loading: false,

    loadWallet: async () => {
      set({ loading: true });

      try {
        const wallet =
          await getWallet();

        const transactions =
          await getTransactions();

        set({
          wallet,
          transactions,
        });
      } finally {
        set({
          loading: false,
        });
      }
    },

    createWalletRecharge:
      async (amount: number) => {
        return createRecharge({
          amount,
        });
      },

    verifyWalletRecharge:
      async (payload: any) => {
        const result =
          await verifyRecharge(
            payload
          );

        const wallet =
          await getWallet();

        const transactions =
          await getTransactions();

        set({
          wallet,
          transactions,
        });

        return result;
      },
  }));