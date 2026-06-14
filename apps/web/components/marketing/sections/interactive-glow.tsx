"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function InteractiveGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        py-20
      "
    >
      
      {/* Dynamic Glow */}
      <motion.div
        animate={{
          x: position.x - 200,
          y: position.y - 200,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20,
        }}
        className="
          pointer-events-none
          absolute
          h-[400px]
          w-[400px]
          rounded-full
          bg-white/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-6xl">
        
        {/* Content */}
        <div
          className="
            overflow-hidden
            rounded-[48px]
            border
            border-white/10
            bg-white/[0.03]
            p-16
            
          "
        >
          
          <div className="max-w-4xl">
            
            <p
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-zinc-700
              "
            >
              Intelligent Ecosystem
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
              Technology That
              <span className="block text-zinc-700">
                Moves With You
              </span>
            </h2>

            <p
              className="
                max-w-2xl
                pt-10
                text-lg
                leading-relaxed
                text-zinc-600
              "
            >
              protzy creates a seamless experience
              between customers, dealers and repair
              infrastructure with real-time intelligence
              and premium interactions.
            </p>

            {/* Cards */}
            <div
              className="
                mt-16
                grid
                gap-6
                md:grid-cols-3
              "
            >
              
              {[
                "AI Pricing",
                "Dealer Network",
                "Repair Tracking",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    backdrop-blur-xl
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      text-2xl
                    "
                  >
                    ⚡
                  </div>

                  <h3
                    className="
                      pt-6
                      text-2xl
                      font-bold
                      text-white
                    "
                  >
                    {item}
                  </h3>

                  <p
                    className="
                      pt-4
                      leading-relaxed
                      text-zinc-600
                    "
                  >
                    Premium infrastructure built for
                    modern smartphone commerce.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}