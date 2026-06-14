"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  review: string;
}

export function TestimonialCard({
  name,
  role,
  review,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
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
        p-8
        
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
        
        <p className="text-lg leading-relaxed text-zinc-300">
          "{review}"
        </p>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white">
            {name}
          </h3>

          <p className="mt-1 text-sm text-zinc-700">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}