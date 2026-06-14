import { create } from "zustand";

interface RepairState {
  jobs: any[];
  loading: boolean;
}

export const useRepairStore =
  create<RepairState>(() => ({
    jobs: [],
    loading: false,
  }));