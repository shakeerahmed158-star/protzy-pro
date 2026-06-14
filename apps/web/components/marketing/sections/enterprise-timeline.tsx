"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025",
    title: "Platform Vision",
    description:
      "Goopsy was designed to unify smartphone commerce, repairs and dealer infrastructure.",
  },
  {
    year: "2026",
    title: "Dealer Expansion",
    description:
      "Connected premium dealers and inventory systems into one intelligent ecosystem.",
  },
  {
    year: "2027",
    title: "AI Commerce Layer",
    description:
      "Introduced AI-powered pricing, analytics and repair optimization infrastructure.",
  },
  {
    year: "2028",
    title: "Global Marketplace",
    description:
      "Scaling towards intelligent global commerce and enterprise dealer networks.",
  },
];

export function EnterpriseTimeline() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]
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
            Enterprise Journey
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
            Building The Future
            <span className="block text-zinc-700">
              Of Smartphone Commerce
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
            Goopsy is evolving into a premium global
            commerce infrastructure connecting dealers,
            customers, logistics and intelligent systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-28">
          
          {/* Center Line */}
          <div
            className="
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-px
              -translate-x-1/2
              bg-white/10
              lg:block
            "
          />

          <div className="space-y-10">
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
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
                className={`
                  relative
                  flex
                  flex-col
                  gap-10
                  lg:flex-row
                  ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }
                `}
              >
                
                {/* Content */}
                <div className="flex-1">
                  
                  <div
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[40px]
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-10
                      
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
                          h-56
                          w-56
                          -translate-x-1/2
                          -translate-y-1/2
                          rounded-full
                          bg-white/10
                          blur-3xl
                        "
                      />
                    </div>

                    <div className="relative z-10">
                      
                      <div
                        className="
                          inline-flex
                          rounded-full
                          border
                          border-white/10
                          bg-white/5
                          px-5
                          py-2
                          text-sm
                          text-zinc-300
                        "
                      >
                        {item.year}
                      </div>

                      <h3
                        className="
                          pt-8
                          text-4xl
                          font-black
                          text-white
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          pt-6
                          leading-relaxed
                          text-zinc-600
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-10
                    hidden
                    h-6
                    w-6
                    -translate-x-1/2
                    rounded-full
                    border
                    border-white/10
                    bg-white
                    shadow-[0_0_30px_rgba(255,255,255,0.5)]
                    lg:block
                  "
                />

                {/* Empty Side */}
                <div className="hidden flex-1 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}