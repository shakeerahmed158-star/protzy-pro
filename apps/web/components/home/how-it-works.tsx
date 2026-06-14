"use client";

import {
  Smartphone,
  IndianRupee,
  CalendarDays,
  SearchCheck,
  Wallet,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Smartphone,
      title: "Select Device",
      desc: "Choose your device in seconds with our smart AI-assisted flow.",
      color: "from-blue-500 to-indigo-600",
      bg: "from-blue-50 via-white to-indigo-50",
      glow: "bg-blue-500/10",
    },

    {
      icon: IndianRupee,
      title: "Get Instant Price",
      desc: "Answer a few quick questions and receive live market pricing instantly.",
      color: "from-emerald-500 to-teal-600",
      bg: "from-emerald-50 via-white to-teal-50",
      glow: "bg-emerald-500/10",
    },

    {
      icon: CalendarDays,
      title: "Schedule Pickup",
      desc: "Choose your preferred time slot for smooth doorstep pickup.",
      color: "from-violet-500 to-purple-600",
      bg: "from-violet-50 via-white to-purple-50",
      glow: "bg-violet-500/10",
    },

    {
      icon: SearchCheck,
      title: "We Inspect",
      desc: "Advanced quality checks and secure certified data wipe process.",
      color: "from-cyan-500 to-sky-500",
      bg: "from-cyan-50 via-white to-sky-50",
      glow: "bg-cyan-500/10",
    },

    {
      icon: Wallet,
      title: "Get Paid Instantly",
      desc: "Receive secure payment instantly after successful verification.",
      color: "from-amber-500 to-orange-500",
      bg: "from-amber-50 via-white to-orange-50",
      glow: "bg-orange-500/10",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-[#f8fbff] via-white to-[#f8fbff]">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[350px] w-[700px] bg-blue-200/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 h-[260px] w-[260px] bg-cyan-100/30 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2 backdrop-blur-md">

              <Sparkles className="h-4 w-4 text-blue-600" />

              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-700">
                Premium Process
              </p>

            </div>

            <h2 className="mt-5 text-[38px] md:text-[58px] leading-[0.95] font-black tracking-[-0.05em] text-slate-900">

              How
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                {" "}Goopsy{" "}
              </span>
              Works

            </h2>

          </div>

          <p className="max-w-md text-sm md:text-base leading-7 text-slate-500 font-medium">
            Experience a futuristic and seamless gadget ecosystem built for speed, trust and convenience.
          </p>

        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="hidden xl:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-blue-100 via-slate-200 to-cyan-100" />

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">

            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <div key={i} className="relative group">

                  {/* CARD */}
                  <div
                    className={`relative overflow-hidden rounded-[34px] bg-gradient-to-br ${step.bg}
                    border border-white/80
                    backdrop-blur-2xl
                    shadow-[0_15px_45px_rgba(15,23,42,0.06)]
                    hover:shadow-[0_30px_80px_rgba(37,99,235,0.12)]
                    hover:-translate-y-2
                    transition-all duration-500
                    min-h-[280px]
                    p-6`}
                  >

                    {/* PREMIUM GLOW */}
                    <div
                      className={`absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl ${step.glow} opacity-70 group-hover:scale-125 transition duration-700`}
                    />

                    {/* STEP NUMBER */}
                    <div className="absolute top-5 right-5 text-[54px] leading-none font-black text-slate-100">
                      0{i + 1}
                    </div>

                    {/* ICON */}
                    <div
                      className={`relative z-10 h-18 w-18 rounded-[22px] bg-gradient-to-br ${step.color}
                      flex items-center justify-center
                      shadow-[0_15px_35px_rgba(37,99,235,0.25)]
                      group-hover:scale-110
                      group-hover:rotate-3
                      transition duration-500`}
                    >

                      <Icon className="h-8 w-8 text-white" />

                    </div>

                    {/* TITLE */}
                    <h3 className="relative z-10 mt-8 text-[24px] leading-tight font-black tracking-[-0.03em] text-slate-900">
                      {step.title}
                    </h3>

                    {/* DESC */}
                    <p className="relative z-10 mt-4 text-sm md:text-[15px] text-slate-600 leading-7">
                      {step.desc}
                    </p>

                    {/* BOTTOM BAR */}
                    <div
                      className={`relative z-10 mt-7 h-[4px] w-12 rounded-full bg-gradient-to-r ${step.color}
                      group-hover:w-24 transition-all duration-500`}
                    />

                    {/* GLASS OVERLAY */}
                    <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition duration-500" />

                  </div>

                  {/* CONNECTOR */}
                  {i !== steps.length - 1 && (
                    <div className="hidden xl:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20">

                      <div className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200 shadow-[0_10px_25px_rgba(15,23,42,0.08)] flex items-center justify-center">

                        <ChevronRight className="h-4 w-4 text-slate-400" />

                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}