"use client";

import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Wrench,
  Wallet,
  Package,
  Truck,
  BarChart3,
  BrainCircuit,
  Settings,
} from "lucide-react";
import { Plus } from "lucide-react";



const menus = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Buy Dealers", icon: Users },
  { name: "Sell Dealers", icon: ShoppingCart },
  { name: "Repair Dealers", icon: Wrench },
  { name: "Inventory", icon: Package },
  { name: "Wallet", icon: Wallet },
  { name: "Logistics", icon: Truck },
  { name: "Analytics", icon: BarChart3 },
  { name: "AI Center", icon: BrainCircuit },
  { name: "Settings", icon: Settings },
  {
  name: "Add Inventory",
  href: "/inventory/add",
  icon: Plus,
}
];

export default function AdminSidebar() {
  return (
    <aside
      className="
      w-72
      min-h-screen
      bg-white
      border-r
      border-gray-200
      shadow-sm
      "
    >
      <div className="p-8">
        <h1
          className="
          text-4xl
          font-black
          text-gray-900
          "
        >
          protzy
        </h1>

        <p className="text-gray-500 mt-1">
          CEO Control Panel
        </p>

        <div className="mt-10 space-y-2">
          {menus.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className="
                flex
                items-center
                gap-3
                w-full
                px-4
                py-3
                rounded-xl
                text-gray-700
                hover:bg-yellow-100
                hover:text-black
                transition-all
                duration-200
                "
              >
                <Icon size={20} />
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}