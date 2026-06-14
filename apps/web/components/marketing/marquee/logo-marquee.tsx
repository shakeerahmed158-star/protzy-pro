"use client";

import { marqueeItems } from "./marquee-data";

export function LogoMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black py-10">
      
      {/* Fade Left */}
      <div
        className="
          absolute
          left-0
          top-0
          z-10
          h-full
          w-32
          bg-gradient-to-r
          from-black
          to-transparent
        "
      />

      {/* Fade Right */}
      <div
        className="
          absolute
          right-0
          top-0
          z-10
          h-full
          w-32
          bg-gradient-to-l
          from-black
          to-transparent
        "
      />

      {/* Marquee */}
      <div className="flex overflow-hidden">
        <div
          className="
            flex
            min-w-full
            animate-[marquee_25s_linear_infinite]
            items-center
            gap-10
            whitespace-nowrap
          "
        >
          {[...marqueeItems, ...marqueeItems].map(
            (item, index) => (
              <div
                key={index}
                className="
                  text-2xl
                  font-black
                  tracking-[0.3em]
                  text-zinc-700
                  transition
                  hover:text-white
                "
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}