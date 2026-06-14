"use client";

import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Smartphone,
  Wrench,
  Wallet,
} from "lucide-react";

import { motion } from "framer-motion";

const activities = [
  {
    title: "iPhone 15 Pro Sold",
    desc: "Purchased instantly in Bangalore",
    time: "2 mins ago",
    icon: Smartphone,
  },

  {
    title: "Repair Booked",
    desc: "Screen replacement confirmed",
    time: "5 mins ago",
    icon: Wrench,
  },

  {
    title: "Dealer Payout",
    desc: "₹84,000 transferred securely",
    time: "8 mins ago",
    icon: Wallet,
  },
];

const stats = [
  {
    title: "Live Dealers",
    value: "850+",
  },

  {
    title: "Monthly Devices",
    value: "24K+",
  },

  {
    title: "AI Pricing",
    value: "Realtime",
  },

  {
    title: "Repair Network",
    value: "24/7",
  },
];

const showcase = [
  {
    name: "iPhone 15 Pro Max",
    price: "₹1,39,999",
    tag: "Verified",
  },

  {
    name: "Samsung S25 Ultra",
    price: "₹1,24,999",
    tag: "Trending",
  },

  {
    name: "OnePlus 13 Pro",
    price: "₹74,999",
    tag: "Fast Moving",
  },
];

export default function LiveMarketplace() {
  return (
    <section className="relative overflow-hidden py-20 px-4 md:px-6 bg-gradient-to-b from-white via-[#f8fbff] to-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-blue-100/30 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center">

          <p className="text-[11px] uppercase tracking-[0.22em] font-black text-blue-600">
            LIVE MARKETPLACE
          </p>

          <h2 className="mt-5 text-[40px] md:text-[62px] leading-[0.95] font-black tracking-[-0.05em] text-slate-900">

            Real-Time Device
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}Commerce.
            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8 text-base md:text-lg">
            Experience a premium gadget ecosystem with live activity,
            verified devices and intelligent infrastructure.
          </p>

        </div>

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 mt-16">

          {/* LIVE FEED */}
          <div className="rounded-[36px] border border-white/80 bg-white/80 backdrop-blur-2xl shadow-[0_15px_45px_rgba(15,23,42,0.06)] p-7 overflow-hidden relative">

            {/* GLOW */}
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl" />

            <div className="relative z-10 flex items-center justify-between">

              <div>

                <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-600">
                  Live Activity
                </p>

                <h3 className="mt-3 text-3xl font-black text-slate-900">
                  Marketplace Feed
                </h3>

              </div>

              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

            </div>

            <div className="mt-8 space-y-4">

              {activities.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group rounded-3xl border border-slate-100 bg-slate-50/70 p-5 hover:bg-white transition-all duration-300"
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-4">

                        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg">

                          <Icon className="h-6 w-6" />

                        </div>

                        <div>

                          <h4 className="text-lg font-black text-slate-900">
                            {item.title}
                          </h4>

                          <p className="text-sm text-slate-500 mt-1">
                            {item.desc}
                          </p>

                        </div>

                      </div>

                      <div className="text-xs font-bold text-slate-400">
                        {item.time}
                      </div>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

          {/* FLOATING STATS */}
          <div className="grid grid-cols-2 gap-5">

            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -8,
                }}
                className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/80 backdrop-blur-2xl shadow-[0_15px_45px_rgba(15,23,42,0.06)] p-6"
              >

                {/* CARD GLOW */}
                <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-blue-100/30 blur-2xl" />

                <div className="relative z-10">

                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-xl">

                    <Zap className="h-6 w-6" />

                  </div>

                  <h3 className="mt-7 text-4xl font-black tracking-[-0.03em] text-slate-900">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-sm font-semibold text-slate-500">
                    {item.title}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

        {/* SHOWCASE */}
        <div className="grid lg:grid-cols-3 gap-6 mt-16">

          {showcase.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[36px] border border-white/80 bg-white/80 backdrop-blur-2xl shadow-[0_15px_45px_rgba(15,23,42,0.06)] p-7"
            >

              {/* GLOW */}
              <div className="absolute -top-10 right-0 h-40 w-40 rounded-full bg-blue-100/30 blur-3xl group-hover:scale-125 transition duration-700" />

              {/* DEVICE MOCK */}
              <div className="relative z-10 h-[280px] rounded-[30px] bg-gradient-to-b from-slate-900 to-black flex items-center justify-center overflow-hidden">

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="h-[190px] w-[100px] rounded-[28px] border border-white/10 bg-[#0f172a] shadow-[0_0_50px_rgba(255,255,255,0.08)]"
                />

              </div>

              {/* CONTENT */}
              <div className="relative z-10 mt-8">

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-black text-slate-900">
                    {item.name}
                  </h3>

                  <div className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                    {item.tag}
                  </div>

                </div>

                <p className="mt-5 text-4xl font-black text-slate-900">
                  {item.price}
                </p>

                <button className="group/button mt-7 h-13 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold flex items-center justify-center gap-2 shadow-[0_15px_35px_rgba(37,99,235,0.25)] hover:scale-[1.02] transition">

                  View Device

                  <ArrowUpRight className="h-4 w-4 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition" />

                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}