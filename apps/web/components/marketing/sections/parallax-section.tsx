"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      className="
        relative
        overflow-hidden
        px-6
        py-20
      "
    >
      
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]
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
            Future Infrastructure
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
            Built For The Next
            <span className="block text-zinc-700">
              Smartphone Economy
            </span>
          </h2>

          <p
            className="
              mx-auto
              pt-10
              text-lg
              leading-relaxed
              text-zinc-600
            "
          >
            Goopsy connects customers, dealers,
            logistics and repairs into one intelligent
            digital ecosystem powered by modern
            infrastructure.
          </p>
        </div>

        {/* Parallax Cards */}
        <div
          className="
            relative
            mt-32
            grid
            gap-10
            lg:grid-cols-2
          "
        >
          
          {/* Left */}
          <motion.div
            style={{ y: y1 }}
            className="
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              p-10
              
            "
          >
            <div
              className="
                h-[500px]
                rounded-[32px]
                border
                border-white/10
                bg-gradient-to-b
                from-zinc-900
                to-black
                p-8
              "
            >
              
              <div className="h-16 rounded-3xl bg-white/10" />

              <div className="mt-8 grid gap-6">
                
                <div className="h-32 rounded-3xl bg-white/5" />

                <div className="h-32 rounded-3xl bg-white/5" />

                <div className="h-32 rounded-3xl bg-white/5" />
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            style={{ y: y2 }}
            className="
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              p-10
              
            "
          >
            <div
              className="
                flex
                h-[500px]
                items-center
                justify-center
                rounded-[32px]
                border
                border-white/10
                bg-gradient-to-br
                from-white/10
                to-transparent
              "
            >
              
              <div className="text-center">
                
                <div
                  className="
                    mx-auto
                    flex
                    h-28
                    w-28
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-4xl
                  "
                >
                  ⚡
                </div>

                <h3
                  className="
                    pt-8
                    text-4xl
                    font-bold
                    text-white
                  "
                >
                  AI Powered Commerce
                </h3>

                <p
                  className="
                    mx-auto
                    max-w-md
                    pt-6
                    leading-relaxed
                    text-zinc-600
                  "
                >
                  Real-time pricing, dealer intelligence,
                  inventory systems and premium customer
                  experiences built into one platform.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}