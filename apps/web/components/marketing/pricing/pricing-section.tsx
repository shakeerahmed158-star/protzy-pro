import { Reveal } from "../../animations/reveal";

import { pricingPlans } from "./pricing-data";
import { PricingCard } from "./pricing-card";
import { SectionTransition } from "../../animations/section-transition";

export function PricingSection() {
  return (
   <SectionTransition>
  <section className="relative overflow-hidden px-6 py-16">
      
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_50%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-700">
              Pricing
            </p>

            <h2
              className="
                pt-6
                text-5xl
                font-black
                leading-tight
                text-white
                md:text-6xl
              "
            >
              Flexible Plans
              <span className="block text-zinc-700">
                Built For Scale.
              </span>
            </h2>

            <p
              className="
                pt-8
                text-lg
                leading-relaxed
                text-zinc-600
              "
            >
              Choose the perfect plan for your
              smartphone business ecosystem.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid gap-8 pt-20 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Reveal key={plan.title}>
              <PricingCard
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                highlighted={plan.highlighted}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    </SectionTransition>
  );
}