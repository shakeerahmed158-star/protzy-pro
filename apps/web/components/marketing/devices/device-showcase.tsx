"use client";

import { motion } from "framer-motion";

import { FloatingCard } from "../../animations/floating-card";
import { ParallaxSection } from "../../animations/parallax-section";

export function DeviceShowcase() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-6xl items-center justify-center">
        
        {/* Left Card */}
        <FloatingCard
          className="
            absolute
            left-0
            hidden
            lg:block
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
              rotate: -12,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: -12,
            }}
            transition={{
              duration: 1,
            }}
            className="
              h-[500px]
              w-[260px]
              rounded-[40px]
              border
              border-white/10
              bg-white/5
              
            "
          />
        </FloatingCard>

        {/* Main Device */}
        
        <ParallaxSection offset={80}>
  <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          animate={{
            y: [0, -20, 0],
          }}
          className="
            relative
            z-10
            h-[650px]
            w-[320px]
            rounded-[50px]
            border
            border-white/10
            bg-gradient-to-b
            from-zinc-900
            to-black
            shadow-[0_0_80px_rgba(255,255,255,0.08)]
          "
        >
          
          {/* Screen */}
          <div className="absolute inset-[12px] overflow-hidden rounded-[40px] bg-black">
            
            {/* Top Glow */}
            <div className="absolute top-0 h-40 w-full bg-gradient-to-b from-white/10 to-transparent" />

            {/* Mock UI */}
            <div className="flex h-full flex-col justify-between p-6">
              
              <div>
                <div className="h-14 w-40 rounded-2xl bg-white/10" />

                <div className="mt-6 h-40 rounded-3xl bg-gradient-to-br from-white/10 to-transparent" />
              </div>

              <div className="space-y-4">
                
                <div className="h-16 rounded-3xl bg-white/5" />

                <div className="h-16 rounded-3xl bg-white/5" />

                <div className="h-16 rounded-3xl bg-white/5" />
              </div>
            </div>
          </div>
        </motion.div>
        </ParallaxSection>

        {/* Right Card */}
        <FloatingCard
          className="
            absolute
            right-0
            hidden
            lg:block
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
              rotate: 12,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 12,
            }}
            transition={{
              duration: 1,
            }}
            className="
              h-[500px]
              w-[260px]
              rounded-[40px]
              border
              border-white/10
              bg-white/5
              
            "
          />
        </FloatingCard>
      </div>
    </section>
  );
}