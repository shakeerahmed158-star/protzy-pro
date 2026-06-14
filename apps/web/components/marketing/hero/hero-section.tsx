import { Reveal } from "../../animations/reveal";
import { FloatingGradient } from "../../animations/floating-gradient";
import { MagneticButton } from "../../animations/magnetic-button";
import { ParallaxSection } from "../../animations/parallax-section";
import { TextReveal } from "../../animations/text-reveal";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-black px-6 pt-32 text-zinc-900">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      <FloatingGradient />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}

       <ParallaxSection offset={120}>
  <Reveal>
    <div>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Trusted by Dealers Across India
            </div>

            {/* Heading */}
           <div className="pt-8">
  
  <TextReveal
    text="Buy. Sell."
    className="
      text-6xl
      font-black
      leading-tight
      text-white
      md:text-5xl
    "
  />

  <TextReveal
    text="Repair."
    className="
      mt-2
      text-6xl
      font-black
      leading-tight
      text-zinc-600
      md:text-5xl
    "
  />
</div>

            {/* Description */}
            <p className="max-w-2xl pt-8 text-lg leading-relaxed text-zinc-600">
              protzy connects customers, dealers and
              repair partners into one premium
              smartphone commerce ecosystem across India.
            </p>

            {/* Magnetic Buttons */}
           <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
  
  <MagneticButton
    className="
      rounded-2xl
      bg-gradient-to-r
      from-violet-600
      via-blue-500
      to-[#60a5fa]
      px-8
      py-4
      font-semibold
      text-white
      shadow-[0_10px_40px_rgba(59,130,246,0.35)]
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_20px_60px_rgba(139,92,246,0.35)]
    "
  >
    Explore Marketplace
  </MagneticButton>

  <MagneticButton
    className="
      rounded-2xl
      border
      border-white/40
      bg-white
      px-8
      py-4
      font-semibold
      text-zinc-900
      
      shadow-[0_10px_40px_rgba(255,255,255,0.35)]
      transition-all
      duration-300
      hover:bg-white
      hover:scale-105
    "
  >
    Become Dealer
  </MagneticButton>
</div>
            {/* Stats */}
            <div className="flex flex-wrap gap-10 pt-14">
              
              <div>
                <h3 className="text-3xl font-bold">
                  15K+
                </h3>

                <p className="pt-2 text-sm text-zinc-700">
                  Devices Sold
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  2K+
                </h3>

                <p className="pt-2 text-sm text-zinc-700">
                  Trusted Dealers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  25+
                </h3>

                <p className="pt-2 text-sm text-zinc-700">
                  Active Cities
                </p>
              </div>
            </div>
         </div>
  </Reveal>
</ParallaxSection>

        {/* RIGHT SIDE DEVICE SHOWCASE */}
        <Reveal>
          <div className="relative flex items-center justify-center">
            
            {/* Main Phone */}
            <div className="relative h-[550px] w-[280px] rounded-[3rem] border border-white/10 bg-gradient-to-b from-zinc-900 to-black shadow-[0_0_80px_rgba(255,255,255,0.08)]">
              
              <div className="absolute inset-3 rounded-[2.5rem] bg-gradient-to-br from-zinc-800 to-zinc-950" />

              {/* Top Notch */}
              <div className="absolute left-1/2 top-3 h-6 w-32 -translate-x-1/2 rounded-full bg-transparent" />
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -left-10 top-20 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <p className="text-sm text-zinc-600">
                iPhone 15 Pro
              </p>

              <h4 className="pt-2 text-xl font-bold">
                ₹84,999
              </h4>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -right-10 bottom-20 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <p className="text-sm text-zinc-600">
                Repair Success
              </p>

              <h4 className="pt-2 text-xl font-bold text-green-400">
                98%
              </h4>
            </div>

            {/* Glow Effect */}
            <div className="absolute -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}