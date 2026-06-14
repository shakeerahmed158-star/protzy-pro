"use client";

import { motion } from "framer-motion";

export function FinalHero() {
  return (
    <section className="relative overflow-hidden px-6 py-48">
      
      {/* Background Layers */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_50%)]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[520px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-6xl text-center">
        
        {/* Small Label */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            text-sm
            uppercase
            tracking-[0.4em]
            text-zinc-700
          "
        >
          The Future Begins Here
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="
            mx-auto
            max-w-6xl
            pt-10
            text-6xl
            font-black
            leading-tight
            text-white
            md:text-5xl
          "
        >
          Reinventing The Entire
          <span className="block text-zinc-700">
            Smartphone Economy
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            mx-auto
            max-w-3xl
            pt-12
            text-xl
            leading-relaxed
            text-zinc-600
          "
        >
          protzy connects intelligent commerce,
          premium device experiences, AI-powered
          infrastructure and enterprise dealer
          ecosystems into one futuristic platform.
        </motion.p>

        {/* Floating Glass Panel */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            relative
            mx-auto
            mt-24
            max-w-5xl
            overflow-hidden
            rounded-[48px]
            border
            border-white/10
            bg-white/[0.04]
            p-12
            
          "
        >
          
          {/* Glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-72
              w-72
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div className="relative z-10">
            
            {/* Metrics */}
            <div
              className="
                grid
                gap-8
                md:grid-cols-3
              "
            >
              
              {[
                {
                  value: "24K+",
                  label: "Devices Moving",
                },
                {
                  value: "850+",
                  label: "Dealer Network",
                },
                {
                  value: "98%",
                  label: "Customer Trust",
                },
              ].map((item) => (
                <div key={item.label}>
                  
                  <h3
                    className="
                      text-6xl
                      font-black
                      text-white
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                      pt-4
                      text-zinc-600
                    "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div
              className="
                mt-16
                flex
                flex-wrap
                items-center
                justify-center
                gap-6
              "
            >
              
              <button
                className="
                  rounded-2xl
                  bg-white
                  px-10
                  py-3
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
                "
              >
                Start With protzy
              </button>

              <button
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-10
                  py-3
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
              >
                Explore Platform
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}