"use client";

import { useRouter } from "next/navigation";

import {
  Smartphone,
  ShieldCheck,
  BadgeCheck,
  Truck,
  ChevronRight,
  Star,
} from "lucide-react";

const brands = [
  {
    name: "Apple",
    slug: "apple",
    gradient: "from-zinc-900 to-zinc-700",
  },
  {
    name: "Samsung",
    slug: "samsung",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    name: "OnePlus",
    slug: "oneplus",
    gradient: "from-red-600 to-rose-500",
  },
  {
    name: "Xiaomi",
    slug: "xiaomi",
    gradient: "from-orange-500 to-orange-400",
  },
  {
    name: "Google Pixel",
    slug: "pixel",
    gradient: "from-green-500 to-emerald-400",
  },
];

export default function BuyPage() {

  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f8fafc] overflow-hidden">

      {/* HERO SECTION */}

      <section className="relative px-6 md:px-10 pt-14 pb-16">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto">

          <div className="text-center">

            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 shadow-sm rounded-full px-4 py-2 mb-6">

              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />

              <span className="text-sm font-semibold text-zinc-700">

                Premium Smartphone Marketplace

              </span>

            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 leading-tight">

              Buy Premium

              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">

                Smartphones

              </span>

            </h1>

            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-zinc-600 leading-relaxed">

              Brand new sealed mobiles with official warranty,
              trusted dealer network and fast Bangalore delivery.

            </p>

            {/* TRUST BADGES */}

            <div className="flex flex-wrap justify-center gap-4 mt-10">

              <div className="bg-white border border-zinc-200 rounded-2xl px-5 py-4 shadow-sm">

                <div className="flex items-center gap-3">

                  <ShieldCheck className="text-green-600" />

                  <div className="text-left">

                    <p className="font-bold text-zinc-900">

                      Official Warranty

                    </p>

                    <p className="text-sm text-zinc-500">

                      Genuine brand protection

                    </p>

                  </div>

                </div>

              </div>

              <div className="bg-white border border-zinc-200 rounded-2xl px-5 py-4 shadow-sm">

                <div className="flex items-center gap-3">

                  <Truck className="text-blue-600" />

                  <div className="text-left">

                    <p className="font-bold text-zinc-900">

                      Fast Delivery

                    </p>

                    <p className="text-sm text-zinc-500">

                      Same day delivery support

                    </p>

                  </div>

                </div>

              </div>

              <div className="bg-white border border-zinc-200 rounded-2xl px-5 py-4 shadow-sm">

                <div className="flex items-center gap-3">

                  <BadgeCheck className="text-purple-600" />

                  <div className="text-left">

                    <p className="font-bold text-zinc-900">

                      Trusted Dealers

                    </p>

                    <p className="text-sm text-zinc-500">

                      Verified seller network

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BRANDS */}

      <section className="px-6 md:px-10 pb-20">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-8">

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-zinc-900">

                Shop By Brand

              </h2>

              <p className="text-zinc-500 mt-2">

                Explore premium smartphone collections.

              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {brands.map((brand) => (

              <button
                key={brand.slug}
                onClick={() =>
                  router.push(
                    `/buy/brand/${brand.slug}`,
                  )
                }
                className="group relative overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-white to-zinc-200 shadow-lg hover:shadow-2xl transition-all duration-500"
              >

                <div className="relative bg-white rounded-[32px] p-8 h-full">

                  <div
                    className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${brand.gradient}`}
                  />

                  <div className="relative z-10">

                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.gradient} flex items-center justify-center shadow-lg`}
                    >

                      <Smartphone className="text-white h-8 w-8" />

                    </div>

                    <div className="mt-8">

                      <h3 className="text-3xl font-black text-zinc-900">

                        {brand.name}

                      </h3>

                      <p className="mt-3 text-zinc-500 leading-relaxed">

                        Explore latest premium smartphones
                        with official warranty and dealer assurance.

                      </p>

                    </div>

                    <div className="mt-8 flex items-center justify-between">

                      <div className="text-sm font-semibold text-zinc-500">

                        Explore Devices

                      </div>

                      <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center group-hover:translate-x-1 transition-all">

                        <ChevronRight className="h-5 w-5 text-zinc-700" />

                      </div>

                    </div>

                  </div>

                </div>

              </button>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}