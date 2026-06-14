"use client";

import {
  useParams,
  useRouter,
} from "next/navigation";

import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  ChevronLeft,
  PackageCheck,
  Smartphone,
} from "lucide-react";

const products: Record<string, any> = {

  "iphone-15": {
    id: "iphone-15",
    name: "iPhone 15",
    price: 72999,
    oldPrice: 79999,
    storage: "128GB",
    color: "Black",
    warranty: "1 Year Apple Warranty",
    badge: "Best Seller",
    gradient: "from-zinc-900 to-zinc-700",
  },

  "iphone-15-plus": {
    id: "iphone-15-plus",
    name: "iPhone 15 Plus",
    price: 82999,
    oldPrice: 89999,
    storage: "256GB",
    color: "Blue",
    warranty: "1 Year Apple Warranty",
    badge: "Premium",
    gradient: "from-blue-600 to-cyan-500",
  },

  "iphone-15-pro": {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    price: 119999,
    oldPrice: 129999,
    storage: "256GB",
    color: "Titanium",
    warranty: "1 Year Apple Warranty",
    badge: "Flagship",
    gradient: "from-purple-600 to-pink-500",
  },

  "s24-ultra": {
    id: "s24-ultra",
    name: "Samsung S24 Ultra",
    price: 124999,
    oldPrice: 134999,
    storage: "256GB",
    color: "Titanium Gray",
    warranty: "1 Year Samsung Warranty",
    badge: "Ultra",
    gradient: "from-green-600 to-emerald-500",
  },

  "oneplus-12": {
    id: "oneplus-12",
    name: "OnePlus 12",
    price: 64999,
    oldPrice: 69999,
    storage: "256GB",
    color: "Silky Black",
    warranty: "1 Year OnePlus Warranty",
    badge: "Fastest",
    gradient: "from-red-600 to-rose-500",
  },

  "pixel-9-pro": {
    id: "pixel-9-pro",
    name: "Pixel 9 Pro",
    price: 94999,
    oldPrice: 99999,
    storage: "256GB",
    color: "Obsidian",
    warranty: "1 Year Google Warranty",
    badge: "AI Camera",
    gradient: "from-cyan-600 to-sky-500",
  },
};

export default function DevicePage() {

  const params = useParams();

  const router = useRouter();

  const id = String(params.id || "");

  const product = products[id];

  if (!product) {

    return (

      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">

        <div className="bg-white rounded-[32px] border border-zinc-200 shadow-xl p-12 text-center max-w-xl w-full">

          <h1 className="text-4xl font-black text-zinc-900">
            Product Not Found
          </h1>

          <p className="text-zinc-500 mt-4">
            This device is currently unavailable.
          </p>

          <button
            onClick={() => router.push("/buy")}
            className="mt-8 h-14 px-8 rounded-2xl bg-zinc-900 text-white font-bold"
          >
            Back To Store
          </button>

        </div>

      </div>

    );
  }

  return (

    <div className="min-h-screen bg-[#f8fafc]">

      {/* TOP */}

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8">

        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-zinc-600 hover:text-black transition-all"
        >

          <ChevronLeft className="h-5 w-5" />

          Back

        </button>

      </div>

      {/* MAIN */}

      <section className="px-6 md:px-10 py-10">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT */}

          <div
            className={`rounded-[40px] bg-gradient-to-br ${product.gradient} h-[620px] relative overflow-hidden shadow-2xl`}
          >

            <div className="absolute inset-0 bg-black/10" />

            {/* BADGE */}

            <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white font-semibold">

              {product.badge}

            </div>

            {/* PHONE ICON */}

            <div className="absolute right-10 top-10 opacity-20">

              <Smartphone className="h-40 w-40 text-white" />

            </div>

            {/* CONTENT */}

            <div className="absolute bottom-10 left-10">

              <h1 className="text-6xl font-black text-white leading-tight">

                {product.name}

              </h1>

              <p className="text-zinc-100 text-xl mt-3">

                Brand New Sealed Pack

              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-white rounded-[40px] border border-zinc-200 p-8 shadow-xl">

            {/* PRICE */}

            <div className="flex items-center justify-between">

              <div>

                <p className="text-zinc-400 line-through text-lg">

                  ₹{product.oldPrice.toLocaleString()}

                </p>

                <h2 className="text-6xl font-black text-zinc-900">

                  ₹{product.price.toLocaleString()}

                </h2>

                <p className="text-green-600 font-bold mt-2">

                  Save ₹
                  {(
                    product.oldPrice -
                    product.price
                  ).toLocaleString()}

                </p>

              </div>

              <div className="bg-green-100 text-green-700 px-5 py-3 rounded-2xl font-bold">

                In Stock

              </div>

            </div>

            {/* SPECS */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-zinc-50 rounded-3xl p-5">

                <p className="text-zinc-500 text-sm">
                  Storage
                </p>

                <h3 className="text-2xl font-black mt-2 text-zinc-900">

                  {product.storage}

                </h3>

              </div>

              <div className="bg-zinc-50 rounded-3xl p-5">

                <p className="text-zinc-500 text-sm">
                  Color
                </p>

                <h3 className="text-2xl font-black mt-2 text-zinc-900">

                  {product.color}

                </h3>

              </div>

              <div className="bg-zinc-50 rounded-3xl p-5">

                <p className="text-zinc-500 text-sm">
                  Warranty
                </p>

                <div className="flex items-center gap-2 mt-2">

                  <ShieldCheck className="text-green-600" />

                  <h3 className="text-lg font-black text-zinc-900">

                    Official

                  </h3>

                </div>

              </div>

              <div className="bg-zinc-50 rounded-3xl p-5">

                <p className="text-zinc-500 text-sm">
                  Delivery
                </p>

                <div className="flex items-center gap-2 mt-2">

                  <Truck className="text-blue-600" />

                  <h3 className="text-lg font-black text-zinc-900">

                    Fast

                  </h3>

                </div>

              </div>

            </div>

            {/* FEATURES */}

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">

                <CheckCircle2 className="text-green-600 h-5 w-5" />

                <p className="text-zinc-700">

                  100% Genuine Brand New Device

                </p>

              </div>

              <div className="flex items-center gap-3">

                <PackageCheck className="text-green-600 h-5 w-5" />

                <p className="text-zinc-700">

                  Original Box With Accessories

                </p>

              </div>

              <div className="flex items-center gap-3">

                <Truck className="text-blue-600 h-5 w-5" />

                <p className="text-zinc-700">

                  Fast Delivery Across Bangalore

                </p>

              </div>

            </div>

            {/* WARRANTY BOX */}

            <div className="mt-10 bg-zinc-50 border border-zinc-200 rounded-3xl p-5">

              <h3 className="text-xl font-black text-zinc-900">

                Included Warranty

              </h3>

              <p className="text-zinc-600 mt-2">

                {product.warranty}

              </p>

            </div>

            {/* CTA */}

            <button
              onClick={() =>
                router.push(
                  `/buy/checkout?id=${product.id}`,
                )
              }
              className="w-full h-16 rounded-3xl bg-zinc-900 hover:bg-black text-white text-xl font-black mt-10 transition-all"
            >

              Buy Now

            </button>

          </div>

        </div>

      </section>

    </div>

  );
}