"use client";

import { motion } from "framer-motion";

import { ReactNode } from "react";

interface StaggerProps {
  children: ReactNode;
}

export function Stagger({
  children,
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}