"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Plus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  const [open, setOpen] =
    useState(false);

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        
      "
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-6
          p-8
          text-left
        "
      >
        <h3 className="text-xl font-semibold text-white">
          {question}
        </h3>

        <motion.div
          animate={{
            rotate: open ? 45 : 0,
          }}
        >
          <Plus className="text-white" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8">
              <p className="leading-relaxed text-zinc-600">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}