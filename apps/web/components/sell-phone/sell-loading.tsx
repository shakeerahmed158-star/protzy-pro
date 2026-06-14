"use client";

import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface SellLoadingProps {
  title?: string;
  subtitle?: string;
}

export default function SellLoading({
  title = "Loading...",
  subtitle = "Please wait while we process your request.",
}: SellLoadingProps) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      {/* Animated Loader */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          flex h-20 w-20 items-center justify-center
          rounded-full
          border border-blue-500/20
          bg-white/5
          backdrop-blur-xl
          shadow-[0_10px_50px_rgba(37,99,235,0.2)]
        "
      >
        <Loader2 className="h-10 w-10 text-blue-400" />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
        }}
        className="mt-8"
      >
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-3 max-w-md text-zinc-400">
          {subtitle}
        </p>
      </motion.div>

      {/* Progress Glow */}
      <div className="mt-8 h-1 w-56 overflow-hidden rounded-full bg-white/10">
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            h-full w-1/2
            rounded-full
            bg-gradient-to-r
            from-blue-500
            via-cyan-400
            to-blue-500
          "
        />
      </div>
    </div>
  );
}