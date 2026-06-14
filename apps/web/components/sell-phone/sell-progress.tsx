"use client";

import { motion } from "framer-motion";

import {
  Smartphone,
  Cpu,
  ClipboardCheck,
  Wallet,
  MapPin,
  CheckCircle2,
} from "lucide-react";

interface SellProgressProps {
  step?: number;

  progressValue?: number;
}

const STEPS = [
  {
    id: 1,
    label: "Brand",
    icon: Smartphone,
  },

  {
    id: 2,
    label: "Device",
    icon: Cpu,
  },

  {
    id: 3,
    label: "Condition",
    icon: ClipboardCheck,
  },

  {
    id: 4,
    label: "Price",
    icon: Wallet,
  },

  {
    id: 5,
    label: "Pickup",
    icon: MapPin,
  },

  {
    id: 6,
    label: "Done",
    icon: CheckCircle2,
  },
];

export default function SellProgress({
  step = 1,

  progressValue,
}: SellProgressProps) {
  const progress =
    progressValue ??
    ((step - 1) / (STEPS.length - 1)) * 100;

  return (
    <div className="relative">

      {/* LINE TRACK */}
      <div
        className="
          absolute
          left-0
          top-7
          h-[4px]
          w-full
          rounded-full
          bg-slate-200/80
        "
      />

      {/* ACTIVE LINE */}
      <motion.div
        initial={`{
          width: 0,
        }}
        animate={{
          width: ${progress}%,
        }`}
        transition={{
          duration: 0.7,
        }}
        className="
          absolute
          left-0
          top-7
          h-[4px]
          rounded-full
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-violet-500
          shadow-[0_0_24px_rgba(59,130,246,0.55)]
        "
      />

      {/* STEPS */}
      <div className="relative flex items-center justify-between gap-2">

        {STEPS.map((item) => {
          const Icon = item.icon;

          const active = step >= item.id;

          return (
            <div
              key={item.id}
              className="
                relative
                flex
                flex-col
                items-center
                gap-3
              "
            >

              {/* ICON BOX */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                className={`
                  relative
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  transition-all
                  duration-300
                  backdrop-blur-xl

                  ${
                    active
                      ? `
                        border-blue-500/30
                        bg-gradient-to-br
                        from-blue-600
                        to-cyan-500
                        text-white
                        shadow-[0_10px_35px_rgba(59,130,246,0.35)]
                      `
                      : `
                        border-white/70
                        bg-white/90
                        text-slate-400
                        shadow-sm
                      `
                  }
                `}
              >

                {/* GLOW */}
                {active && (
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-2xl
                      bg-blue-500/20
                      blur-xl
                    "
                  />
                )}

                <Icon className="relative z-10 h-6 w-6" />
              </motion.div>

              {/* TEXT */}
              <div className="text-center">

                <p
                  className={`
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.18em]

                    ${
                      active
                        ? "text-blue-700"
                        : "text-slate-400"
                    }
                  `}
                >
                  Step {item.id}
                </p>

                <p
                  className={`
                    mt-1
                    text-xs
                    font-semibold
                    md:text-sm

                    ${
                      active
                        ? "text-black"
                        : "text-slate-400"
                    }
                  `}
                >
                  {item.label}
                </p>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}