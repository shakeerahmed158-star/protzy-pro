"use client";

import { motion } from "framer-motion";

interface SellHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function SellHeader({
  title,
  subtitle,
  breadcrumb,
}: SellHeaderProps) {
  return (
    <div className="mb-8">
      {breadcrumb && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-3 text-sm text-zinc-400"
        >
          {breadcrumb}
        </motion.p>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl font-black tracking-tight text-white md:text-5xl"
      >
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-3 max-w-2xl text-zinc-400 text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}