"use client";

import Link from "next/link";

import {
  CheckCircle2,
  ShieldCheck,
  Truck,
  Sparkles,
  ArrowRight,
  Smartphone,
  PackageCheck,
  Clock3,
} from "lucide-react";

export default function BuySuccessPage() {

  return (

    <div className="min-h-screen bg-[#f8fafc] overflow-hidden relative px-5 py-10">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_40%)]" />

      <div className="relative z-10 max-w-3xl mx-auto">

        <div className="overflow-hidden rounded-[42px] bg-white border border-white/60 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

          {/* HERO */}

          <div className="relative overflow-hidden bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 px-8 py-14 text-center">

            <div className="absolute inset-0 opacity-20">

              <div className="absolute -top-10 left-10 h-40 w-40 rounded-full bg-white blur-3xl" />

              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-white blur-3xl" />

            </div>

            {/* ICON */}

            <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-xl shadow-2xl">

              <CheckCircle2 className="h-16 w-16 text-white" />

            </div>

            {/* TITLE */}

            <h1 className="relative mt-8 text-5xl font-black text-white">

              Order Confirmed

            </h1>

            <p className="relative mt-4 text-white/90 text-lg max-w-xl mx-auto">

              Your smartphone order has been placed successfully.
              Dealer assignment and delivery processing has started.

            </p>

            {/* BADGE */}

            <div className="relative mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/20 backdrop-blur-xl px-5 py-3 text-white">

              <Sparkles className="h-5 w-5" />

              <span className="font-semibold">

                Smart Dealer Fulfillment Activated

              </span>

            </div>

          </div>

          {/* BODY */}

          <div className="p-8 md:p-10">

            {/* PROCESS */}

            <div className="rounded-[36px] border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-8">

              <h2 className="text-3xl font-black text-zinc-900">

                What Happens Next?

              </h2>

              <p className="mt-3 text-zinc-500">

                Your order is now entering our smart delivery pipeline.

              </p>

              {/* STEPS */}

              <div className="space-y-5 mt-8">

                {/* STEP 1 */}

                <div className="flex items-start gap-4 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">

                    <Smartphone className="text-blue-600 h-7 w-7" />

                  </div>

                  <div>

                    <h3 className="text-xl font-black text-zinc-900">

                      Dealer Assignment

                    </h3>

                    <p className="mt-2 text-zinc-600 leading-relaxed">

                      Your order is automatically assigned to a nearby verified dealer.

                    </p>

                  </div>

                </div>

                {/* STEP 2 */}

                <div className="flex items-start gap-4 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">

                    <PackageCheck className="text-green-600 h-7 w-7" />

                  </div>

                  <div>

                    <h3 className="text-xl font-black text-zinc-900">

                      Order Packaging

                    </h3>

                    <p className="mt-2 text-zinc-600 leading-relaxed">

                      Your sealed box device will be securely packed before dispatch.

                    </p>

                  </div>

                </div>

                {/* STEP 3 */}

                <div className="flex items-start gap-4 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100">

                    <Truck className="text-purple-600 h-7 w-7" />

                  </div>

                  <div>

                    <h3 className="text-xl font-black text-zinc-900">

                      Fast Delivery

                    </h3>

                    <p className="mt-2 text-zinc-600 leading-relaxed">

                      Delivery executive will contact you once the order is dispatched.

                    </p>

                  </div>

                </div>

                {/* STEP 4 */}

                <div className="flex items-start gap-4 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">

                    <Clock3 className="text-orange-600 h-7 w-7" />

                  </div>

                  <div>

                    <h3 className="text-xl font-black text-zinc-900">

                      OTP Verification

                    </h3>

                    <p className="mt-2 text-zinc-600 leading-relaxed">

                      Delivery will be completed using secure OTP verification flow.

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* WARRANTY */}

            <div className="mt-8 rounded-[32px] border border-zinc-200 bg-white p-6 shadow-sm">

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">

                  <ShieldCheck className="text-green-600 h-7 w-7" />

                </div>

                <div>

                  <h3 className="text-2xl font-black text-zinc-900">

                    Official Warranty Included

                  </h3>

                  <p className="mt-2 text-zinc-600 leading-relaxed">

                    Your smartphone includes official brand warranty and verified support assistance.

                  </p>

                </div>

              </div>

            </div>

            {/* CTA */}

            <div className="grid md:grid-cols-2 gap-4 mt-8">

              <Link
                href="/"
                className="group flex items-center justify-center gap-2 rounded-3xl bg-zinc-900 hover:bg-black text-white px-6 py-5 text-xl font-black transition-all"
              >

                Back To Home

                <ArrowRight className="h-5 w-5 transition-all group-hover:translate-x-1" />

              </Link>

              <Link
                href="/buy"
                className="group flex items-center justify-center gap-2 rounded-3xl border border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-900 px-6 py-5 text-xl font-black transition-all"
              >

                Explore More

                <ArrowRight className="h-5 w-5 transition-all group-hover:translate-x-1" />

              </Link>

            </div>

            {/* FOOTER */}

            <div className="mt-10 text-center">

              <p className="text-sm font-semibold tracking-wide text-zinc-400">

                GOOPSY • VERIFIED DEALERS • SECURE DELIVERY • WARRANTY INCLUDED

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}