import { HeroBadge } from "./hero-badge";
import { HeroButtons } from "./hero-buttons";
import { HeroStats } from "./hero-stats";

export function HeroContent() {
  return (
    <div className="max-w-3xl">
      
      <HeroBadge />

      <h1
        className="
        pt-8
        text-5xl
        font-black
        leading-tight
        text-white
        md:text-7xl
      "
      >
        Buy, Sell & Repair Smartphones
        <span className="block text-zinc-700">
          Across India
        </span>
      </h1>

      <p
        className="
        max-w-2xl
        pt-8
        text-lg
        leading-relaxed
        text-zinc-600
      "
      >
        protzy helps customers and dealers buy,
        sell, repair and manage smartphones with
        premium commerce infrastructure.
      </p>

      <HeroButtons />

      <HeroStats />
    </div>
  );
}