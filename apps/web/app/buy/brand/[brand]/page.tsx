"use client";

import { useMemo } from "react";

import {
  useParams,
  useRouter,
} from "next/navigation";

import {
  ChevronRight,
  ShieldCheck,
  BadgeCheck,
  Truck,
} from "lucide-react";

const devices: Record<string, any[]> = {

  apple: [
    {
      id: "iphone-15",
      name: "iPhone 15",
      price: 72999,
      oldPrice: 79999,
      storage: "128GB",
      warranty: "1 Year",
      badge: "Best Seller",
      color: "from-zinc-900 to-zinc-700",
    },

    {
      id: "iphone-15-plus",
      name: "iPhone 15 Plus",
      price: 82999,
      oldPrice: 89999,
      storage: "256GB",
      warranty: "1 Year",
      badge: "Premium",
      color: "from-blue-600 to-cyan-500",
    },

    {
      id: "iphone-15-pro",
      name: "iPhone 15 Pro",
      price: 119999,
      oldPrice: 129999,
      storage: "256GB",
      warranty: "1 Year",
      badge: "Flagship",
      color: "from-purple-600 to-pink-500",
    },
  ],

  samsung: [
    {
      id: "s24-ultra",
      name: "Samsung S24 Ultra",
      price: 124999,
      oldPrice: 134999,
      storage: "256GB",
      warranty: "1 Year",
      badge: "Ultra",
      color: "from-green-600 to-emerald-400",
    },
  ],

  oneplus: [
    {
      id: "oneplus-12",
      name: "OnePlus 12",
      price: 64999,
      oldPrice: 69999,
      storage: "256GB",
      warranty: "1 Year",
      badge: "Fastest",
      color: "from-red-600 to-rose-500",
    },
  ],

  xiaomi: [
    {
      id: "xiaomi-14",
      name: "Xiaomi 14",
      price: 54999,
      oldPrice: 59999,
      storage: "256GB",
      warranty: "1 Year",
      badge: "Trending",
      color: "from-orange-500 to-yellow-400",
    },
  ],

  pixel: [
    {
      id: "pixel-9-pro",
      name: "Pixel 9 Pro",
      price: 94999,
      oldPrice: 99999,
      storage: "256GB",
      warranty: "1 Year",
      badge: "AI Camera",
      color: "from-cyan-600 to-sky-400",
    },
  ],
};

export default function BrandPage() {

  const router = useRouter();

  const params = useParams();

  const brand =
    String(params.brand || "")
      .toLowerCase();

  const products = useMemo(() => {
    return devices[brand] || [];
  }, [brand]);

  return (

    <div className="min-h-screen bg-[#f8fafc]">

      {/* HEADER */}

      <section className="px-6 md:px-10 pt-12 pb-10">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-3 text-sm text-zinc-500 mb-5">

            <button
              onClick={() => router.push("/buy")}
              className="hover:text-zinc-900 transition-colors"
            >
              Buy
            </button>

            <ChevronRight className="h-4 w-4" />

            <span className="capitalize font-medium">
              {brand}
            </span>

          </div>

          <h1 className="text-5xl md:text-6xl font-black text-zinc-900 capitalize">

            {brand} Smartphones

          </h1>

          <p className="text-zinc-500 mt-3 text-lg">

            Explore latest premium smartphones with official warranty.

          </p>

        </div>

      </section>

      {/* PRODUCTS */}

      <section className="px-6 md:px-10 pb-20">

        <div className="max-w-7xl mx-auto">

          {products.length === 0 ? (

            <div className="bg-white border border-zinc-200 rounded-[32px] p-16 text-center shadow-sm">

              <h2 className="text-3xl font-black text-zinc-900">
                No Devices Available
              </h2>

              <p className="text-zinc-500 mt-3">
                Devices will be added soon for this brand.
              </p>

            </div>

          ) : (

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

              {products.map((product) => (

                <div
                  key={product.id}
                  className="group relative overflow-hidden rounded-[34px] bg-white border border-zinc-200 shadow-lg hover:shadow-2xl transition-all duration-500"
                >

                  {/* TOP */}

                  <div
                    className={`relative h-56 overflow-hidden bg-gradient-to-br ${product.color}`}
                  >

                    <div className="absolute inset-0 bg-black/10" />

                    <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white text-sm font-semibold">

                      {product.badge}

                    </div>

                    <div className="absolute bottom-6 left-6">

                      <h2 className="text-4xl font-black text-white">

                        {product.name}

                      </h2>

                      <p className="text-white/80 mt-2">

                        Brand New Sealed Pack

                      </p>

                    </div>

                  </div>

                  {/* BODY */}

                  <div className="p-6">

                    {/* FEATURES */}

                    <div className="grid grid-cols-3 gap-3 mb-6">

                      <div className="bg-zinc-50 rounded-2xl p-3 text-center">

                        <Truck className="mx-auto text-blue-600 h-5 w-5" />

                        <p className="text-xs mt-2 text-zinc-500">

                          Delivery

                        </p>

                        <p className="font-bold text-sm">

                          Fast

                        </p>

                      </div>

                      <div className="bg-zinc-50 rounded-2xl p-3 text-center">

                        <ShieldCheck className="mx-auto text-green-600 h-5 w-5" />

                        <p className="text-xs mt-2 text-zinc-500">

                          Warranty

                        </p>

                        <p className="font-bold text-sm">

                          {product.warranty}

                        </p>

                      </div>

                      <div className="bg-zinc-50 rounded-2xl p-3 text-center">

                        <BadgeCheck className="mx-auto text-purple-600 h-5 w-5" />

                        <p className="text-xs mt-2 text-zinc-500">

                          Storage

                        </p>

                        <p className="font-bold text-sm">

                          {product.storage}

                        </p>

                      </div>

                    </div>

                    {/* PRICE */}

                    <div className="flex items-end justify-between">

                      <div>

                        <p className="text-sm text-zinc-500 line-through">

                          ₹{product.oldPrice.toLocaleString()}

                        </p>

                        <h3 className="text-4xl font-black text-zinc-900">

                          ₹{product.price.toLocaleString()}

                        </h3>

                        <p className="text-green-600 font-semibold mt-1">

                          Save ₹
                          {(
                            product.oldPrice -
                            product.price
                          ).toLocaleString()}

                        </p>

                      </div>

                      <button
                        onClick={() =>
                          router.push(
                            `/buy/device/${product.id}`,
                          )
                        }
                        className="h-14 px-6 rounded-2xl bg-zinc-900 hover:bg-black text-white font-bold transition-all"
                      >

                        View

                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </section>

    </div>

  );
}