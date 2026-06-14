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
        y: -4,
        scale: 1.01,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={onClick}
      className={`
        relative overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-5
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:bg-white/10
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300 hover:opacity-100" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}