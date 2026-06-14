import { Reveal } from "../../animations/reveal";

import { testimonials } from "./testimonials-data";
import { TestimonialCard } from "./testimonial-card";
import { SectionTransition } from "../../animations/section-transition";

export function TestimonialsSection() {
  return (
    <SectionTransition>
  <section className="relative overflow-hidden px-6 py-16">
      
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            
            <p
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-zinc-700
              "
            >
              Testimonials
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
              Trusted By Customers,
              <span className="block text-zinc-700">
                Dealers & Partners.
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
              Goopsy powers the next generation
              smartphone commerce ecosystem with
              trust, transparency and premium service.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div
          className="
            grid
            gap-8
            pt-20
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {testimonials.map((testimonial) => (
            <Reveal key={testimonial.name}>
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                review={testimonial.review}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    </SectionTransition>
  );
}