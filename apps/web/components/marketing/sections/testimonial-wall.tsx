"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Dealer Partner",
    review:
      "Goopsy completely changed the way we manage premium device inventory.",
  },
  {
    name: "Ayesha Khan",
    role: "Customer",
    review:
      "The buying experience feels smooth, transparent and futuristic.",
  },
  {
    name: "Arjun Nair",
    role: "Repair Partner",
    review:
      "Repair tracking and logistics integration are incredibly efficient.",
  },
  {
    name: "Karan Mehta",
    role: "Store Owner",
    review:
      "Dealer analytics and smart pricing tools are next-level powerful.",
  },
  {
    name: "Neha Sharma",
    role: "Customer",
    review:
      "The UI experience genuinely feels like a premium global platform.",
  },
  {
    name: "Imran Ali",
    role: "Distributor",
    review:
      "Inventory movement and dealer coordination became extremely fast.",
  },
];

export function TestimonialWall() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      
      {/* Background Glow */}
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
            Trusted Ecosystem
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
            Trusted By Dealers,
            <span className="block text-zinc-700">
              Customers & Partners
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
            Thousands of users trust Goopsy for
            premium commerce, repair infrastructure
            and intelligent dealer operations.
          </p>
        </div>

        {/* Floating Wall */}
        <div
          className="
            mt-24
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
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
                delay: index * 0.08,
              }}
              animate={{
                y: [0, -10, 0],
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

              {/* Quote */}
              <div
                className="
                  relative
                  z-10
                  text-5xl
                  text-white/20
                "
              >
                “
              </div>

              {/* Review */}
              <p
                className="
                  relative
                  z-10
                  pt-6
                  leading-relaxed
                  text-zinc-300
                "
              >
                {testimonial.review}
              </p>

              {/* User */}
              <div className="relative z-10 pt-10">
                
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {testimonial.name}
                </h3>

                <p className="pt-2 text-zinc-700">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}