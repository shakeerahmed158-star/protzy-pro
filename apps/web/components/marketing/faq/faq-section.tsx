import { Reveal } from "../../animations/reveal";

import { faqs } from "./faq-data";
import { FAQItem } from "./faq-item";
import { SectionTransition } from "../../animations/section-transition";

export function FAQSection() {
  return (
   <SectionTransition>
  <section className="relative overflow-hidden px-6 py-16">
      
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_50%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        
        {/* Heading */}
        <Reveal>
          <div className="text-center">
            
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-700">
              FAQ
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
              Frequently Asked
              <span className="block text-zinc-700">
                Questions.
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
              Everything you need to know about
              Goopsy’s premium smartphone ecosystem.
            </p>
          </div>
        </Reveal>

        {/* FAQ Items */}
        <div className="space-y-6 pt-20">
          {faqs.map((faq) => (
            <Reveal key={faq.question}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    </SectionTransition>
  );
}