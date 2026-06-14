"use client";

import { motion } from "framer-motion";

interface StatsCardProps {
  number: string;
  label: string;
}

export function StatsCard({
  number,
  label,
}: StatsCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-10
        
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/10
          to-transparent
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        <h3
          className="
            text-5xl
            font-black
            tracking-tight
            text-white
          "
        >
          {number}
        </h3>

        <p
          className="
            mt-4
            text-lg
            text-zinc-600
          "
        >
          {label}
        </p>
      </div>
    </motion.div>
  );
}