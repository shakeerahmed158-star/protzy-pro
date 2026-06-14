"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SellCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SellCard({
  children,
  className = "",
  onClick,
}: SellCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.995,
      }}
      transition={{
        duration: 0.22,
        ease: "easeOut",
      }}
      onClick={onClick}
      className={`
        group relative overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        p-5
        shadow-[0_10px_50px_rgba(0,0,0,0.35)]
        transition-all duration-300
        will-change-transform
        hover:border-blue-500/40
        hover:bg-white/[0.06]
        hover:shadow-[0_20px_60px_rgba(37,99,235,0.18)]
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {/* Glow Layer */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-blue-500/10
          via-cyan-400/5
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Border Glow */}
      <div
        className="
          absolute inset-0 rounded-3xl
          ring-1 ring-inset ring-white/5
          group-hover:ring-blue-400/20
          transition-all duration-500
        "
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}