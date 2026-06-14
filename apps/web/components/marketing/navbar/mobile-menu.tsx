"use client";

import { Menu } from "lucide-react";

export default function MobileMenu() {
  return (
    <button className="text-white md:hidden">
      <Menu size={28} />
    </button>
  );
}