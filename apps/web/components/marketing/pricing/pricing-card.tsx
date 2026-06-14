"use client";

import { motion } from "framer-motion";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  highlighted,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        p-10
        
        ${
          highlighted
            ? "border-white bg-white text-black"
            : "border-white/10 bg-white/5 text-white"
        }
      `}
    >
      {/* Glow */}
      <div
        className={`
          absolute
          inset-0
          opacity-40
          blur-3xl
          ${
            highlighted
              ? "bg-white/20"
              : "bg-white/5"
          }
        `}
      />

      <div className="relative z-10">
        
        <p
          className={`
            text-sm
            uppercase
            tracking-[0.3em]
            ${
              highlighted
                ? "text-zinc-700"
                : "text-zinc-700"
            }
          `}
        >
          {title}
        </p>

        <h3 className="pt-6 text-5xl font-black">
          {price}
        </h3>

        <p
          className={`
            pt-6
            leading-relaxed
            ${
              highlighted
                ? "text-zinc-700"
                : "text-zinc-600"
            }
          `}
        >
          {description}
        </p>

        {/* Features */}
        <div className="space-y-4 pt-10">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <div
                className={`
                  h-2
                  w-2
                  rounded-full
                  ${
                    highlighted
                      ? "bg-black"
                      : "bg-white"
                  }
                `}
              />

              <p>{feature}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          className={`
            mt-10
            w-full
            rounded-2xl
            px-6
            py-4
            font-semibold
            transition
            ${
              highlighted
                ? "bg-black text-white hover:opacity-90"
                : "bg-white text-black hover:scale-[1.02]"
            }
          `}
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
}