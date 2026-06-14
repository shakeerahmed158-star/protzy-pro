"use client";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "../lib/query-client";

import { ThemeProvider } from "./theme-provider";
import { AppToaster } from "../components/ui/toaster";
import { GlobalModal } from "../components/modals/global-modal";
import { CommandMenu } from "../components/command/command-menu";


export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
 return (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>

      {children}

      <AppToaster />

      <GlobalModal />

       <CommandMenu />

    </ThemeProvider>
  </QueryClientProvider>
);
}