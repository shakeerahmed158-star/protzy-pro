"use client";

import { motion } from "framer-motion";

export function AnimatedGrid() {
  return (
    <motion.div
      animate={{
        backgroundPosition: [
          "0px 0px",
          "100px 100px",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
      className="
        absolute
        inset-0
        opacity-20
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:60px_60px]
      "
    />
  );
}