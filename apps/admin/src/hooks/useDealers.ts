"use client";

import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { dealerService } from "@/services/dealer.service";

export const useDealers = () => {
  return useQuery({
    queryKey: ["dealers"],
    queryFn: dealerService.getPendingDealers,
  });
};

export const useApproveDealer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: dealerService.approveDealer,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dealers"],
      });
    },
  });
};

export const useRejectDealer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: dealerService.rejectDealer,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dealers"],
      });
    },
  });
};