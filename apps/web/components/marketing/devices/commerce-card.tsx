"use client";

import { motion } from "framer-motion";

interface CommerceCardProps {
  title: string;
  price: string;
  condition: string;
}

export function CommerceCard({
  title,
  price,
  condition,
}: CommerceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        p-6
        
      "
    >
      
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/10
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Device Mock */}
      <div
        className="
          relative
          flex
          h-64
          items-center
          justify-center
          rounded-[28px]
          border
          border-white/10
          bg-gradient-to-b
          from-zinc-900
          to-black
        "
      >
        <div
          className="
            h-44
            w-24
            rounded-[24px]
            border
            border-white/10
            bg-[#0f172a]
            shadow-[0_0_40px_rgba(255,255,255,0.08)]
          "
        />
      </div>

      {/* Content */}
      <div className="relative pt-6">
        
        <div className="flex items-center justify-between">
          
          <h3 className="text-xl font-bold text-white">
            {title}
          </h3>

          <span
            className="
              rounded-full
              border
              border-emerald-500/20
              bg-emerald-500/10
              px-3
              py-1
              text-xs
              text-emerald-400
            "
          >
            {condition}
          </span>
        </div>

        <p className="pt-4 text-3xl font-black text-white">
          {price}
        </p>

        <button
          className="
            mt-6
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
          "
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}