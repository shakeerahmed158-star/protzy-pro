"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Wrench,
  Users,
} from "lucide-react";

const items = [
  {
    title: "Dashboard",
    href: "/dealer/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Inventory",
    href: "/dealer/inventory",
    icon: Package,
  },
  {
    title: "Orders",
    href: "/dealer/orders",
    icon: ShoppingCart,
  },
  {
    title: "Repairs",
    href: "/dealer/repairs",
    icon: Wrench,
  },
  {
    title: "Customers",
    href: "/dealer/customers",
    icon: Users,
  },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl border border-zinc-800 bg-zinc-900 p-2 text-white lg:hidden"
      >
        <Menu size={20} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="h-full w-[280px] border-r border-zinc-800 bg-[#0f172a] p-6">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">
                  GOOPSY PRO
                </h1>

                <p className="text-sm text-zinc-700">
                  Dealer Platform
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-2 text-white"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="space-y-2">
              {items.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
                  >
                    <Icon size={18} />
                    {item.title}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}