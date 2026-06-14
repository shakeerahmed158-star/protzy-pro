"use client";

import { Search } from "lucide-react";

interface SellSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SellSearch({
  value,
  onChange,
  placeholder,
}: SellSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          h-14 w-full rounded-2xl
          border border-white/10
          bg-white/5
          pl-12 pr-4
          text-white
          outline-none
          backdrop-blur-xl
          transition-all
          duration-300
          placeholder:text-zinc-500
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/30
        "
      />
    </div>
  );
}