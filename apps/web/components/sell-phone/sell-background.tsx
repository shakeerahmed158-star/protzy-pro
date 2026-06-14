"use client";

import { motion } from "framer-motion";

export function SellBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* MAIN GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_38%)]" />

      {/* LEFT GLOW */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          left-[-140px]
          top-[140px]
          h-[360px]
          w-[360px]
          rounded-full
          bg-blue-400/20
          blur-3xl
        "
      />

      {/* RIGHT GLOW */}
      <motion.div
        animate={{
          y: [0, 35, 0],
          x: [0, -25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          right-[-120px]
          top-[220px]
          h-[340px]
          w-[340px]
          rounded-full
          bg-cyan-400/20
          blur-3xl
        "
      />

      {/* CENTER GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[-120px]
          left-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          rounded-full
          bg-violet-400/20
          blur-3xl
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* FLOATING DOTS */}
      <motion.div
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          left-[10%]
          top-[30%]
          h-3
          w-3
          rounded-full
          bg-blue-500
          shadow-[0_0_30px_rgba(59,130,246,0.9)]
        "
      />

      <motion.div
        animate={{
          y: [0, 24, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          right-[12%]
          top-[40%]
          h-3
          w-3
          rounded-full
          bg-cyan-400
          shadow-[0_0_30px_rgba(34,211,238,0.9)]
        "
      />

      <motion.div
        animate={{
          y: [0, -16, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[18%]
          left-[48%]
          h-3
          w-3
          rounded-full
          bg-violet-400
          shadow-[0_0_30px_rgba(167,139,250,0.9)]
        "
      />
    </div>
  );
}