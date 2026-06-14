"use client";

import { motion } from "framer-motion";

export function PremiumLoader() {
  return (
    <div
      className="
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-black
      "
    >
      
      {/* Background Glow */}
      <div
        className="
          absolute
          h-[400px]
          w-[400px]
          rounded-full
          bg-white/10
          blur-3xl
        "
      />

      {/* Loader Content */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Logo */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
          }}
          className="
            text-6xl
            font-black
            tracking-[0.3em]
            text-white
          "
        >
          protzy
        </motion.h1>

        {/* Loading Bar */}
        <div
          className="
            relative
            mt-10
            h-[2px]
            w-64
            overflow-hidden
            rounded-full
            bg-white/10
          "
        >
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "100%",
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-y-0
              w-1/2
              bg-white
            "
          />
        </div>

        {/* Text */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="
            pt-6
            text-sm
            uppercase
            tracking-[0.3em]
            text-zinc-700
          "
        >
          Loading Experience
        </motion.p>
      </div>
    </div>
  );
}