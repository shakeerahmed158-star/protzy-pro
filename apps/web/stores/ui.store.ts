"use Client"
import { create } from "zustand";

interface UIStore {
  isSidebarOpen: boolean;

  isCommandOpen: boolean;

  isLoading: boolean;

  toggleSidebar: () => void;

  openCommand: () => void;

  closeCommand: () => void;

  setLoading: (
    value: boolean
  ) => void;
}

export const useUIStore =
  create<UIStore>((set) => ({
    isSidebarOpen: false,

    isCommandOpen: false,

    isLoading: false,

    toggleSidebar: () =>
      set((state) => ({
        isSidebarOpen:
          !state.isSidebarOpen,
      })),

    openCommand: () =>
      set({
        isCommandOpen: true,
      }),

    closeCommand: () =>
      set({
        isCommandOpen: false,
      }),

    setLoading: (value) =>
      set({
        isLoading: value,
      }),
  }));