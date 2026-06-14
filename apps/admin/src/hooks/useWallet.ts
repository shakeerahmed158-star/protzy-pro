"use client";

import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { walletService } from "@/services/wallet.service";

export const useWallet = () => {
  return useQuery({
    queryKey: ["wallet"],
    queryFn: walletService.getWallet,
  });
};

export const useTransactions = () => {
  return useQuery<any[]>({
    queryKey: ["transactions"],
    queryFn: walletService.getTransactions,
  });
};

export const useCreditWallet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: walletService.creditWallet,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wallet"],
      });
    },
  });
};

export const useDebitWallet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: walletService.debitWallet,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wallet"],
      });
    },
  });
};