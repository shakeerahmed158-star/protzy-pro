"use client";

import { motion } from "framer-motion";

const activities = [
  {
    title: "iPhone 15 Pro Sold",
    description: "Purchased instantly in Bangalore",
    time: "2 mins ago",
  },
  {
    title: "Repair Booked",
    description: "Screen replacement confirmed",
    time: "5 mins ago",
  },
  {
    title: "Dealer Added Inventory",
    description: "24 new premium devices listed",
    time: "8 mins ago",
  },
  {
    title: "Samsung S24 Purchased",
    description: "Verified customer checkout completed",
    time: "12 mins ago",
  },
];

export function LiveActivityFeed() {
  return (
    <section className="relative overflow-hidden px-6 py-16">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-700">
            Live Ecosystem
          </p>

          <h2 className="pt-6 text-5xl font-black text-white md:text-6xl">
            Real-Time Marketplace Activity
          </h2>

          <p className="pt-8 text-lg leading-relaxed text-zinc-600">
            Watch devices being sold, repairs booked
            and dealers actively growing on protzy.
          </p>
        </div>

        {/* Feed */}
        <div className="mt-20 space-y-6">
          
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
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
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                
                transition-all
                duration-500
                hover:border-white/20
                hover:bg-white/[0.05]
              "
            >
              
              {/* Glow */}
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

              <div className="relative z-10 flex items-center justify-between">
                
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {activity.title}
                  </h3>

                  <p className="pt-3 text-zinc-600">
                    {activity.description}
                  </p>
                </div>

                <div
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                    text-sm
                    text-zinc-300
                  "
                >
                  {activity.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}