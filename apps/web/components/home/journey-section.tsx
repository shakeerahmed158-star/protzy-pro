"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock3,
  Sparkles,
} from "lucide-react";

interface Props {
  activeJourney: string;
}

export default function JourneySection({
  activeJourney,
}: Props) {
  const journeys: any = {
    "SELL PHONE": {
      title: "Sell Smart.",
      highlight: "Get Paid Faster.",
      desc: "AI-powered valuation engine with instant pricing, free pickup and lightning-fast payouts.",
      image: "/hero/hero1.png",
      color: "from-blue-600 to-cyan-500",
      stats: [
        "Instant AI Pricing",
        "Free Doorstep Pickup",
        "Same Day Payment",
      ],
      cta: "/sell-phone",
    },

    "BUY REFURBISHED": {
      title: "Buy Premium.",
      highlight: "Save Bigger.",
      desc: "Certified flagship devices with warranty, quality checks and premium refurbishment standards.",
      image: "/hero/hero2.png",
      color: "from-emerald-500 to-teal-500",
      stats: [
        "Warranty Included",
        "Quality Certified",
        "Premium Condition",
      ],
      cta: "/buy",
    },

    REPAIR: {
      title: "Repair Faster.",
      highlight: "Stress Free.",
      desc: "Professional engineers, genuine spare parts and live repair tracking at your doorstep.",
      image: "/hero/hero3.png",
      color: "from-violet-500 to-fuchsia-500",
      stats: [
        "Doorstep Repair",
        "Live Tracking",
        "Genuine Parts",
      ],
      cta: "/repair",
    },

    EXCHANGE: {
      title: "Upgrade Better.",
      highlight: "Exchange Instantly.",
      desc: "Trade old devices for smarter upgrades with bonus exchange offers and premium deals.",
      image: "/hero/hero2.png",
      color: "from-orange-500 to-amber-500",
      stats: [
        "Bonus Exchange",
        "Instant Upgrade",
        "Smart Pricing",
      ],
      cta: "/exchange",
    },
  };

  const item = journeys[activeJourney];

  return (
    <section className="relative px-4 md:px-6 pb-16 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      {/* GLOW */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[300px] w-[700px] rounded-full bg-blue-100/30 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="relative overflow-hidden rounded-[40px] border border-white/70 bg-white/70 backdrop-blur-xl shadow-[0_25px_80px_rgba(15,23,42,0.08)]">

          {/* IMAGE SIDE */}
          <div className="absolute inset-0 md:left-[45%]">

            <Image
              src={item.image}
              alt="journey"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent md:to-transparent" />

          </div>

          {/* FLOATING GLOW */}
          <div className={`absolute -right-20 top-0 h-[350px] w-[350px] rounded-full blur-3xl bg-gradient-to-br ${item.color} opacity-20`} />

          <div className="grid md:grid-cols-2 min-h-[520px] relative z-10">

            {/* LEFT CONTENT */}
            <div className="p-8 md:p-14 flex flex-col justify-center">

              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold w-fit shadow-lg`}>

                <Sparkles className="w-4 h-4" />

                ACTIVE JOURNEY

              </div>

              <h2 className="mt-6 text-[42px] md:text-[64px] font-black tracking-[-0.05em] leading-none text-slate-900">
                {item.title}
              </h2>

              <h3 className={`text-[42px] md:text-[64px] font-black tracking-[-0.05em] leading-none bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                {item.highlight}
              </h3>

              <p className="mt-6 text-slate-600 text-base md:text-lg leading-8 max-w-xl">
                {item.desc}
              </p>

              {/* STATS */}
              <div className="grid sm:grid-cols-3 gap-4 mt-8">

                {item.stats.map((stat: string, i: number) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/70 bg-white/70 backdrop-blur-xl p-4 shadow-sm"
                  >

                    <div className={`h-11 w-11 rounded-2xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center shadow-lg mb-4`}>

                      {i === 0 && <Zap className="w-5 h-5" />}
                      {i === 1 && <Clock3 className="w-5 h-5" />}
                      {i === 2 && <ShieldCheck className="w-5 h-5" />}

                    </div>

                    <p className="text-sm font-bold text-slate-800 leading-6">
                      {stat}
                    </p>

                  </div>
                ))}

              </div>

              {/* CTA */}
              <div className="mt-10 flex gap-4">

                <Link
                  href={item.cta}
                  className={`h-14 px-7 rounded-2xl bg-gradient-to-r ${item.color} text-white font-bold flex items-center gap-3 shadow-xl hover:scale-[1.03] transition`}
                >

                  Start Journey

                  <ArrowRight className="w-5 h-5" />

                </Link>

                <button className="h-14 px-7 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl text-slate-800 font-semibold hover:bg-white transition">
                  Learn More
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}