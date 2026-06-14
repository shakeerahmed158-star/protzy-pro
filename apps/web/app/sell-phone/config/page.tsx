"use client";

import { useState } from "react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  ArrowRight,
  Cpu,
  HardDrive,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";

import { FadeUp } from "../../../components/animations/fade-up";
import { Reveal } from "../../../components/animations/reveal";
import { useSellStore } from "../../../stores/useSellStore";

const RAM = [
  "4GB",
  "6GB",
  "8GB",
  "12GB",
  "16GB",
];

const STORAGE = [
  "64GB",
  "128GB",
  "256GB",
  "512GB",
  "1TB",
];

export default function ConfigPage() {
  const router = useRouter();

  const params = useSearchParams();

  const brand =
    params.get("brand") || "";

  const device =
    params.get("device") || "";

  const [selectedRam, setSelectedRam] =
    useState("");

  const [
    selectedStorage,
    setSelectedStorage,
  ] = useState("");

  const isReady =
    selectedRam &&
    selectedStorage;

    const {
  setRam,
  setStorage,
} = useSellStore();

 const handleContinue = () => {

  setRam(selectedRam);

  setStorage(selectedStorage);

  const query =
    new URLSearchParams({
      brand,
      device,
      ram: selectedRam,
      storage: selectedStorage,
    }).toString();

  router.push(
    `/sell-phone/details?${query}`
  );
};
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

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10">

        {/* TOP PROGRESS */}

        <FadeUp>
          <div className="mb-10 rounded-[30px] border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-2xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
                  Step 3 Of 4
                </p>

                <h2 className="mt-2 text-2xl font-black text-black md:text-3xl">
                  Device Configuration
                </h2>

              </div>

              <div className="hidden md:flex items-center gap-3 rounded-full bg-blue-50 px-5 py-3">

                <Sparkles className="h-5 w-5 text-blue-600" />

                <span className="text-sm font-semibold text-blue-700">
                  AI Pricing Enabled
                </span>

              </div>

            </div>

            {/* PROGRESS */}

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
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
          <div className="mb-12 text-center">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 shadow-xl">

              <Sparkles className="h-4 w-4 text-blue-600" />

              <span className="text-sm font-semibold text-blue-700">
                Smart Device Configuration
              </span>

            </div>

            <h1 className="text-[42px] font-black tracking-[-2px] text-black md:text-[68px]">

              Select Your

              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent">

                Device Variant

              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">

              Choose the exact RAM and storage configuration
              for accurate AI-powered resale pricing.

            </p>

          </div>
        </FadeUp>

        {/* CONFIG CARD */}

        <Reveal>
          <div className="overflow-hidden rounded-[38px] border border-white/70 bg-white/80 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-3xl">

            {/* HEADER */}

            <div className="border-b border-slate-100 px-8 py-7">

              <div className="flex flex-wrap items-center justify-between gap-4">

                <div>

                  <h3 className="text-2xl font-black text-black">
                    {brand} {device}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Select the exact configuration
                  </p>

                </div>

                <div className="rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 px-5 py-3 text-sm font-semibold text-blue-700">
                  AI Resale Engine Active
                </div>

              </div>

            </div>

            <div className="p-8 md:p-10">

              {/* RAM */}

              <div>

                <div className="mb-6 flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">

                    <Cpu className="h-6 w-6 text-blue-600" />

                  </div>

                  <div>

                    <h2 className="text-2xl font-black text-black">
                      Select RAM
                    </h2>

                    <p className="text-sm text-slate-500">
                      Choose memory configuration
                    </p>

                  </div>

                </div>

                <div className="flex flex-wrap gap-4">

                  {RAM.map((item) => (

                    <button
                      key={item}
                      onClick={() =>
                        setSelectedRam(item)
                      }
                      className={`
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        px-7
                        py-5
                        font-bold
                        transition-all
                        duration-300
                        ${
                          selectedRam === item
                            ? "border-blue-500 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_15px_40px_rgba(59,130,246,0.35)]"
                            : "border-slate-200 bg-white text-slate-700 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                        }
                      `}
                    >

                      <div className="relative z-10">
                        {item}
                      </div>

                    </button>

                  ))}

                </div>

              </div>

              {/* STORAGE */}

              <div className="mt-14">

                <div className="mb-6 flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100">

                    <HardDrive className="h-6 w-6 text-violet-600" />

                  </div>

                  <div>

                    <h2 className="text-2xl font-black text-black">
                      Select Storage
                    </h2>

                    <p className="text-sm text-slate-500">
                      Choose storage capacity
                    </p>

                  </div>

                </div>

                <div className="flex flex-wrap gap-4">

                  {STORAGE.map((item) => (

                    <button
                      key={item}
                      onClick={() =>
                        setSelectedStorage(item)
                      }
                      className={`
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        px-7
                        py-5
                        font-bold
                        transition-all
                        duration-300
                        ${
                          selectedStorage === item
                            ? "border-violet-500 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-[0_15px_40px_rgba(139,92,246,0.35)]"
                            : "border-slate-200 bg-white text-slate-700 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl"
                        }
                      `}
                    >

                      <div className="relative z-10">
                        {item}
                      </div>

                    </button>

                  ))}

                </div>

              </div>

              {/* TRUST BAR */}

              <div className="mt-14 grid gap-4 md:grid-cols-3">

                <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5">

                  <ShieldCheck className="h-6 w-6 text-emerald-600" />

                  <h4 className="mt-4 font-black text-black">
                    Secure Evaluation
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Device inspection with complete
                    data privacy assurance.
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5">

                  <Sparkles className="h-6 w-6 text-blue-600" />

                  <h4 className="mt-4 font-black text-black">
                    AI Smart Pricing
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Live resale pricing based on
                    demand and device condition.
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5">

                  <Zap className="h-6 w-6 text-violet-600" />

                  <h4 className="mt-4 font-black text-black">
                    Instant Payout
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Quick secure payment directly
                    to your bank account.
                  </p>

                </div>

              </div>

              {/* CTA */}

              {isReady && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-14"
                >

                  <button
                    onClick={handleContinue}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      bg-gradient-to-r
                      from-blue-600
                      via-cyan-500
                      to-violet-500
                      px-9
                      py-5
                      text-lg
                      font-bold
                      text-white
                      shadow-[0_20px_50px_rgba(59,130,246,0.35)]
                      transition-all
                      duration-300
                      hover:scale-[1.03]
                    "
                  >

                    Continue To Device Details

                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

                  </button>

                </motion.div>

              )}

            </div>

          </div>
        </Reveal>

      </div>

    </main>
  );
}