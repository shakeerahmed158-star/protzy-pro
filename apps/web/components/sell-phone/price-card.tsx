"use client";

import { motion } from "framer-motion";

interface PriceCardProps {
  loading?: boolean;
  price: number;
}

export default function PriceCard({
  loading,
  price,
}: PriceCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="
        relative overflow-hidden
        rounded-[32px]
        border border-blue-500/20
        bg-gradient-to-br
        from-blue-600
        via-blue-500
        to-cyan-500
        p-8 md:p-10
        text-center
        shadow-[0_20px_80px_rgba(37,99,235,0.35)]
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)]" />

      {/* Animated Blur */}
      <div className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-100">
          Instant Offer
        </p>

        {loading ? (
          <div className="mt-6">
            <div className="mx-auto h-14 w-48 animate-pulse rounded-2xl bg-white/20" />

            <p className="mt-5 text-sm text-blue-100">
              Calculating best dealer price...
            </p>
          </div>
        ) : (
          <>
            <motion.h2
              key={price}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                mt-5
                text-5xl
                font-black
                tracking-tight
                text-white
                md:text-7xl
              "
            >
              ₹{price.toLocaleString()}
            </motion.h2>

            <p className="mt-4 text-sm text-blue-100">
              Estimated resale value based on current market demand
            </p>
          </>
        )}
      </div>

      {/* Bottom Shine */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />
    </motion.div>
  );
}