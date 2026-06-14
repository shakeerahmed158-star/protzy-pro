"use client";

import { Toaster } from "sonner";

export function AppToaster() {
  return (
    <Toaster
      position="top-right"
      richColors
      expand
      closeButton
      theme="light"
      toastOptions={{
        classNames: {
          toast:
            "rounded-2xl border border-white/40 bg-white/80  shadow-[0_20px_80px_rgba(59,130,246,0.12)]",

          title: "text-zinc-900 font-semibold",

          description: "text-zinc-600",

          actionButton:
            "bg-violet-600 text-white",

          cancelButton:
            "bg-zinc-200 text-zinc-900",
        },
      }}
    />
  );
}