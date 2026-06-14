"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Cpu,
} from "lucide-react";

import { motion } from "framer-motion";

import { FadeUp } from "../../../components/animations/fade-up";
import { Reveal } from "../../../components/animations/reveal";
import { TiltCard } from "../../../components/animations/tilt-card";
import { useSellStore } from "../../../stores/useSellStore";




const deviceBrands = {
  phone: [
    { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
    { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" },
    { name: "OnePlus", logo: "https://logo.clearbit.com/oneplus.com" },
    { name: "Xiaomi", logo: "https://logo.clearbit.com/mi.com" },
    { name: "Vivo", logo: "https://logo.clearbit.com/vivo.com" },
    { name: "OPPO", logo: "https://logo.clearbit.com/oppo.com" },
    { name: "Realme", logo: "https://logo.clearbit.com/realme.com" },
    { name: "Motorola", logo: "https://logo.clearbit.com/motorola.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Nothing", logo: "https://logo.clearbit.com/nothing.tech" },
  ],
};

export default function BrandPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const type = searchParams.get("type") || "phone";

  const brands =
    deviceBrands[type as keyof typeof deviceBrands] || [];

  const selectBrand = (brand: string) => {
  const { setBrand } = useSellStore();

const selectBrand = (
  brand: string
) => {

  setBrand(brand);

  router.push(
    `/sell-phone/device?brand=${brand}`
  );
};

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f8ff]">

      {/* =========================== */}
      {/* BACKGROUND ORBS */}
      {/* =========================== */}

      <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-blue-400/20 blur-3xl" />

      <div className="absolute right-[-120px] top-40 h-[320px] w-[320px] rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="absolute bottom-[-100px] left-[35%] h-[280px] w-[280px] rounded-full bg-violet-300/20 blur-3xl" />

      {/* Floating Dots */}

      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-16 top-40 h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.8)]"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-24 top-60 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.8)]"
      />

      {/* =========================== */}
      {/* MAIN */}
      {/* =========================== */}

      <div className="relative z-10 px-4 py-10 md:px-8">

        <div className="mx-auto max-w-7xl">

          {/* =========================== */}
          {/* TOP PROGRESS */}
          {/* =========================== */}

          <FadeUp>
            <div className="mb-10 rounded-[28px] border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-2xl">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
                    Step 1 Of 4
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-black md:text-3xl">
                    Select Your Brand
                  </h2>
                </div>

                <div className="hidden md:flex items-center gap-3 rounded-full bg-blue-50 px-5 py-3">

                  <Sparkles className="h-5 w-5 text-blue-600" />

                  <span className="text-sm font-semibold text-blue-700">
                    AI Smart Pricing Enabled
                  </span>

                </div>
              </div>

              {/* Progress */}

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "25%" }}
                  transition={{
                    duration: 1,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500"
                />

              </div>

            </div>
          </FadeUp>

          {/* =========================== */}
          {/* HERO */}
          {/* =========================== */}

          <FadeUp>
            <div className="mb-14 text-center">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 shadow-xl">

                <Sparkles className="h-4 w-4 text-blue-600" />

                <span className="text-sm font-semibold text-blue-700">
                  Premium Gadget Resale Experience
                </span>

              </div>

              <h1 className="text-[42px] font-black tracking-[-2px] text-black md:text-[72px]">

                Choose Your

                <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent">

                  Device Brand

                </span>

              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">

                Get instant AI-powered pricing,
                secure resale evaluation and premium
                doorstep pickup experience.

              </p>

            </div>
          </FadeUp>

          {/* =========================== */}
          {/* BRAND GRID */}
          {/* =========================== */}

          <Reveal>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">

              {brands.map((item) => (

                <TiltCard key={item.name}>

                  <button
                    onClick={() => selectBrand(item.name)}
                    className="
                      group
                      relative
                      flex
                      h-[250px]
                      w-full
                      flex-col
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[34px]
                      border
                      border-white/70
                      bg-white/80
                      p-6
                      shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                      backdrop-blur-2xl
                      transition-all
                      duration-500
                      hover:-translate-y-3
                      hover:shadow-[0_30px_80px_rgba(59,130,246,0.18)]
                    "
                  >

                    {/* Hover Glow */}

                    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

                    </div>

                    {/* Premium Ring */}

                    <div className="absolute inset-0 rounded-[34px] border border-white/50" />

                    {/* Logo */}

                    <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-white to-slate-100 shadow-[0_20px_40px_rgba(15,23,42,0.10)] transition duration-500 group-hover:scale-110">

                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="object-contain"
                      />

                    </div>

                    {/* Brand */}

                    <h2 className="relative z-10 text-xl font-black text-black">

                      {item.name}

                    </h2>

                    {/* CTA */}

                    <div className="relative z-10 mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 transition-all duration-500 group-hover:opacity-100">

                      Continue

                      <ArrowRight className="h-4 w-4" />

                    </div>

                    {/* Bottom Line */}

                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 transition-all duration-500 group-hover:w-full" />

                  </button>

                </TiltCard>

              ))}

            </div>
          </Reveal>

          {/* =========================== */}
          {/* TRUST PANELS */}
          {/* =========================== */}

          <FadeUp>
            <div className="mt-16 grid gap-5 md:grid-cols-3">

              {/* PANEL 1 */}

              <div className="rounded-[28px] border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] backdrop-blur-2xl">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">

                  <Cpu className="h-7 w-7 text-blue-600" />

                </div>

                <h3 className="mt-5 text-xl font-black text-black">
                  AI Price Engine
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Smart dynamic pricing based on
                  market demand and device condition.
                </p>

              </div>

              {/* PANEL 2 */}

              <div className="rounded-[28px] border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] backdrop-blur-2xl">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">

                  <ShieldCheck className="h-7 w-7 text-emerald-600" />

                </div>

                <h3 className="mt-5 text-xl font-black text-black">
                  Secure Data Wipe
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Your personal data stays protected
                  with secure certified device reset.
                </p>

              </div>

              {/* PANEL 3 */}

              <div className="rounded-[28px] border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] backdrop-blur-2xl">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100">

                  <Zap className="h-7 w-7 text-violet-600" />

                </div>

                <h3 className="mt-5 text-xl font-black text-black">
                  Instant Pickup
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Free doorstep pickup and instant
                  payment processing across India.
                </p>

              </div>

            </div>
          </FadeUp>

        </div>

      </div>

    </main>
  );
}
}