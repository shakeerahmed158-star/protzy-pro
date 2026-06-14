"use client";

import { create } from "zustand";

import { persist } from "zustand/middleware";

interface SellAnswers {
  [key: string]: any;
}

interface SellStore {
  brand: string;

  device: string;

  ram: string;

  storage: string;

  price: number;

  answers: SellAnswers;

  customerName: string;

  customerPhone: string;

  customerCity: string;

  customerAddress: string;

  setBrand: (
    value: string
  ) => void;

  setDevice: (
    value: string
  ) => void;

  setRam: (
    value: string
  ) => void;

  setStorage: (
    value: string
  ) => void;

  setPrice: (
    value: number
  ) => void;

  setAnswers: (
    value: SellAnswers
  ) => void;

  setCustomerDetails: (
    payload: {
      name: string;
      phone: string;
      city: string;
      address: string;
    }
  ) => void;

  resetSellFlow: () => void;
}

export const useSellStore =
  create<SellStore>()(
    persist(
      (set) => ({
        brand: "",

        device: "",

        ram: "",

        storage: "",

        price: 0,

        answers: {},

        customerName: "",

        customerPhone: "",

        customerCity: "",

        customerAddress: "",

        setBrand: (value) =>
          set({
            brand: value,
          }),

        setDevice: (value) =>
          set({
            device: value,
          }),

        setRam: (value) =>
          set({
            ram: value,
          }),

        setStorage: (
          value
        ) =>
          set({
            storage: value,
          }),

        setPrice: (value) =>
          set({
            price: value,
          }),

        setAnswers: (
          value
        ) =>
          set({
            answers: value,
          }),

        setCustomerDetails: (
          payload
        ) =>
          set({
            customerName:
              payload.name,

            customerPhone:
              payload.phone,

            customerCity:
              payload.city,

            customerAddress:
              payload.address,
          }),

        resetSellFlow: () =>
          set({
            brand: "",

            device: "",

            ram: "",

            storage: "",

            price: 0,

            answers: {},

            customerName: "",

            customerPhone: "",

            customerCity: "",

            customerAddress: "",
          }),
      }),

      {
        name:
          "protzy-sell-flow",
      }
    )
  );