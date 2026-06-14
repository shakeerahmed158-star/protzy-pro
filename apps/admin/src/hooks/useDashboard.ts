"use client";

import { useQuery } from "@tanstack/react-query";
import { analyticsService } from "@/services/analytics.service";

export const useDashboard = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: analyticsService.getDashboard,
  });
};