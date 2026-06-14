"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "How do I sell my old phone on protzy?",
      a: "Select your device, answer a few questions, get instant price, schedule pickup and receive payment after verification.",
    },
    {
      q: "Is pickup free?",
      a: "Yes, doorstep pickup is completely free in serviceable locations.",
    },
    {
      q: "Do refurbished phones come with warranty?",
      a: "Yes, selected refurbished devices include warranty and quality checks.",
    },
    {
      q: "How long does payment take?",
      a: "Most payments are processed instantly or within a few hours after inspection.",
    },
    {
      q: "Do you also repair phones and laptops?",
      a: "Yes, we offer doorstep and service-center repair options depending on location.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-12 px-3 md:px-6 bg-gradient-to-b from-[#f8fbff] to-white">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            FAQ
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-2">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-500 mt-3">
            Everything you need to know about protzy.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((item, i) => {
            const active = open === i;

            return (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full px-5 md:px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-slate-900 pr-4">
                    {item.q}
                  </span>

                  {active ? (
                    <Minus className="h-5 w-5 text-blue-600 shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {active && (
                  <div className="px-5 md:px-6 pb-5 text-sm text-slate-600 leading-7">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}