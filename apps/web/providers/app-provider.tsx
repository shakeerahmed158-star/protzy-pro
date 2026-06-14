"use client";

import { ReactNode } from "react";

import QueryProvider from "../providers/query-provider";
import ThemeProvider from "./theme-provider";
import MotionProvider from "./motion-provider";

interface Props {
  children: ReactNode;
}

export default function AppProvider({
  children,
}: Props) {
  return (
    <QueryProvider>
  <ThemeProvider>
    <MotionProvider>
      {children}
    </MotionProvider>
  </ThemeProvider>
</QueryProvider>
  );
}