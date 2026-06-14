"use client";

import SellCard from "./sell-card"

interface SellOptionProps {
  title: string;
  active?: boolean;
  onClick?: () => void;
}

export default function SellOption({
  title,
  active,
  onClick,
}: SellOptionProps) {
  return (
    <SellCard
      onClick={onClick}
      className={`
        cursor-pointer transition-all duration-300
        ${
          active
            ? "border-blue-500 bg-blue-500/10"
            : ""
        }
      `}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <div
          className={`
            h-5 w-5 rounded-full border-2
            ${
              active
                ? "border-blue-500 bg-blue-500"
                : "border-zinc-500"
            }
          `}
        />
      </div>
    </SellCard>
  );
}