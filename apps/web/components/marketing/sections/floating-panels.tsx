"use client";

import { motion } from "framer-motion";

const panels = [
  {
    title: "Dealer Intelligence",
    value: "850+",
    description: "Connected active dealers",
  },
  {
    title: "Smart Pricing",
    value: "AI",
    description: "Dynamic market optimization",
  },
  {
    title: "Repair Network",
    value: "24/7",
    description: "Live repair infrastructure",
  },
  {
    title: "Commerce Scale",
    value: "24K+",
    description: "Devices moving monthly",
  },
];

export function FloatingPanels() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]
        "
      />

      <div className="relative mx-auto max-w-6xl">
        
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          
          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-zinc-700
            "
          >
            Premium Infrastructure
          </p>

          <h2
            className="
              pt-6
              text-5xl
              font-black
              leading-tight
              text-white
              md:text-7xl
            "
          >
            Built With Floating
            <span className="block text-zinc-700">
              Glass Interfaces
            </span>
          </h2>

          <p
            className="
              mx-auto
              max-w-3xl
              pt-10
              text-lg
              leading-relaxed
              text-zinc-600
            "
          >
            Modern commerce infrastructure designed
            with cinematic motion, layered depth and
            futuristic glassmorphism interactions.
          </p>
        </div>

        {/* Floating Panels */}
        <div
          className="
            relative
            mt-28
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          
          {panels.map((panel, index) => (
            <motion.div
              key={panel.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              animate={{
                y: [0, -12, 0],
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-white/10
                bg-white/[0.04]
                p-8
                
              "
            >
              
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-40
                    w-40
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-white/10
                    blur-3xl
                  "
                />
              </div>

              {/* Top Icon */}
              <div
                className="
                  relative
                  z-10
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  text-2xl
                "
              >
                ✦
              </div>

              {/* Value */}
              <h3
                className="
                  relative
                  z-10
                  pt-10
                  text-6xl
                  font-black
                  text-white
                "
              >
                {panel.value}
              </h3>

              {/* Title */}
              <h4
                className="
                  relative
                  z-10
                  pt-6
                  text-2xl
                  font-bold
                  text-white
                "
              >
                {panel.title}
              </h4>

              {/* Description */}
              <p
                className="
                  relative
                  z-10
                  pt-4
                  leading-relaxed
                  text-zinc-600
                "
              >
                {panel.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}