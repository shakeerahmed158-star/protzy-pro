"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({
  children,
}: Props) {
  return (
    <div className="bg-black text-white min-h-screen">
      {children}
    </div>
  );
}