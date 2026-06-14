"use client";

import { ReactNode } from "react";

interface SellContainerProps {
  children: ReactNode;
  className?: string;
}

export function SellContainer({
  children,
  className = "",
}: SellContainerProps) {
  return (
    <div
      className={`
        relative
        z-10
        mx-auto
        w-full
        max-w-7xl
        px-4
        py-10
        md:px-6
        lg:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}