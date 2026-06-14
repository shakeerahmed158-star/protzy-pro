"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import JourneySection from "./journey-section";

export default function FeaturesCards() {

  const [journey, setJourney] = useState("SELL PHONE");
  
  const cards = [
    {
      tag: "SELL PHONE",
      title: "Get Instant Cash",
      desc: "Free pickup. Best value. Fast payout with AI-powered pricing engine.",
      image: "/cards/phone.png",
      color: "from-blue-50 via-white to-blue-100",
      glow: "from-blue-500/20 to-indigo-500/10",
      btn: "from-blue-600 to-indigo-600",
      link: "/sell-phone",
      stats: "2 Min Evaluation",
    },
    {
      tag: "BUY REFURBISHED",
      title: "Premium Quality",
      desc: "Certified devices with warranty support and flagship-grade quality checks.",
      image: "/cards/laptop.png",
      color: "from-emerald-50 via-white to-green-100",
      glow: "from-emerald-500/20 to-teal-500/10",
      btn: "from-emerald-500 to-teal-600",
      link: "/buy-refurbished",
      stats: "12 Month Warranty",
    },
    {
      tag: "REPAIR",
      title: "Expert Service",
      desc: "Doorstep repair experts with genuine spare parts and live tracking.",
      image: "/cards/airpods.png",
      color: "from-violet-50 via-white to-purple-100",
      glow: "from-violet-500/20 to-fuchsia-500/10",
      btn: "from-violet-500 to-purple-600",
      link: "/repair",
      stats: "30 Min Booking",
    },
    {
      tag: "EXCHANGE",
      title: "Upgrade & Save",
      desc: "Trade old devices instantly and upgrade smarter with exchange bonuses.",
      image: "/cards/watch.png",
      color: "from-orange-50 via-white to-amber-100",
      glow: "from-orange-500/20 to-amber-500/10",
      btn: "from-orange-500 to-amber-500",
      link: "/exchange",
      stats: "Instant Exchange",
    },
  ];

  return (
    <section className="relative py-14 px-4 md:px-6 overflow-hidden">

      {/* GLOBAL PREMIUM BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      {/* TOP GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[700px] bg-blue-100/40 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADING */}
        <div className="text-center mb-12">

          <p className="text-[11px] font-black tracking-[0.22em] uppercase text-blue-600">
            Smart Device Ecosystem
          </p>

          <h2 className="mt-4 text-[36px] md:text-[54px] font-black tracking-[-0.04em] text-slate-900 leading-none">
            One Platform.
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}Every Journey.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 leading-8 text-base md:text-lg">
            Sell, buy, repair and upgrade your gadgets through an immersive premium experience built for modern users.
          </p>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">

         {cards.map((card, i) => (
  <div
    key={i}
    onClick={() => setJourney(card.tag)}
    className={`group relative overflow-hidden cursor-pointer rounded-[34px] p-6 bg-gradient-to-br ${card.color}
    border border-white/80
    shadow-[0_15px_45px_rgba(15,23,42,0.06)]
    hover:shadow-[0_30px_70px_rgba(15,23,42,0.14)]
    hover:-translate-y-2
    transition-all duration-500`}
>
              {/* Animated Glow */}
              <div
                className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-70 bg-gradient-to-br ${card.glow}
                group-hover:scale-125 transition duration-700`}
              />

              {/* Glass Overlay */}
              <div className="absolute inset-[1px] rounded-[33px] bg-white/75 backdrop-blur-xl" />

              {/* Floating Light */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="absolute top-0 left-[-100%] h-full w-[120px] rotate-12 bg-white/40 blur-2xl group-hover:left-[120%] transition-all duration-1000" />
              </div>

              <div className="relative z-10">

                {/* TOP */}
                <div className="flex items-center justify-between">

                  <p className="text-[11px] font-black tracking-[0.2em] text-slate-500">
                    {card.tag}
                  </p>

                  <div className="px-3 py-1 rounded-full bg-white/80 backdrop-blur text-[10px] font-bold text-slate-700 shadow-sm border border-white">
                    {card.stats}
                  </div>

                </div>

                {/* TITLE */}
                <h3 className="text-[30px] leading-tight font-black text-slate-900 mt-5 tracking-[-0.03em]">
                  {card.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-slate-600 mt-3 leading-7 min-h-[74px]">
                  {card.desc}
                </p>

                {/* IMAGE */}
                <div className="relative mt-7 flex justify-center">

                  {/* Shadow Glow */}
                  <div className={`absolute bottom-2 h-16 w-24 rounded-full blur-2xl bg-gradient-to-r ${card.glow}`} />

                  <Image
                    src={card.image}
                    alt={card.title}
                    width={190}
                    height={190}
                    className="relative object-contain h-[140px] w-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.16)]
                    group-hover:scale-110
                    group-hover:-translate-y-2
                    transition duration-500"
                  />

                </div>

                {/* CTA */}
                <div className="mt-7 flex items-center justify-between">

                  <div className={`h-[4px] w-12 rounded-full bg-gradient-to-r ${card.btn}
                  group-hover:w-24 transition-all duration-500`} />

                  <div
                    className={`h-12 w-12 rounded-2xl bg-gradient-to-r ${card.btn}
                    text-white flex items-center justify-center
                    shadow-xl
                    group-hover:scale-110
                    group-hover:rotate-[-8deg]
                    transition duration-300`}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </div>

                </div>

              </div>

              {/* Premium Border */}
              <div className="absolute inset-0 rounded-[34px] border border-white/50 pointer-events-none" />

            </div>
          ))}
        </div>
      </div>
      <JourneySection activeJourney={journey} />
    </section>
  );
}