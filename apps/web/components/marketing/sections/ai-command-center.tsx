"use client";

import { motion } from "framer-motion";

const aiFeatures = [
  {
    title: "AI Pricing Engine",
    description:
      "Smart real-time pricing powered by demand and inventory analytics.",
  },
  {
    title: "Dealer Intelligence",
    description:
      "Track dealer performance, inventory movement and conversion metrics.",
  },
  {
    title: "Repair Predictions",
    description:
      "Predict service timelines and optimize repair workflows automatically.",
  },
];

export function AICommandCenter() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]
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
            AI Infrastructure
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
            Intelligent Commerce
            <span className="block text-zinc-700">
              Powered By AI
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
            protzy leverages intelligent infrastructure
            to automate pricing, inventory insights,
            repair predictions and dealer optimization.
          </p>
        </div>

        {/* Dashboard Layout */}
        <div
          className="
            mt-24
            grid
            gap-8
            lg:grid-cols-[1.2fr_0.8fr]
          "
        >
          
          {/* Main AI Panel */}
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              p-10
              
            "
          >
            
            {/* Top Header */}
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-zinc-700">
                  AI Command Center
                </p>

                <h3
                  className="
                    pt-3
                    text-4xl
                    font-black
                    text-white
                  "
                >
                  Real-Time Intelligence
                </h3>
              </div>

              <div
                className="
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
                LIVE
              </div>
            </div>

            {/* AI Graph */}
            <div
              className="
                relative
                mt-12
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-gradient-to-b
                from-white/10
                to-transparent
                p-8
              "
            >
              
              <div className="flex items-end gap-4">
                
                {[60, 100, 80, 130, 95, 160, 120].map(
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
                AI commerce optimization analytics
              </div>
            </div>

            {/* Bottom Stats */}
            <div
              className="
                mt-10
                grid
                gap-6
                md:grid-cols-3
              "
            >
              
              {[
                "98% Prediction Accuracy",
                "24K Active Devices",
                "850+ Dealers Connected",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-6
                  "
                >
                  <p className="text-zinc-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Side Panels */}
          <div className="space-y-8">
            
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  x: 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  
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
                    text-3xl
                    font-bold
                    text-white
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    pt-4
                    leading-relaxed
                    text-zinc-600
                  "
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}