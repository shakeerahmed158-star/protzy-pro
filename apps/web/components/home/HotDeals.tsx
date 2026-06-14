"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  Heart,
} from "lucide-react";

export default function HotDeals() {
  const products = [
    {
      badge: "Best Seller",
      name: "iPhone 13",
      spec: "128 GB • Like New",
      price: "₹42,999",
      old: "₹49,999",
      off: "13% OFF",
      image: "/products/p1.png",
      color: "from-amber-500 via-orange-500 to-red-500",
      bg: "from-amber-50 to-orange-50",
      glow: "bg-orange-500/20",
    },
    {
      badge: "Hot Deal",
      name: "Samsung Galaxy S22",
      spec: "256 GB • Excellent",
      price: "₹34,999",
      old: "₹39,999",
      off: "11% OFF",
      image: "/products/p2.png",
      color: "from-rose-500 via-pink-500 to-red-500",
      bg: "from-rose-50 to-pink-50",
      glow: "bg-pink-500/20",
    },
    {
      badge: "Fast Selling",
      name: "OnePlus 11",
      spec: "256 GB • Mint",
      price: "₹38,999",
      old: "₹44,999",
      off: "15% OFF",
      image: "/products/p3.png",
      color: "from-emerald-500 via-teal-500 to-cyan-500",
      bg: "from-emerald-50 to-teal-50",
      glow: "bg-emerald-500/20",
    },
    {
      badge: "Top Pick",
      name: "iPhone 15",
      spec: "128 GB • Like New",
      price: "₹32,999",
      old: "₹34,999",
      off: "9% OFF",
      image: "/products/p4.png",
      color: "from-blue-500 via-indigo-500 to-violet-500",
      bg: "from-blue-50 to-indigo-50",
      glow: "bg-blue-500/20",
    },
    {
      badge: "Budget Buy",
      name: "Samsung A54",
      spec: "128 GB • Good",
      price: "₹19,999",
      old: "₹22,499",
      off: "11% OFF",
      image: "/products/p5.png",
      color: "from-violet-500 via-purple-500 to-fuchsia-500",
      bg: "from-violet-50 to-purple-50",
      glow: "bg-violet-500/20",
    },
    {
      badge: "Value Deal",
      name: "Redmi Note 12 Pro",
      spec: "128 GB • Refurbished",
      price: "₹17,999",
      old: "₹21,499",
      off: "16% OFF",
      image: "/products/p6.png",
      color: "from-cyan-500 via-sky-500 to-blue-500",
      bg: "from-cyan-50 to-sky-50",
      glow: "bg-cyan-500/20",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f8fbff] px-4 py-14 md:px-6">

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-8 flex items-center justify-between gap-4">

          <div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-xl"
            >

              <Sparkles className="h-4 w-4 text-blue-600" />

              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-700">
                Deals Zone
              </p>

            </motion.div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              Hot Deals{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Limited Time
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
              Explore premium refurbished smartphones with verified quality,
              warranty support and exclusive pricing.
            </p>

          </div>

          {/* DESKTOP BUTTON */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:block"
          >

            <Link
              href="/deals"
              className="flex h-12 items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-6 text-sm font-semibold text-slate-700 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-blue-200 hover:text-blue-600"
            >
              View All

              <ChevronRight className="h-4 w-4" />

            </Link>

          </motion.div>

        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">

          {products.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-[0_15px_40px_rgba(15,23,42,0.06)] backdrop-blur-2xl"
            >

              {/* HOVER BG */}
              <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.bg}`}
                />

                <div
                  className={`absolute -right-10 top-[-20px] h-40 w-40 rounded-full ${item.glow} blur-3xl`}
                />

              </div>

              {/* TOP */}
              <div className="relative z-10 flex items-start justify-between">

                {/* BADGE */}
                <div
                  className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${item.bg} px-3 py-1 text-[10px] font-black tracking-wide text-slate-700 shadow-sm`}
                >

                  <Sparkles className="h-3 w-3" />

                  {item.badge}

                </div>

                {/* HEART */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/90 shadow-sm transition-all hover:border-rose-200 hover:bg-rose-50"
                >

                  <Heart className="h-4 w-4 text-slate-500" />

                </motion.button>

              </div>

              {/* IMAGE */}
              <div
                className={`relative z-10 mt-4 flex h-[150px] items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br ${item.bg}`}
              >

                {/* SHINE */}
                <div className="absolute left-[-120px] top-0 h-full w-[80px] rotate-[20deg] bg-white/30 blur-xl transition-all duration-1000 group-hover:left-[120%]" />

                <motion.div
                  whileHover={{
                    rotate: [0, -4, 4, 0],
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >

                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="h-[130px] w-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.18)]"
                  />

                </motion.div>

              </div>

              {/* INFO */}
              <div className="relative z-10">

                <h3 className="mt-5 min-h-[44px] text-sm font-black leading-tight text-slate-900 md:text-[15px]">
                  {item.name}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {item.spec}
                </p>

                {/* PRICE */}
                <div className="mt-4 flex items-end justify-between">

                  <div>

                    <p className="text-2xl font-black tracking-tight text-slate-900">
                      {item.price}
                    </p>

                    <div className="mt-1 flex items-center gap-2 flex-wrap">

                      <span className="text-xs text-slate-400 line-through">
                        {item.old}
                      </span>

                      <span
                        className={`bg-gradient-to-r ${item.color} bg-clip-text text-[11px] font-black text-transparent`}
                      >
                        {item.off}
                      </span>

                    </div>

                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-xl`}
                  >

                    <ArrowUpRight className="h-5 w-5" />

                  </motion.button>

                </div>

                {/* BOTTOM LINE */}
                <div
                  className={`mt-5 h-[4px] w-12 rounded-full bg-gradient-to-r ${item.color} transition-all duration-500 group-hover:w-full`}
                />

              </div>

            </motion.div>
          ))}

        </div>

        {/* MOBILE BUTTON */}
        <div className="mt-6 md:hidden">

          <Link
            href="/deals"
            className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 text-sm font-semibold text-slate-700 shadow-xl backdrop-blur-xl"
          >
            View All Deals

            <ChevronRight className="h-4 w-4" />

          </Link>

        </div>

      </div>

    </section>
  );
}