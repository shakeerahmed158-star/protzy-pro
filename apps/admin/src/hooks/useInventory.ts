"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { inventoryService } from "@/services/inventory.service";

export const useInventory = () => {
  return useQuery({
    queryKey: ["inventory"],
    queryFn: inventoryService.getInventory,
  });
};

export const useAddInventory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: inventoryService.addInventory,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["inventory"],
      });
    },
  });
};

export const useUpdateInventory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: any;
    }) =>
      inventoryService.updateInventory(
        id,
        payload
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["inventory"],
      });
    },
  });
};

export const useDeleteInventory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: inventoryService.deleteInventory,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["inventory"],
      });
    },
  });
};