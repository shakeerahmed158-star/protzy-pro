"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

export default function Blogs() {
  const blogs = [
    {
      title: "Samsung Galaxy S25: Full Specs, Features & Expected Highlights",
      desc: "Display upgrades, camera improvements, AI tools and everything buyers should know before launch.",
      image: "/blogs/b1.jpg",
      tag: "Smartphone News",
      date: "Updated 2026",
      read: "4 min read",
    },
    {
      title: "iPhone 16 Pro Max: Price, Camera Upgrades & New Features",
      desc: "A closer look at design changes, battery life, performance and premium features expected this year.",
      image: "/blogs/b2.jpg",
      tag: "Apple Update",
      date: "Trending Now",
      read: "5 min read",
    },
    {
      title: "OnePlus 13 Review Guide: Is It Worth Buying?",
      desc: "Performance, display, charging speed and value breakdown for users planning an upgrade.",
      image: "/blogs/b3.jpg",
      tag: "Buying Guide",
      date: "Expert Pick",
      read: "6 min read",
    },
  ];

  return (
    <section className="pt-6 md:pt-8 pb-14 px-4 md:px-6 bg-gradient-to-b from-white via-[#f8fbff] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-7">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-blue-600">
              Latest From Blog
            </p>

            <h2 className="mt-2 text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Smart Tech <span className="text-blue-600">Insights</span>
            </h2>

            <p className="mt-2 text-sm md:text-base text-slate-500">
              News, buying guides, launches & device tips.
            </p>
          </div>

          <Link
            href="/blogs"
            className="hidden md:flex items-center gap-2 h-11 px-5 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-200 hover:shadow-lg transition"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {blogs.map((blog, i) => (
            <Link
              key={i}
              href="/blogs"
              className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />

                <span className="absolute top-4 left-4 text-[11px] font-bold px-3 py-1 rounded-full bg-white/90 text-slate-900 backdrop-blur">
                  {blog.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-4 text-[12px] text-slate-500">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {blog.date}
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock3 className="h-3.5 w-3.5" />
                    {blog.read}
                  </div>
                </div>

                <h3 className="mt-3 text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition">
                  {blog.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {blog.desc}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Read Article
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-6 md:hidden">
          <Link
            href="/blogs"
            className="flex items-center justify-center gap-2 h-11 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}