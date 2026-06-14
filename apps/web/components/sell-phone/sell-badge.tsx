"use client";

import { ReactNode } from "react";

interface SellBadgeProps {
  text: string;
  icon?: ReactNode;
  className?: string;
}

export default function SellBadge({
  text,
  icon,
  className = "",
}: SellBadgeProps) {
  return (
    <div
      className={`
        inline-flex items-center gap-2
        rounded-full
        border border-white/10
        bg-white/5
        px-4 py-2
        text-sm font-medium
        text-zinc-200
        backdrop-blur-xl
        transition-all duration-300
        hover:bg-white/10
        hover:border-blue-500/30
        ${className}
      `}
    >
      {icon && (
        <span className="text-blue-400">
          {icon}
        </span>
      )}

      <span>{text}</span>
    </div>
  );
}