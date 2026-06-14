"use client";

import { Bell, Search } from "lucide-react";

import { MobileNav } from "./mobile-nav";


export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-800 px-6">
      <div>
        <h2 className="text-2xl font-semibold">
          Dealer Dashboard
        </h2>

        <p className="text-sm text-zinc-700">
          Welcome back to protzy Pro
        </p>
      </div>

      <div className="flex items-center gap-4">
  <MobileNav />

        <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2">
          <Search size={16} />
          <input
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
        </div>

        <button className="rounded-xl border border-zinc-800 bg-zinc-900 p-3">
          <Bell size={18} />
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black font-bold">
          S
        </div>
      </div>
    </header>
  );
}