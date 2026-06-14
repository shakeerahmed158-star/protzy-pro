"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  ShoppingCart,
  ChevronDown,
  Sparkles,
  Smartphone,
  Laptop,
  RefreshCw,
  ShieldCheck,
  Headphones,
  Wrench,
} from "lucide-react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const menus = [
    {
      title: "Sell Phone",
      icon: <Smartphone size={15} />,
      featured: "Get best resale value instantly",
      items: ["iPhone", "Samsung", "OnePlus", "Xiaomi", "Vivo", "More Brands"],
    },
    {
      title: "Sell Gadgets",
      icon: <Laptop size={15} />,
      featured: "Laptop, Tablet & more",
      items: ["Laptop", "Tablet", "Smartwatch", "Camera", "Gaming Console"],
    },
    {
      title: "Buy Refurbished",
      icon: <ShieldCheck size={15} />,
      featured: "Certified devices with warranty",
      items: ["Phones", "Laptops", "Premium Deals", "Budget Deals"],
    },
    {
      title: "Exchange",
      icon: <RefreshCw size={15} />,
      featured: "Upgrade to latest gadgets",
      items: ["Phone Exchange", "Laptop Exchange", "Smartwatch Exchange"],
    },
    {
      title: "Repair",
      icon: <Wrench size={15} />,
      featured: "Doorstep repair experts",
      items: ["Screen Repair", "Battery", "Speaker", "Water Damage"],
    },
    {
      title: "More",
      icon: <Headphones size={15} />,
      featured: "Support & company info",
      items: ["Track Order", "Help Center", "About Us", "Partner With Us"],
    },
  ];

  return (
    <header className="sticky top-0 z-[9999] bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.06)] overflow-visible">
      
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto h-[82px] px-4 md:px-6 flex items-center gap-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-500 to-blue-700 text-white flex items-center justify-center font-black text-lg shadow-xl group-hover:scale-105 transition duration-300">
            G
          </div>

          <div>
            <h1 className="text-[30px] font-black leading-none tracking-tight text-slate-900">
              Goopsy
            </h1>
            <p className="text-[10px] uppercase tracking-[0.32em] text-slate-400 font-semibold">
              Smart Gadgets
            </p>
          </div>
        </Link>

        {/* SEARCH */}
        <div className="flex-1 hidden md:block">
          <div className="h-12 rounded-full border border-slate-200 bg-white px-5 flex items-center gap-3 shadow-sm hover:shadow-md transition">
            <Search size={18} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search mobiles, laptops & accessories"
              className="w-full bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">

          <button className="hidden md:flex h-11 px-4 rounded-full border border-slate-200 items-center gap-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition">
            <MapPin size={15} />
            Bengaluru
            <ChevronDown size={14} />
          </button>

          <button className="relative w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition">
            <ShoppingCart size={18} className="text-slate-700" />
            <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
              0
            </span>
          </button>

          <button className="h-11 px-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-lg hover:scale-[1.02] transition flex items-center gap-2">
            <Sparkles size={14} />
            Login / Signup
          </button>

        </div>
      </div>

      {/* MENU BAR */}
      <div className="border-t border-slate-100 bg-white relative overflow-visible">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-[56px] flex items-center gap-2 overflow-visible">

          {menus.map((menu) => (
            <div
              key={menu.title}
              className="relative shrink-0"
              onMouseEnter={() => setOpenMenu(menu.title)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {/* MENU BUTTON */}
              <button className="h-10 px-4 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition">
                {menu.icon}
                {menu.title}
                <ChevronDown
                  size={14}
                  className={`transition duration-200 ${
                    openMenu === menu.title ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN */}
              <div
                className={`absolute left-0 top-full pt-2 z-[9999] transition-all duration-200 ${
                  openMenu === menu.title
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="w-[340px] rounded-2xl border border-slate-200 bg-white shadow-[0_30px_70px_rgba(15,23,42,0.14)] overflow-hidden">

                
                  {/* ITEMS */}
                  <div className="p-3 space-y-1">
                    {menu.items.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

    </header>
  );
}