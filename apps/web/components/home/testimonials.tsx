"use client";

import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      place: "Bangalore",
      text: "Sold my iPhone quickly and the whole experience felt smooth, secure and professional.",
      color: "from-blue-500 to-indigo-600",
      bg: "from-blue-50 to-indigo-50",
    },
    {
      name: "Neha Verma",
      place: "Whitefield",
      text: "Pickup was seamless and support team was very helpful throughout the process.",
      color: "from-emerald-500 to-teal-600",
      bg: "from-emerald-50 to-teal-50",
    },
    {
      name: "Amit Patel",
      place: "Indiranagar",
      text: "Bought a refurbished laptop and the condition exceeded expectations.",
      color: "from-violet-500 to-purple-600",
      bg: "from-violet-50 to-purple-50",
    },
    {
      name: "Sana Khan",
      place: "Hoodi",
      text: "Repair service was fast and convenient. Great communication and clean service.",
      color: "from-cyan-500 to-sky-500",
      bg: "from-cyan-50 to-sky-50",
    },
    {
      name: "Arjun Reddy",
      place: "Marathahalli",
      text: "Upgrading through exchange was simple and hassle-free. Highly recommended.",
      color: "from-amber-500 to-orange-500",
      bg: "from-amber-50 to-orange-50",
    },
  ];

  const [start, setStart] = useState(0);

  const next = () => setStart((prev) => (prev + 1) % reviews.length);
  const prev = () =>
    setStart((prev) => (prev - 1 + reviews.length) % reviews.length);

  const visible = [
    reviews[start],
    reviews[(start + 1) % reviews.length],
    reviews[(start + 2) % reviews.length],
  ];

  return (
   <section className="pt-0 pb-14 px-4 md:px-6 bg-gradient-to-b from-[#f8fbff] via-white to-[#f8fbff]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.25em] text-blue-600">
              Testimonials
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 tracking-tight">
              Loved by <span className="text-blue-600">Happy Customers</span>
            </h2>

            <p className="text-sm text-slate-500 mt-3">
              Real experiences from users who chose Goopsy
            </p>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              className="h-11 w-11 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:text-blue-600 transition flex items-center justify-center"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              onClick={next}
              className="h-11 w-11 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:text-blue-600 transition flex items-center justify-center"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {visible.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[28px] bg-white/90 backdrop-blur-xl border border-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] hover:shadow-[0_22px_45px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 p-6"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br ${item.bg}`}
              />

              {/* Top */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <div
                  className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${item.bg} flex items-center justify-center`}
                >
                  <Quote className="h-4 w-4 text-slate-500" />
                </div>
              </div>

              {/* User */}
              <div className="relative z-10 mt-5 flex items-center gap-3">
                <div
                  className={`h-11 w-11 rounded-full bg-gradient-to-r ${item.color} text-white font-bold flex items-center justify-center shadow-md`}
                >
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-black text-slate-900 text-sm">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {item.place}
                  </p>
                </div>
              </div>

              {/* Text */}
              <p className="relative z-10 mt-5 text-sm text-slate-600 leading-7 min-h-[110px]">
                {item.text}
              </p>

              {/* Bottom line */}
              <div
                className={`relative z-10 mt-4 h-[3px] w-10 rounded-full bg-gradient-to-r ${item.color} group-hover:w-20 transition-all duration-300`}
              />
            </div>
          ))}
        </div>

        {/* Mobile Arrows */}
        <div className="flex md:hidden justify-center gap-3 mt-6">
          <button
            onClick={prev}
            className="h-11 w-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            onClick={next}
            className="h-11 w-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}