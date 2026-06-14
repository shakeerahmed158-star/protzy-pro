import { create } from "zustand";

import {
  getInventory,
  addInventory,
  updateInventory,
  deleteInventory,
} from "../services/inventory.service";

interface InventoryState {
  inventory: any[];
  loading: boolean;

  loadInventory: () => Promise<void>;

  addItem: (payload: any) => Promise<void>;

  updateItem: (
    id: string,
    payload: any
  ) => Promise<void>;

  deleteItem: (id: string) => Promise<void>;
}

export const useInventoryStore =
  create<InventoryState>((set) => ({
    inventory: [],
    loading: false,

    loadInventory: async () => {
      set({ loading: true });

      try {
        const data =
          await getInventory();

        set({
          inventory: data || [],
        });
      } finally {
        set({ loading: false });
      }
    },

    addItem: async (payload) => {
      await addInventory(payload);

      const data =
        await getInventory();

      set({
        inventory: data || [],
      });
    },

    updateItem: async (
      id,
      payload
    ) => {
      await updateInventory(
        id,
        payload
      );

      const data =
        await getInventory();

      set({
        inventory: data || [],
      });
    },

    deleteItem: async (id) => {
      await deleteInventory(id);

      const data =
        await getInventory();

      set({
        inventory: data || [],
      });
    },
  }));