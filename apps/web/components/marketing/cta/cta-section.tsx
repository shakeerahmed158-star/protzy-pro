import { Reveal } from "../../animations/reveal";
import { SectionTransition } from "../../animations/section-transition";

export function CTASection() {
  return (
    <SectionTransition>
  <section className="relative overflow-hidden bg-black px-6 py-16">
      
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_50%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        
        <Reveal>
          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
              bg-white/5
              p-16
              text-center
              
            "
          >
            {/* Floating Glow */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[350px]
                w-[350px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/10
                blur-3xl
              "
            />

            <div className="relative z-10">
              
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-700">
                Join Goopsy
              </p>

              <h2
                className="
                  text-5xl
                  font-black
                  leading-tight
                  text-white
                  md:text-6xl
                "
              >
                Ready To Experience
                <span className="block text-zinc-700">
                  The Future Of Smartphones?
                </span>
              </h2>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-zinc-600
                "
              >
                Buy, sell and repair devices through
                one premium connected smartphone
                commerce ecosystem.
              </p>

              {/* Buttons */}
              <div
                className="
                  mt-12
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-4
                "
              >
                <button
                  className="
                    rounded-2xl
                    bg-white
                    px-8
                    py-4
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]
                  "
                >
                  Get Started
                </button>

                <button
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    px-8
                    py-4
                    font-semibold
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:bg-white/10
                  "
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
    </SectionTransition>
  );
}