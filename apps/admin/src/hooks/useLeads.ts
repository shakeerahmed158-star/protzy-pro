"use client";

import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { leadService } from "@/services/lead.service";

export const useLeads = () =>
  useQuery({
    queryKey: ["leads"],
    queryFn: leadService.getLeads,
  });

export const useAcceptLead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: leadService.acceptLead,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["leads"],
      });
    },
  });
};

export const useRejectLead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: leadService.rejectLead,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["leads"],
      });
    },
  });
};

export const useCloseLead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: leadService.closeLead,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["leads"],
      });
    },
  });
};