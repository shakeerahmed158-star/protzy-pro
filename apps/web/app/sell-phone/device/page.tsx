"use client";

import { useMemo, useState } from "react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  ArrowRight,
  Search,
  Smartphone,
  Sparkles,
  ShieldCheck,
  Zap,
  Cpu,
} from "lucide-react";

import { motion } from "framer-motion";

import { FadeUp } from "../../../components/animations/fade-up";
import { Reveal } from "../../../components/animations/reveal";
import { TiltCard } from "../../../components/animations/tilt-card";

import { DEVICE_MODELS } from "../../../constants/device-models";
import { useSellStore } from "../../../stores/useSellStore";





export default function DevicePage() {
  const router = useRouter();

  const params = useSearchParams();

  const brand =
    params.get("brand") || "";

  const [search, setSearch] =
    useState("");

    const {
  setDevice
} = useSellStore();

  //////////////////////////////////////////////////////
  // FILTERED LIST
  //////////////////////////////////////////////////////

  const list = useMemo(() => {

    return (
      DEVICE_MODELS[brand] || []
    ).filter((item) =>
      item
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  }, [brand, search]);

  //////////////////////////////////////////////////////
  // SELECT MODEL
  //////////////////////////////////////////////////////

 const selectModel = (
  device: string
) => {

  setDevice(device);

  router.push(
    `/sell-phone/config?brand=${brand}&device=${device}`
  );
};

  //////////////////////////////////////////////////////
  // UI
  //////////////////////////////////////////////////////

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f8ff]">

      {/* BACKGROUND */}

      <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-blue-400/20 blur-3xl" />

      <div className="absolute right-[-120px] top-40 h-[320px] w-[320px] rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="absolute bottom-[-100px] left-[35%] h-[280px] w-[280px] rounded-full bg-violet-300/20 blur-3xl" />

      {/* FLOATING DOTS */}

      <motion.div
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-16 top-40 h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.8)]"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-24 top-60 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.8)]"
      />

      <div className="relative z-10 px-4 py-10 md:px-8">

        <div className="mx-auto max-w-7xl">

          {/* TOP PROGRESS */}

          <FadeUp>

            <div className="mb-10 rounded-[30px] border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-2xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
                    Step 2 Of 4
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-black md:text-3xl">
                    Select Your Device
                  </h2>

                </div>

                <div className="hidden md:flex items-center gap-3 rounded-full bg-blue-50 px-5 py-3">

                  <Sparkles className="h-5 w-5 text-blue-600" />

                  <span className="text-sm font-semibold text-blue-700">
                    AI Smart Pricing Enabled
                  </span>

                </div>

              </div>

              {/* PROGRESS */}

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "50%",
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500"
                />

              </div>

            </div>

          </FadeUp>

          {/* HERO */}

          <FadeUp>

            <div className="mb-10 rounded-[34px] border border-white/70 bg-white/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.06)] backdrop-blur-3xl md:p-8">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 shadow-lg">

                <Sparkles className="h-4 w-4 text-blue-600" />

                <span className="text-sm font-semibold text-blue-700">
                  AI Powered Device Evaluation
                </span>

              </div>

              <p className="mb-3 text-sm font-medium text-slate-500">
                Sell Device / {brand}
              </p>

              <h1 className="text-[42px] font-black tracking-[-2px] text-black md:text-[72px]">

                Choose Your

                <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent">

                  Device Model

                </span>

              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">

                Search your exact device model and
                get accurate AI-powered resale pricing
                instantly.

              </p>

              {/* SEARCH */}

              <div className="relative mt-8">

                <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search your device model..."
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                  className="
                    h-16
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    pl-14
                    pr-5
                    text-black
                    shadow-lg
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-400
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/20
                  "
                />

              </div>

            </div>

          </FadeUp>

          {/* DEVICE GRID */}

          <Reveal>

            {list.length > 0 ? (

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

                {list.map(
                  (item, index) => (

                    <TiltCard key={index}>

                      <button
                        onClick={() =>
                          selectModel(item)
                        }
                        className="
                          group
                          relative
                          w-full
                          overflow-hidden
                          rounded-[32px]
                          border
                          border-white/70
                          bg-white/80
                          p-6
                          text-left
                          shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                          backdrop-blur-3xl
                          transition-all
                          duration-500
                          hover:-translate-y-2
                          hover:shadow-[0_30px_80px_rgba(59,130,246,0.15)]
                        "
                      >

                        {/* GLOW */}

                        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

                        </div>

                        {/* TOP */}

                        <div className="relative z-10 flex items-center gap-5">

                          {/* ICON */}

                          <div className="flex h-18 w-18 items-center justify-center rounded-[24px] bg-gradient-to-br from-blue-100 to-cyan-100">

                            <Smartphone className="h-9 w-9 text-blue-600" />

                          </div>

                          {/* CONTENT */}

                          <div className="flex-1">

                            <h3 className="text-xl font-black text-black">
                              {item}
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                              Continue for smart resale pricing
                            </p>

                          </div>

                          {/* ARROW */}

                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-blue-600">

                            <ArrowRight className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:text-white group-hover:translate-x-1" />

                          </div>

                        </div>

                        {/* BOTTOM TRUST */}

                        <div className="relative z-10 mt-6 flex items-center gap-4">

                          <div className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2">

                            <Cpu className="h-4 w-4 text-blue-600" />

                            <span className="text-xs font-semibold text-blue-700">
                              AI Pricing
                            </span>

                          </div>

                          <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2">

                            <ShieldCheck className="h-4 w-4 text-emerald-600" />

                            <span className="text-xs font-semibold text-emerald-700">
                              Verified
                            </span>

                          </div>

                        </div>

                        {/* BOTTOM LINE */}

                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 transition-all duration-500 group-hover:w-full" />

                      </button>

                    </TiltCard>
                  )
                )}

              </div>

            ) : (

              <div className="rounded-[34px] border border-white/70 bg-white/80 py-24 text-center shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-3xl">

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-100">

                  <Search className="h-10 w-10 text-slate-400" />

                </div>

                <h3 className="mt-8 text-3xl font-black text-black">
                  No Devices Found
                </h3>

                <p className="mx-auto mt-4 max-w-md text-slate-500 leading-7">
                  Try searching with another device
                  name or keyword.
                </p>

              </div>

            )}

          </Reveal>

          {/* TRUST STRIP */}

          <FadeUp>

            <div className="mt-14 grid gap-5 md:grid-cols-3">

              <div className="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-lg backdrop-blur-2xl">

                <Cpu className="h-7 w-7 text-blue-600" />

                <h3 className="mt-5 text-xl font-black text-black">
                  AI Evaluation
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Smart dynamic pricing based on
                  live resale demand and condition.
                </p>

              </div>

              <div className="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-lg backdrop-blur-2xl">

                <ShieldCheck className="h-7 w-7 text-emerald-600" />

                <h3 className="mt-5 text-xl font-black text-black">
                  Secure Processing
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Safe device inspection and secure
                  resale verification process.
                </p>

              </div>

              <div className="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-lg backdrop-blur-2xl">

                <Zap className="h-7 w-7 text-violet-600" />

                <h3 className="mt-5 text-xl font-black text-black">
                  Instant Payout
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Fast payment processing directly
                  to your bank account.
                </p>

              </div>

            </div>

          </FadeUp>

        </div>

      </div>

    </main>
  );
}