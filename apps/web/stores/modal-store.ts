"use Client"
import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;

 modalType:
 | "auth"
 | "dealer"
 | "repair"
 | "sell"
 | "success"
 | null;

 
  openModal: (
    type: "auth" | "dealer" | "repair"
  ) => void;

  closeModal: () => void;
}

export const useModalStore =
  create<ModalStore>((set) => ({
    isOpen: false,

    modalType: null,

    openModal: (type) =>
      set({
        isOpen: true,
        modalType: type,
      }),

    closeModal: () =>
      set({
        isOpen: false,
        modalType: null,
      }),
  }));