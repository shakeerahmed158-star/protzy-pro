"use client";

import Link from "next/link";

import {
  CheckCircle2,
  PhoneCall,
  Truck,
  ShieldCheck,
  Wallet,
  ArrowRight,
  Sparkles,
  BadgeCheck,
  Clock3,
} from "lucide-react";

import { motion } from "framer-motion";

export default function SuccessPage() {

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f8ff] px-4 py-10">

      {/* BACKGROUND */}

      <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="absolute right-[-120px] top-40 h-[320px] w-[320px] rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="absolute bottom-[-100px] left-[35%] h-[280px] w-[280px] rounded-full bg-blue-300/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* MAIN CARD */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            overflow-hidden
            rounded-[42px]
            border
            border-white/70
            bg-white/80
            shadow-[0_30px_100px_rgba(15,23,42,0.08)]
            backdrop-blur-3xl
          "
        >

          {/* HERO */}

          <div className="relative overflow-hidden bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-8 py-14 text-center md:px-12 md:py-16">

            {/* GLOW */}

            <div className="absolute inset-0 opacity-20">

              <div className="absolute -top-10 left-10 h-40 w-40 rounded-full bg-white blur-3xl" />

              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-white blur-3xl" />

            </div>

            {/* ICON */}

            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                relative
                mx-auto
                flex
                h-32
                w-32
                items-center
                justify-center
                rounded-full
                border
                border-white/40
                bg-white/20
                shadow-2xl
                backdrop-blur-xl
              "
            >

              <CheckCircle2 className="h-16 w-16 text-white" />

            </motion.div>

            {/* BADGE */}

            <div className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-5 py-3 text-white backdrop-blur-xl">

              <Sparkles className="h-4 w-4" />

              <span className="text-sm font-semibold">
                Pickup Successfully Scheduled
              </span>

            </div>

            {/* TITLE */}

            <h1 className="relative mt-8 text-5xl font-black tracking-[-2px] text-white md:text-7xl">

              Pickup

              <span className="block">
                Confirmed
              </span>

            </h1>

            {/* DESCRIPTION */}

            <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">

              Your device exchange request has been
              successfully submitted. Our pickup
              executive will contact you shortly.

            </p>

          </div>

          {/* BODY */}

          <div className="p-6 md:p-10">

            {/* QUICK INFO */}

            <div className="mb-8 grid gap-5 md:grid-cols-3">

              <InfoCard
                icon={
                  <Clock3 className="h-7 w-7 text-blue-600" />
                }
                title="Fast Processing"
                desc="Pickup confirmation within minutes."
              />

              <InfoCard
                icon={
                  <ShieldCheck className="h-7 w-7 text-emerald-600" />
                }
                title="Secure Handling"
                desc="Verified inspection & safe verification."
              />

              <InfoCard
                icon={
                  <Wallet className="h-7 w-7 text-violet-600" />
                }
                title="Instant Payment"
                desc="Secure payout after device verification."
              />

            </div>

            {/* PROCESS */}

            <div className="rounded-[36px] border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-6 md:p-8">

              <div className="flex items-center justify-between gap-5 flex-wrap">

                <div>

                  <h2 className="text-3xl font-black text-zinc-900">
                    What Happens Next?
                  </h2>

                  <p className="mt-3 text-zinc-500">
                    Simple, secure and transparent pickup process.
                  </p>

                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2">

                  <BadgeCheck className="h-4 w-4 text-emerald-600" />

                  <span className="text-sm font-bold text-emerald-700">
                    Verified Workflow
                  </span>

                </div>

              </div>

              {/* STEPS */}

              <div className="mt-10 space-y-5">

                <StepCard
                  icon={
                    <PhoneCall className="h-7 w-7 text-blue-600" />
                  }
                  bg="bg-blue-100"
                  title="Pickup Confirmation Call"
                  desc="Our executive will contact you to confirm pickup timing and device details."
                />

                <StepCard
                  icon={
                    <Truck className="h-7 w-7 text-cyan-600" />
                  }
                  bg="bg-cyan-100"
                  title="Doorstep Pickup"
                  desc="Pickup partner visits your location for quick and safe collection."
                />

                <StepCard
                  icon={
                    <ShieldCheck className="h-7 w-7 text-violet-600" />
                  }
                  bg="bg-violet-100"
                  title="Device Verification"
                  desc="Physical inspection and condition verification completed instantly."
                />

                <StepCard
                  icon={
                    <Wallet className="h-7 w-7 text-emerald-600" />
                  }
                  bg="bg-emerald-100"
                  title="Instant Secure Payment"
                  desc="Secure payment processed immediately after successful verification."
                />

              </div>

            </div>

            {/* TRUST STRIP */}

            <div className="mt-8 rounded-[32px] bg-gradient-to-r from-blue-50 via-cyan-50 to-emerald-50 p-6">

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>

                  <p className="text-sm uppercase tracking-[0.2em] text-blue-600">
                    Trusted Platform
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-black">
                    10,000+ Devices Exchanged
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Fast payouts, secure pickup
                    and verified dealer network.
                  </p>

                </div>

                <div className="rounded-[28px] bg-white px-6 py-5 shadow-lg">

                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Service Status
                  </p>

                  <h4 className="mt-2 text-2xl font-black text-emerald-600">
                    Pickup Scheduled
                  </h4>

                </div>

              </div>

            </div>

            {/* CTA */}

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              <Link
                href="/"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-violet-500
                  px-6
                  py-5
                  text-lg
                  font-black
                  text-white
                  shadow-[0_20px_50px_rgba(59,130,246,0.30)]
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >

                Back To Home

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

              </Link>

              <a
                href="https://wa.me/917483729884"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border
                  border-zinc-300
                  bg-white
                  px-6
                  py-5
                  text-lg
                  font-black
                  text-zinc-900
                  transition-all
                  duration-300
                  hover:bg-zinc-50
                "
              >

                WhatsApp Support

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

              </a>

            </div>

            {/* SELL AGAIN */}

            <div className="mt-8 rounded-[36px] border border-blue-100 bg-gradient-to-r from-blue-50 via-cyan-50 to-emerald-50 p-8 text-center">

              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">

                <Sparkles className="h-4 w-4 text-blue-600" />

                <span className="text-sm font-semibold text-blue-700">
                  Smart Upgrade Ecosystem
                </span>

              </div>

              <h3 className="mt-6 text-4xl font-black text-black">
                Sell Another Device?
              </h3>

              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">

                Exchange old mobiles, laptops and gadgets instantly
                with AI powered smart pricing.

              </p>

              <Link
                href="/sell-phone"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-black
                  px-7
                  py-4
                  text-lg
                  font-black
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                "
              >

                Start New Quote

                <ArrowRight className="h-5 w-5" />

              </Link>

            </div>

            {/* FOOTER */}

            <div className="mt-10 text-center">

              <p className="text-sm font-semibold tracking-[0.25em] text-zinc-400">

                protzy • VERIFIED DEALERS • INSTANT PAYOUT

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </main>
  );
}

//////////////////////////////////////////////////////
// STEP CARD
//////////////////////////////////////////////////////

function StepCard({
  icon,
  bg,
  title,
  desc,
}: {
  icon: React.ReactNode;
  bg: string;
  title: string;
  desc: string;
}) {

  return (
    <div className="flex items-start gap-5 rounded-[28px] border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${bg}`}
      >

        {icon}

      </div>

      <div>

        <h3 className="text-xl font-black text-zinc-900">
          {title}
        </h3>

        <p className="mt-2 leading-7 text-zinc-600">
          {desc}
        </p>

      </div>

    </div>
  );
}

//////////////////////////////////////////////////////
// INFO CARD
//////////////////////////////////////////////////////

function InfoCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {

  return (
    <div className="rounded-[30px] border border-white/70 bg-white/80 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)] backdrop-blur-2xl">

      {icon}

      <h3 className="mt-5 text-xl font-black text-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        {desc}
      </p>

    </div>
  );
}