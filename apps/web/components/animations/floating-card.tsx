"use client";

import { motion } from "framer-motion";

import { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
}

export function FloatingCard({
  children,
  className,
}: FloatingCardProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.03,
        y: -15,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}