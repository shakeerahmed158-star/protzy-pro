"use client";

import { motion } from "framer-motion";

export function FloatingGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-10%] top-[-10%] h-[500px] w-[260px] rounded-full bg-white/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[260px] rounded-full bg-zinc-500/10 blur-3xl"
      />
    </div>
  );
}