"use client";

import {
  ShieldCheck,
  Smartphone,
  Wrench,
  Store,
} from "lucide-react";

import { Reveal } from "../../animations/reveal";
import { SectionTransition } from "../../animations/section-transition";
import { TiltCard } from "../../animations/tilt-card";

const features = [
  {
    title: "Buy Premium Devices",
    description:
      "Discover verified smartphones with warranty, quality checks and trusted dealer assurance.",
    icon: Smartphone,
  },
  {
    title: "Sell Instantly",
    description:
      "Get AI-powered pricing, instant offers and seamless resale experience for your devices.",
    icon: ShieldCheck,
  },
  {
    title: "Repair Network",
    description:
      "Book doorstep repairs, track live service progress and connect with verified technicians.",
    icon: Wrench,
  },
  {
    title: "Dealer Ecosystem",
    description:
      "Empowering dealers with inventory systems, CRM tools, lead generation and analytics.",
    icon: Store,
  },
];

export function FeaturesSection() {
  return (
    <SectionTransition>
  <section className="relative overflow-hidden bg-black py-16">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div
          className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[260px]
          -translate-x-1/2
          rounded-full
          bg-white/5
          blur-3xl
        "
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        
        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-700">
              Ecosystem Features
            </p>

            <h2 className="text-5xl font-black leading-tight text-white md:text-6xl">
              One platform.
              <span className="block text-zinc-700">
                Multiple possibilities.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
              protzy combines commerce, repairs,
              logistics and dealer infrastructure into
              one premium smartphone ecosystem.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid gap-8 pt-24 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.title}>
  <TiltCard>
    <div
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-10
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-white/20
                  hover:bg-white/[0.05]
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

                  {/* Icon */}
                  <div
                    className="
                    relative
                    z-10
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                  "
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 pt-8">
                    <h3 className="text-3xl font-bold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-5 leading-relaxed text-zinc-600">
                      {feature.description}
                    </p>

                    {/* Animated Line */}
                    <div
                      className="
                      mt-8
                      h-[2px]
                      w-0
                      bg-white
                      transition-all
                      duration-500
                      group-hover:w-24
                    "
                    />
                  </div>
                </div>
  </TiltCard>
</Reveal>
            );
          })}
        </div>
      </div>
      </section>
    </SectionTransition>
  );
}