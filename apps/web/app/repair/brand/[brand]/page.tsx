"use client";

import {
  useParams,
  useRouter,
} from "next/navigation";

import {
  ChevronRight,
  Smartphone,
} from "lucide-react";

const devices: Record<string, any[]> = {

  apple: [
    {
      id: "iphone-15",
      name: "iPhone 15",
      year: "2024",
      gradient: "from-zinc-900 to-zinc-700",
    },

    {
      id: "iphone-14",
      name: "iPhone 14",
      year: "2023",
      gradient: "from-blue-600 to-cyan-500",
    },

    {
      id: "iphone-13",
      name: "iPhone 13",
      year: "2022",
      gradient: "from-purple-600 to-pink-500",
    },
  ],

  samsung: [
    {
      id: "s24-ultra",
      name: "Samsung S24 Ultra",
      year: "2024",
      gradient: "from-green-600 to-emerald-500",
    },

    {
      id: "s23-ultra",
      name: "Samsung S23 Ultra",
      year: "2023",
      gradient: "from-cyan-600 to-blue-500",
    },
  ],

  oneplus: [
    {
      id: "oneplus-12",
      name: "OnePlus 12",
      year: "2024",
      gradient: "from-red-600 to-rose-500",
    },
  ],

  xiaomi: [
    {
      id: "xiaomi-14",
      name: "Xiaomi 14",
      year: "2024",
      gradient: "from-orange-500 to-yellow-400",
    },
  ],
};

export default function RepairBrandPage() {

  const router = useRouter();

  const params = useParams();

  const brand =
    String(params.brand || "")
      .toLowerCase();

  const products =
    devices[brand] || [];

  return (

    <div className="min-h-screen bg-[#f8fafc]">

      {/* HEADER */}

      <section className="px-6 md:px-10 pt-12 pb-10">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-3 text-sm text-zinc-500 mb-5">

            <button
              onClick={() =>
                router.push("/repair")
              }
              className="hover:text-zinc-900 transition-colors"
            >
              Repair
            </button>

            <ChevronRight className="h-4 w-4" />

            <span className="capitalize font-medium">

              {brand}

            </span>

          </div>

          <h1 className="text-5xl md:text-6xl font-black text-zinc-900 capitalize">

            {brand} Repairs

          </h1>

          <p className="text-zinc-500 mt-3 text-lg">

            Select your device model to continue.

          </p>

        </div>

      </section>

      {/* DEVICES */}

      <section className="px-6 md:px-10 pb-20">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {products.map((product) => (

              <button
                key={product.id}
                onClick={() =>
                  router.push(
                    `/repair/device/${product.id}`,
                  )
                }
                className="group relative overflow-hidden rounded-[34px] bg-white border border-zinc-200 shadow-lg hover:shadow-2xl transition-all duration-500 text-left"
              >

                {/* TOP */}

                <div
                  className={`relative h-56 overflow-hidden bg-gradient-to-br ${product.gradient}`}
                >

                  <div className="absolute inset-0 bg-black/10" />

                  <div className="absolute right-8 top-8 opacity-20">

                    <Smartphone className="h-32 w-32 text-white" />

                  </div>

                  <div className="absolute bottom-6 left-6">

                    <h2 className="text-4xl font-black text-white">

                      {product.name}

                    </h2>

                    <p className="text-white/80 mt-2">

                      {product.year} Series

                    </p>

                  </div>

                </div>

                {/* BODY */}

                <div className="p-6">

                  <div className="flex items-center justify-between">

                    <div>

                      <h3 className="text-2xl font-black text-zinc-900">

                        Repair Device

                      </h3>

                      <p className="text-zinc-500 mt-2">

                        Continue issue diagnosis

                      </p>

                    </div>

                    <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center group-hover:translate-x-1 transition-all">

                      <ChevronRight className="h-5 w-5 text-zinc-700" />

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