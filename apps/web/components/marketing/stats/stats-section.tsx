import { Reveal } from "../../animations/reveal";

import { stats } from "./stats-data";
import { StatsCard } from "./stats-card";
import { SectionTransition } from "../../animations/section-transition";

export function StatsSection() {
  return (
    <SectionTransition>
  <section className="relative px-6 py-16">
      
      <div className="mx-auto max-w-6xl">
        
        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-700">
              protzy Network
            </p>

            <h2 className="pt-6 text-5xl font-black text-white md:text-6xl">
              Built For Scale.
            </h2>

            <p className="pt-8 text-lg leading-relaxed text-zinc-600">
              A premium ecosystem connecting customers,
              dealers and repair infrastructure together.
            </p>
          </div>
        </Reveal>

        {/* Stats Grid */}
        <div className="grid gap-8 pt-20 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Reveal key={stat.label}>
              <StatsCard
                number={stat.number}
                label={stat.label}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    </SectionTransition>
  );
}