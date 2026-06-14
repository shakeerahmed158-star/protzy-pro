"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Smartphone,
  ShieldCheck,
  Zap,
  ArrowUpRight,
} from "lucide-react";

export default function StatsStrip() {
  const stats = [
    {
      icon: Sparkles,
      title: "Trusted Experience",
      subtitle: "Smooth & reliable journey",
      small: "Built for modern users",
      color: "from-blue-500 via-cyan-500 to-indigo-600",
      bg: "from-blue-50 to-indigo-50",
      glow: "bg-blue-500/20",
      link: "/about",
    },
    {
      icon: Smartphone,
      title: "Smart Deals",
      subtitle: "Buy, sell & upgrade easily",
      small: "Best value experience",
      color: "from-cyan-500 via-sky-500 to-blue-600",
      bg: "from-cyan-50 to-blue-50",
      glow: "bg-cyan-500/20",
      link: "/buy",
    },
    {
      icon: ShieldCheck,
      title: "Safe Process",
      subtitle: "Verified quality checks",
      small: "Secure at every step",
      color: "from-emerald-500 via-teal-500 to-green-600",
      bg: "from-emerald-50 to-teal-50",
      glow: "bg-emerald-500/20",
      link: "/sell-phone",
    },
    {
      icon: Zap,
      title: "Fast Service",
      subtitle: "Quick pickup & support",
      small: "Hassle-free turnaround",
      color: "from-amber-500 via-orange-500 to-red-500",
      bg: "from-amber-50 to-orange-50",
      glow: "bg-orange-500/20",
      link: "/repair",
    },
  ];

  return (
    <section className="relative z-20 px-4 pb-8 md:px-6 -mt-2 md:-mt-4">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-10 top-0 h-40 w-40 rounded-full bg-blue-300/10 blur-3xl" />

        <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/70 bg-white/80 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                href={item.link}
                key={i}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="group relative overflow-hidden border-b border-slate-100 p-6 transition-all duration-500 sm:p-7 xl:border-b-0 xl:border-r last:border-r-0"
              >

                {/* HOVER BG */}
                <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.bg}`}
                  />

                  <div
                    className={`absolute -right-10 top-[-30px] h-40 w-40 rounded-full ${item.glow} blur-3xl`}
                  />

                </div>

                {/* CONTENT */}
                <div className="relative z-10 flex items-start gap-4">

                  {/* ICON BOX */}
                  <motion.div
                    whileHover={{
                      rotate: [0, -8, 8, 0],
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className={`relative flex h-16 w-16 items-center justify-center rounded-[24px] border border-white/50 bg-gradient-to-br ${item.bg} shadow-[0_15px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl`}
                  >

                    {/* ICON GLOW */}
                    <div
                      className={`absolute inset-0 rounded-[24px] bg-gradient-to-br ${item.color} opacity-10`}
                    />

                    <Icon className="relative z-10 h-7 w-7 text-slate-800" />

                  </motion.div>

                  {/* TEXT */}
                  <div className="flex-1">

                    <div className="flex items-center justify-between">

                      <h3 className="text-lg font-black tracking-[-0.02em] text-slate-900 md:text-xl">
                        {item.title}
                      </h3>

                      <motion.div
                        whileHover={{
                          x: 3,
                          y: -3,
                        }}
                        className="opacity-0 transition duration-300 group-hover:opacity-100"
                      >
                        <ArrowUpRight className="h-5 w-5 text-slate-500" />
                      </motion.div>

                    </div>

                    <p className="mt-1 text-sm font-semibold text-slate-700">
                      {item.subtitle}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.small}
                    </p>

                    {/* PREMIUM LINE */}
                    <motion.div
                      whileHover={{
                        width: 80,
                      }}
                      className={`mt-4 h-[4px] w-12 rounded-full bg-gradient-to-r ${item.color}`}
                    />

                  </div>

                </div>

                {/* SHINE EFFECT */}
                <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">

                  <div className="absolute left-[-120px] top-0 h-full w-[80px] rotate-[20deg] bg-white/40 blur-xl transition-all duration-1000 group-hover:left-[120%]" />

                </div>

              </motion.a>
            );
          })}

        </div>

      </div>
    </section>
  );
}