"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  User,
  ShieldCheck,
  Star,
} from "lucide-react";

/* MARKETING ADDONS */
import { AnimatedGradient } from "../../components/marketing/hero/animated-gradient";

import { InteractiveGlow } from "../../components/animations/interactive-glow";
import { MouseGlow } from "../../components/animations/mouse-glow";

import { Spotlight } from "../../components/marketing/backgrounds/spotlight";
import { NoiseOverlay } from "../../components/marketing/backgrounds/noise-overlay";

import { FadeUp } from "../../components/animations/fade-up";
import { motion } from "framer-motion";


export default function Hero() {
  const slides = [
    {
      badge: "Trusted Smart Device Platform",
      title: "New Feel.",
      highlight: "Smart Deal.",
      desc: "Sell, Buy & Upgrade Gadgets Instantly. Certified. Secure. Hassle-Free.",
      image: "/hero/hero1.png",
      cta1: { text: "Sell My Phone", link: "/sell-phone" },
      cta2: { text: "Explore Deals", link: "/buy" },
    },
    {
      badge: "Certified Refurbished Devices",
      title: "Buy Smart.",
      highlight: "Save More.",
      desc: "Top quality checked phones with warranty. Premium devices at unbeatable prices.",
      image: "/hero/hero2.png",
      cta1: { text: "Buy Now", link: "/buy" },
      cta2: { text: "View Deals", link: "/deals" },
    },
    {
      badge: "Doorstep Repair Experts",
      title: "Repair Fast.",
      highlight: "Stress Free.",
      desc: "Quick diagnostics, genuine parts and professional doorstep service across your city.",
      image: "/hero/hero3.png",
      cta1: { text: "Book Repair", link: "/repair" },
      cta2: { text: "Check Price", link: "/repair" },
    },
  ];

  <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
>
  <h1 className="text-5xl font-bold">
    Premium Animation
  </h1>
</motion.div>

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative w-full overflow-hidden bg-[#f6faff] px-4 pb-8 pt-4 md:px-6">

      {/* GLOBAL FX */}
      <MouseGlow />
      <InteractiveGlow />

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/50 bg-white/40 shadow-[0_35px_120px_rgba(37,99,235,0.14)] backdrop-blur-xl">

        {/* PREMIUM BACKGROUND */}
        <div className="absolute inset-0">

          {/* IMAGE */}
          <Image
            src={slide.image}
            alt="Hero Background"
            fill
            priority
            className="object-cover scale-[1.03] transition-all duration-[1800ms]"
          />

          {/* MAIN OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" />

          {/* LUXURY TINT */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-cyan-100/20" />

          {/* EXTRA DEPTH */}
          <div className="absolute inset-0 bg-black/[0.03]" />

          {/* MARKETING FX */}
          <AnimatedGradient />
          <Spotlight />
          <NoiseOverlay />
        </div>

        

        {/* GLOWS */}
        <div className="absolute -right-16 top-[-100px] z-[1] h-[380px] w-[380px] rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute bottom-[-60px] left-[-40px] z-[1] h-[260px] w-[260px] rounded-full bg-cyan-300/20 blur-3xl" />

        {/* CONTENT */}
        <div className="relative z-10 grid min-h-[420px] grid-cols-1 items-center px-6 pb-10 pt-10 md:min-h-[520px] md:px-12">

          <div className="max-w-2xl">

            {/* BADGE */}
            <FadeUp>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-white/70 px-4 py-2 backdrop-blur-md shadow-lg">
                <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-700">
                  {slide.badge}
                </p>
              </div>
            </FadeUp>

            {/* TITLE */}
            <FadeUp delay={0.1}>
              <h1 className="text-[40px] font-black leading-[0.92] tracking-[-0.05em] text-black sm:text-[52px] md:text-[72px]">
                {slide.title}
              </h1>
            </FadeUp>

            {/* HIGHLIGHT */}
            <FadeUp delay={0.15}>
              <h2 className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-[40px] font-black leading-[0.92] tracking-[-0.05em] text-transparent sm:text-[52px] md:text-[72px]">
                {slide.highlight}
              </h2>
            </FadeUp>

            {/* DESC */}
            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-xl text-[15px] leading-8 text-slate-600 md:text-[17px]">
                {slide.desc}
              </p>
            </FadeUp>

            {/* CTA */}
            <FadeUp delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  href={slide.cta1.link}
                  className="group relative flex h-12 items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-[1.03]"
                >
                  <span className="relative z-10">
                    {slide.cta1.text}
                  </span>

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <div className="absolute inset-0 bg-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                </Link>

                <Link
                  href={slide.cta2.link}
                  className="flex h-12 items-center rounded-2xl border border-white/70 bg-white/70 px-6 text-sm font-semibold text-slate-800 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white"
                >
                  {slide.cta2.text}
                </Link>

              </div>
            </FadeUp>

            {/* TRUST */}
            <FadeUp delay={0.3}>
              <div className="mt-8 flex items-center gap-4">

                {/* AVATARS */}
                <div className="flex -space-x-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-400 shadow-lg">
                    <User className="h-5 w-5 text-gray-700" />
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-slate-200 to-slate-400 shadow-lg">
                    <User className="h-5 w-5 text-slate-700" />
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg">
                    <ShieldCheck className="h-5 w-5 text-blue-700" />
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-amber-100 to-amber-300 shadow-lg">
                    <Star className="h-5 w-5 text-amber-700" />
                  </div>

                </div>

                {/* TEXT */}
                <div>
                  <p className="text-sm font-semibold text-slate-800 md:text-base">
                    Trusted by 10,000+ users across India
                  </p>

                  <p className="text-xs text-slate-500">
                    Certified Devices • Secure Payments • Genuine Repairs
                  </p>
                </div>

              </div>
            </FadeUp>

          </div>
        </div>

        {/* BOTTOM FADE */}
        <div className="absolute bottom-0 left-0 z-[2] h-32 w-full bg-gradient-to-t from-white/70 to-transparent" />

        {/* DOTS */}
        <div className="relative z-20 flex justify-center gap-3 pb-7">

          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 ${
                active === i
                  ? "h-2.5 w-8 rounded-full bg-blue-600 shadow-lg"
                  : "h-2.5 w-2.5 rounded-full bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}

        </div>
      </div>
    </section>
  );
}