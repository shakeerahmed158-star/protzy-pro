"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

export default function SellPhone() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const type = searchParams.get("type") || "phone";

  const selectBrand = (brand: string) => {
    localStorage.setItem("sellType", type);
    localStorage.setItem("brand", brand);

    router.push(`/sell-phone/brand?device=${brand}`);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f7ff]">

      {/* ========================= */}
      {/* PREMIUM HEADER */}
      {/* ========================= */}

      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-3xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* LOGO */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-violet-500 text-lg font-bold text-white shadow-xl shadow-blue-500/30">
              G
            </div>

            <div>
              <h2 className="text-2xl font-black tracking-tight text-black">
                Goopsy
              </h2>

              <p className="text-[10px] uppercase tracking-[3px] text-slate-500">
                Smart Gadgets
              </p>
            </div>
          </Link>

          {/* NAVIGATION */}

          <nav className="hidden items-center gap-10 lg:flex">

            <Link
              href="/sell-phone"
              className="text-sm font-semibold text-blue-600 transition hover:text-violet-600"
            >
              Sell
            </Link>

            <Link
              href="/buy"
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              Buy
            </Link>

            <Link
              href="/repair"
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              Repair
            </Link>

            <Link
              href="/exchange"
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              Exchange
            </Link>

          </nav>

          {/* BUTTON */}

          <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 transition hover:scale-105">
            Login / Signup
          </button>

        </div>
      </header>

      {/* ========================= */}
      {/* HERO SECTION */}
      {/* ========================= */}

      <section className="relative overflow-hidden">

        {/* PREMIUM MESH BACKGROUND */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_30%)]" />

          <div className="absolute left-[-120px] top-[80px] h-[340px] w-[340px] rounded-full bg-blue-400/20 blur-3xl animate-pulse" />

          <div className="absolute right-[-120px] top-[220px] h-[320px] w-[320px] rounded-full bg-violet-400/20 blur-3xl animate-pulse" />

          <div className="absolute bottom-[-100px] left-[35%] h-[260px] w-[260px] rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />

        </div>

        {/* FLOATING DOTS */}

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute left-10 top-40 h-5 w-5 rounded-full bg-blue-400 shadow-2xl shadow-blue-500/50"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute right-20 top-52 h-5 w-5 rounded-full bg-violet-400 shadow-2xl shadow-violet-500/50"
        />

        <motion.div
          animate={{
            y: [0, -18, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute bottom-28 left-[55%] h-5 w-5 rounded-full bg-cyan-400 shadow-2xl shadow-cyan-500/50"
        />

        {/* MAIN GRID */}

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl grid-cols-1 items-center gap-20 px-6 py-16 lg:grid-cols-2">

          {/* ========================= */}
          {/* LEFT SIDE */}
          {/* ========================= */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-xl"
          >

            {/* BADGE */}

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-5 py-2 shadow-xl backdrop-blur-xl">

              <div className="h-2 w-2 rounded-full bg-blue-500" />

              <span className="text-sm font-semibold text-blue-700">
                Trusted Smart Resale Platform
              </span>

            </div>

            {/* MICRO TRUST BADGES */}

            <div className="mb-8 flex flex-wrap gap-3">

              <div className="rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur-xl">
                ⚡ AI Powered Pricing
              </div>

              <div className="rounded-full border border-emerald-100 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur-xl">
                🛡️ Secure Data Wipe
              </div>

              <div className="rounded-full border border-violet-100 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur-xl">
                🚚 Free Pickup
              </div>

            </div>

            {/* HEADING */}

            <h1 className="text-[58px] font-black leading-[0.95] tracking-[-2px] text-black md:text-[76px]">

              Sell Your Device

              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent">

                Instantly.

              </span>

            </h1>

            {/* DESCRIPTION */}

            <p className="mt-8 max-w-lg text-lg leading-8 text-slate-600">

              Get the best value for mobiles, laptops and gadgets with instant pricing,
              doorstep pickup and secure payments.

            </p>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link href="/sell-phone/brand">

                <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:scale-105">

                  Start Selling →

                </button>

              </Link>

              <Link href="/sell-phone/price">

                <button className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl px-8 py-4 text-base font-semibold text-slate-700 shadow-xl transition hover:bg-white">

                  Check Price

                </button>

              </Link>

            </div>

            {/* STATS */}

            <div className="mt-14 flex flex-wrap items-center gap-10">

              <div>
                <h4 className="text-2xl font-black text-black">
                  10M+
                </h4>

                <p className="text-sm text-slate-500">
                  Devices Sold
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-black text-black">
                  100%
                </h4>

                <p className="text-sm text-slate-500">
                  Secure Payments
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-black text-black">
                  30 Min
                </h4>

                <p className="text-sm text-slate-500">
                  Quick Payout
                </p>
              </div>

            </div>

            {/* PHONE IMAGE */}

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative mt-14"
            >

              <div className="absolute left-10 top-10 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />

              <Image
                src="/iphone.png"
                alt="iphone"
                width={380}
                height={380}
                className="relative z-10 drop-shadow-[0_30px_60px_rgba(59,130,246,0.35)]"
              />

              {/* TRUST CARD */}

              <div className="absolute bottom-8 left-40 z-20 flex items-center gap-4 rounded-2xl border border-white/60 bg-white/80 px-5 py-4 shadow-2xl backdrop-blur-2xl">

                <div className="flex -space-x-3">

                  <Image
                    src="/avatars/a1.png"
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />

                  <Image
                    src="/avatars/a2.png"
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />

                  <Image
                    src="/avatars/a3.png"
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />

                </div>

                <div>

                  <p className="text-sm font-bold text-black">
                    Trusted by 10,000+ customers
                  </p>

                  <p className="text-xs text-slate-500">
                    Across India
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

          {/* ========================= */}
          {/* RIGHT SIDE */}
          {/* ========================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >

            <div className="relative w-full max-w-[520px] rounded-[36px] border border-white/60 bg-white/70 p-8 shadow-[0_30px_80px_rgba(59,130,246,0.12)] backdrop-blur-3xl">

              <div className="space-y-5">

                {/* CARD 1 */}

                <div className="group relative overflow-hidden flex items-start gap-5 rounded-3xl bg-gradient-to-r from-blue-50 to-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
                  </div>

                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 text-2xl text-white shadow-lg">
                    ✨
                  </div>

                  <div className="relative z-10">

                    <h3 className="text-xl font-bold text-black">
                      Instant Device Valuation
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      AI powered smart pricing engine that gives best market value.
                    </p>

                  </div>

                </div>

                {/* CARD 2 */}

                <div className="group relative overflow-hidden flex items-start gap-5 rounded-3xl bg-gradient-to-r from-violet-50 to-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
                  </div>

                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500 text-2xl text-white shadow-lg">
                    🚚
                  </div>

                  <div className="relative z-10">

                    <h3 className="text-xl font-bold text-black">
                      Free Pickup
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Doorstep pickup available across 500+ cities.
                    </p>

                  </div>

                </div>

                {/* CARD 3 */}

                <div className="group relative overflow-hidden flex items-start gap-5 rounded-3xl bg-gradient-to-r from-emerald-50 to-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
                  </div>

                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-2xl text-white shadow-lg">
                    🛡️
                  </div>

                  <div className="relative z-10">

                    <h3 className="text-xl font-bold text-black">
                      Instant Payment
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Secure bank transfer after verification. Guaranteed.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ========================= */}
      {/* LIVE TRUST STRIP */}
      {/* ========================= */}

      <section className="border-y border-white/40 bg-white/70 backdrop-blur-2xl">

        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 py-5">

          {[
            "10M+ Devices Sold",
            "Instant UPI Payments",
            "500+ Pickup Cities",
            "AI Smart Pricing",
            "Secure Data Wipe",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm font-semibold text-slate-700"
            >
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              {item}
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}