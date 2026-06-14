"use client";

import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { orderService } from "@/services/order.service";

export const useOrders = () =>
  useQuery({
    queryKey: ["orders"],
    queryFn: orderService.getOrders,
  });

export const useApproveOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: orderService.approveOrder,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
  });
};

export const useRejectOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: orderService.rejectOrder,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
  });
};