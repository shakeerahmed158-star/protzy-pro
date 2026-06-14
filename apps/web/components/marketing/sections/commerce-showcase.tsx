"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "iPhone 15 Pro Max",
    price: "₹1,39,999",
    tag: "Verified Premium",
  },
  {
    name: "Samsung S25 Ultra",
    price: "₹1,24,999",
    tag: "Top Seller",
  },
  {
    name: "OnePlus 13 Pro",
    price: "₹74,999",
    tag: "Fast Moving",
  },
];

export function CommerceShowcase() {
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
            Premium Marketplace
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
            Explore Premium
            <span className="block text-zinc-700">
              Commerce Experiences
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
            Discover verified smartphones, live
            inventory systems and intelligent
            commerce infrastructure designed for
            modern device ecosystems.
          </p>
        </div>

        {/* Showcase Grid */}
        <div
          className="
            mt-28
            grid
            gap-8
            lg:grid-cols-3
          "
        >
          
          {products.map((product, index) => (
            <motion.div
              key={product.name}
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
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
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

              {/* Device Mock */}
              <div
                className="
                  relative
                  z-10
                  flex
                  h-[420px]
                  items-center
                  justify-center
                  rounded-[32px]
                  border
                  border-white/10
                  bg-gradient-to-b
                  from-zinc-900
                  to-black
                "
              >
                
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="
                    h-[260px]
                    w-[140px]
                    rounded-[36px]
                    border
                    border-white/10
                    bg-[#0f172a]
                    shadow-[0_0_60px_rgba(255,255,255,0.08)]
                  "
                />
              </div>

              {/* Content */}
              <div className="relative z-10 pt-10">
                
                <div className="flex items-center justify-between">
                  
                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-white
                    "
                  >
                    {product.name}
                  </h3>

                  <div
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-2
                      text-xs
                      text-zinc-300
                    "
                  >
                    {product.tag}
                  </div>
                </div>

                <p
                  className="
                    pt-6
                    text-5xl
                    font-black
                    text-white
                  "
                >
                  {product.price}
                </p>

                <button
                  className="
                    mt-10
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-black
                  "
                >
                  View Device
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}