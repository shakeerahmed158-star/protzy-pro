"use client";

import { useEffect, useMemo, useState } from "react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  ShieldCheck,
  Sparkles,
  Truck,
  Wallet,
  ArrowRight,
  BadgeCheck,
  Loader2,
  Cpu,
  Zap,
  Star,
} from "lucide-react";

import { motion } from "framer-motion";

import { FadeUp } from "../../../components/animations/fade-up";
import { Reveal } from "../../../components/animations/reveal";
import { FloatingCard } from "../../../components/animations/floating-card";

const API_URL =
  "http://localhost:3000/api";

export default function FinalPricePage() {

  const router = useRouter();

  const params =
    useSearchParams();

  //////////////////////////////////////////////////////
  // URL PARAMS
  //////////////////////////////////////////////////////

  const brand =
    (params.get("brand") ?? "").trim();

  const device =
    (params.get("device") ?? "").trim();

  const ram =
    (params.get("ram") ?? "").trim();

  const storage =
    (params.get("storage") ?? "").trim();

  const answersString =
    params.get("answers") ?? "{}";

  //////////////////////////////////////////////////////
  // STATES
  //////////////////////////////////////////////////////

  const [loading, setLoading] =
    useState(true);

  const [finalPrice, setFinalPrice] =
    useState(0);

  const [
    animatedPrice,
    setAnimatedPrice,
  ] = useState(0);

  //////////////////////////////////////////////////////
  // PARSE ANSWERS
  //////////////////////////////////////////////////////

  const answers = useMemo(() => {

    try {
      return JSON.parse(
        answersString
      );
    } catch {
      return {};
    }

  }, [answersString]);

  //////////////////////////////////////////////////////
  // NORMALIZE VALUES
  //////////////////////////////////////////////////////

  const noCall =
    answers.basic?.call === "No"
      ? "No"
      : "Yes";

  const touch =
    answers.basic?.touch === "No"
      ? "No"
      : "Yes";

  const screenOriginal =
    answers.basic?.original === "No"
      ? "No"
      : "Yes";

  const defects =
    answers.defects || [];

  const functional =
    answers.functional || [];

  const accessories =
    answers.accessories || [];

  const scratch =
    defects.includes(
      "Screen scratch"
    )
      ? "Yes"
      : "No";

  const deadPixel =
    defects.includes(
      "Dead pixel line"
    )
      ? "Yes"
      : "No";

  const dent =
    defects.includes(
      "Body dent"
    )
      ? "Yes"
      : "No";

  const panel =
    defects.includes(
      "Panel missing"
    )
      ? "Yes"
      : "No";

  const faceId =
    functional.includes(
      "Face sensor not working"
    )
      ? "No"
      : "Yes";

  const charging =
    functional.includes(
      "Charging port issue"
    )
      ? "Yes"
      : "No";

  const button =
    functional.includes(
      "Power button issue"
    ) ||
    functional.includes(
      "Volume button issue"
    )
      ? "Yes"
      : "No";

  const box =
    accessories.includes(
      "Original Box"
    )
      ? "Yes"
      : "No";

  const charger =
    accessories.includes(
      "Charger"
    )
      ? "Yes"
      : "No";

  const cable =
    accessories.includes(
      "Cable"
    )
      ? "Yes"
      : "No";

  let age = "0-3";

  if (
    answers.age ===
    "3 - 6 months"
  )
    age = "3-6";

  if (
    answers.age ===
    "6 - 11 months"
  )
    age = "6-11";

  if (
    answers.age ===
    "Above 11 months"
  )
    age = "11+";

  //////////////////////////////////////////////////////
  // FETCH PRICE
  //////////////////////////////////////////////////////

  useEffect(() => {

    async function fetchPrice() {

      try {

        setLoading(true);

        const res =
          await fetch(
            `${API_URL}/pricing/calculate`,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                brand,
                model: device,
                storage,

                condition:
                  screenOriginal === "No"
                    ? "screen"

                    : deadPixel === "Yes" ||
                      dent === "Yes" ||
                      scratch === "Yes" ||
                      panel === "Yes"
                    ? "body"

                    : noCall === "Yes" ||
                      touch === "No" ||
                      faceId === "No" ||
                      charging === "No" ||
                      button === "No"
                    ? "function"

                    : box === "No" ||
                      charger === "No" ||
                      cable === "No"
                    ? "accessories"

                    : "screen",

                deviceAge:
                  age || "6_TO_12",
              }),
            }
          );

        if (!res.ok) {
          throw new Error(
            "Failed to fetch price"
          );
        }

        const data =
          await res.json();

        const price = Number(
          data?.pricing
            ?.evaluatedPrice || 0
        );

        setFinalPrice(price);

      } catch (error) {

        console.log(
          "PRICE ERROR:",
          error
        );

        setFinalPrice(0);

      } finally {

        setLoading(false);
      }
    }

    fetchPrice();

  }, [
    brand,
    device,
    ram,
    storage,
    age,
    noCall,
    touch,
    screenOriginal,
    scratch,
    deadPixel,
    dent,
    panel,
    faceId,
    charging,
    button,
    box,
    charger,
    cable,
  ]);

  //////////////////////////////////////////////////////
  // PRICE ANIMATION
  //////////////////////////////////////////////////////

  useEffect(() => {

    if (finalPrice <= 0) {
      setAnimatedPrice(0);
      return;
    }

    let current = 0;

    const step = Math.ceil(
      finalPrice / 45
    );

    const timer = setInterval(() => {

      current += step;

      if (current >= finalPrice) {
        current = finalPrice;
        clearInterval(timer);
      }

      setAnimatedPrice(current);

    }, 20);

    return () =>
      clearInterval(timer);

  }, [finalPrice]);

  //////////////////////////////////////////////////////
  // NEXT
  //////////////////////////////////////////////////////

  const goNext = () => {

    if (finalPrice <= 0) {
      return alert(
        "Price still loading..."
      );
    }

    const query =
      new URLSearchParams({
        brand,
        device,
        ram,
        storage,
        price: String(finalPrice),

        answers:
          typeof answers === "string"
            ? answers
            : JSON.stringify(
                answers
              ),
      });

    router.push(
      `/sell-phone/pick-up?${query.toString()}`
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

      <div className="relative z-10 px-4 py-10 md:px-8">

        <div className="mx-auto max-w-5xl">

          {/* TOP */}

          <FadeUp>

            <div className="mb-10 text-center">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 shadow-lg">

                <Sparkles className="h-4 w-4 text-blue-600" />

                <span className="text-sm font-semibold text-blue-700">
                  AI Powered Smart Valuation
                </span>

              </div>

              <h1 className="text-[42px] font-black tracking-[-2px] text-black md:text-[72px]">

                Your Device

                <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent">

                  Final Offer

                </span>

              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">

                Live resale pricing powered by
                dealer demand, AI evaluation
                and real-time market intelligence.

              </p>

            </div>

          </FadeUp>

          {/* SUMMARY */}

          <Reveal>

            <FloatingCard>

              <div className="rounded-[36px] border border-white/70 bg-white/80 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.06)] backdrop-blur-3xl">

                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                  <div>

                    <p className="text-sm text-slate-500">
                      Selected Device
                    </p>

                    <h2 className="mt-3 text-4xl font-black text-black">
                      {device}
                    </h2>

                    <p className="mt-3 text-base text-slate-600">
                      {brand} • {ram} RAM • {storage}
                    </p>

                  </div>

                  <div className="flex flex-wrap gap-3">

                    <FeatureBadge
                      icon={
                        <Truck className="h-4 w-4" />
                      }
                      text="Free Pickup"
                    />

                    <FeatureBadge
                      icon={
                        <ShieldCheck className="h-4 w-4" />
                      }
                      text="Verified Inspection"
                    />

                    <FeatureBadge
                      icon={
                        <Wallet className="h-4 w-4" />
                      }
                      text="Instant Payout"
                    />

                  </div>

                </div>

              </div>

            </FloatingCard>

          </Reveal>

          {/* PRICE */}

          <Reveal>

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                relative
                mt-8
                overflow-hidden
                rounded-[42px]
                border
                border-blue-500/20
                bg-gradient-to-br
                from-blue-600
                via-cyan-500
                to-violet-500
                p-10
                shadow-[0_30px_120px_rgba(59,130,246,0.35)]
                md:p-14
              "
            >

              {/* GLOW */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_30%)]" />

              <div className="relative text-center">

                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-3 text-white backdrop-blur-xl">

                  <BadgeCheck className="h-4 w-4" />

                  <span className="text-sm font-semibold">
                    Best Dealer Offer
                  </span>

                </div>

                <p className="mt-8 text-sm uppercase tracking-[0.3em] text-white/70">
                  Estimated Resale Value
                </p>

                {loading ? (

                  <div className="mt-10 flex items-center justify-center gap-4">

                    <Loader2 className="h-8 w-8 animate-spin text-white" />

                    <span className="text-xl font-semibold text-white">
                      Calculating Best Price...
                    </span>

                  </div>

                ) : (

                  <div>

                    <motion.h3
                      initial={{
                        scale: 0.9,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      className="mt-8 text-7xl font-black tracking-[-3px] text-white md:text-[120px]"
                    >
                      ₹
                      {animatedPrice.toLocaleString()}
                    </motion.h3>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/80">
                      Final value may vary slightly after
                      physical inspection and verification.
                    </p>

                  </div>

                )}

              </div>

            </motion.div>

          </Reveal>

          {/* TRUST */}

          <Reveal>

            <div className="mt-8 grid gap-5 md:grid-cols-3">

              <TrustCard
                icon={
                  <Cpu className="h-7 w-7 text-blue-600" />
                }
                title="AI Pricing Engine"
                desc="Real-time market based intelligent resale evaluation."
              />

              <TrustCard
                icon={
                  <ShieldCheck className="h-7 w-7 text-emerald-600" />
                }
                title="Verified Inspection"
                desc="Secure device verification with privacy assurance."
              />

              <TrustCard
                icon={
                  <Zap className="h-7 w-7 text-violet-600" />
                }
                title="Instant Payment"
                desc="Fast secure settlement directly to your account."
              />

            </div>

          </Reveal>

          {/* EXTRA PREMIUM */}

          <Reveal>

            <div className="mt-8 rounded-[36px] border border-white/70 bg-white/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)] backdrop-blur-3xl">

              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                <div>

                  <div className="flex items-center gap-2">

                    <Star className="h-5 w-5 text-amber-500" />

                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-500">
                      Premium Offer
                    </p>

                  </div>

                  <h3 className="mt-4 text-3xl font-black text-black">
                    Lock This Price Today
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                    Device prices fluctuate daily.
                    Schedule your pickup now to
                    secure this offer instantly.
                  </p>

                </div>

                <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-cyan-50 px-7 py-6">

                  <p className="text-sm text-slate-500">
                    Estimated Payout
                  </p>

                  <h4 className="mt-2 text-4xl font-black text-black">
                    ₹
                    {animatedPrice.toLocaleString()}
                  </h4>

                </div>

              </div>

            </div>

          </Reveal>

          {/* CTA */}

          <FadeUp>

            <button
              onClick={goNext}
              disabled={loading}
              className="
                group
                mt-10
                flex
                h-16
                w-full
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-violet-500
                text-white
                shadow-[0_20px_50px_rgba(59,130,246,0.35)]
                transition-all
                duration-300
                hover:scale-[1.01]
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >

              <span className="text-lg font-black">
                Schedule Free Pickup
              </span>

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

            </button>

          </FadeUp>

        </div>

      </div>

    </main>
  );
}

//////////////////////////////////////////////////////
// FEATURE BADGE
//////////////////////////////////////////////////////

function FeatureBadge({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {

  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">

      {icon}

      {text}

    </div>
  );
}

//////////////////////////////////////////////////////
// TRUST CARD
//////////////////////////////////////////////////////

function TrustCard({
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