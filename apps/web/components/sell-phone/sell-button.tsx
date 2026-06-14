"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface SellButtonProps extends HTMLMotionProps<"button"> {
  loading?: boolean;
  children: React.ReactNode;
}

export default function SellButton({
  children,
  loading,
  className = "",
  disabled,
  ...props
}: SellButtonProps) {
  return (
    <motion.button
      type="button"
      whileHover={{
        scale: disabled ? 1 : 1.02,
      }}
      whileTap={{
        scale: disabled ? 1 : 0.98,
      }}
      disabled={disabled || loading}
      className={`
        relative overflow-hidden
        rounded-2xl
        bg-blue-600
        px-6 py-4
        text-lg font-bold
        text-white
        shadow-[0_10px_40px_rgba(37,99,235,0.35)]
        transition-all
        duration-300
        hover:bg-blue-500
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading ? (
          <>
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Processing...
          </>
        ) : (
          children
        )}
      </span>

      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
    </motion.button>
  );
}