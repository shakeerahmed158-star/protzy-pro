"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    title: "Devices Sold",
    value: "24K+",
    growth: "+18%",
  },
  {
    title: "Repair Requests",
    value: "12K+",
    growth: "+11%",
  },
  {
    title: "Dealer Network",
    value: "850+",
    growth: "+26%",
  },
  {
    title: "Customer Satisfaction",
    value: "98%",
    growth: "+9%",
  },
];

export function MetricsDashboard() {
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
            Real-Time Analytics
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
            Built With Intelligent
            <span className="block text-zinc-700">
              Commerce Infrastructure
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
            Powerful dealer analytics, inventory systems,
            repair tracking and customer intelligence —
            all connected in one ecosystem.
          </p>
        </div>

        {/* Dashboard */}
        <div
          className="
            mt-24
            rounded-[48px]
            border
            border-white/10
            bg-white/[0.03]
            p-10
            
          "
        >
          
          {/* Top Graph */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-gradient-to-b
              from-white/10
              to-transparent
              p-10
            "
          >
            
            <div className="flex items-end gap-6">
              
              {[40, 70, 55, 90, 60, 110, 80].map(
                (height, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      height: 0,
                    }}
                    whileInView={{
                      height,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08,
                    }}
                    className="
                      w-full
                      rounded-t-3xl
                      bg-white
                    "
                  />
                )
              )}
            </div>

            <div className="pt-8 text-zinc-600">
              Marketplace growth analytics
            </div>
          </div>

          {/* Metrics Grid */}
          <div
            className="
              mt-10
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                "
              >
                
                <p className="text-zinc-700">
                  {metric.title}
                </p>

                <h3
                  className="
                    pt-4
                    text-5xl
                    font-black
                    text-white
                  "
                >
                  {metric.value}
                </h3>

                <div
                  className="
                    mt-6
                    inline-flex
                    rounded-full
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    px-4
                    py-2
                    text-sm
                    text-emerald-400
                  "
                >
                  {metric.growth}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}