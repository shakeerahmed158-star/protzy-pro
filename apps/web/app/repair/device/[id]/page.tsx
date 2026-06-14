"use client";

import {
  useParams,
  useRouter,
} from "next/navigation";

import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Wrench,
  ShieldCheck,
} from "lucide-react";

const devices: Record<string, any> = {

  "iphone-15": {
    name: "iPhone 15",
    gradient: "from-zinc-900 to-zinc-700",
  },

  "iphone-14": {
    name: "iPhone 14",
    gradient: "from-blue-600 to-cyan-500",
  },

  "iphone-13": {
    name: "iPhone 13",
    gradient: "from-purple-600 to-pink-500",
  },

  "s24-ultra": {
    name: "Samsung S24 Ultra",
    gradient: "from-green-600 to-emerald-500",
  },

  "s23-ultra": {
    name: "Samsung S23 Ultra",
    gradient: "from-cyan-600 to-blue-500",
  },

  "oneplus-12": {
    name: "OnePlus 12",
    gradient: "from-red-600 to-rose-500",
  },

  "xiaomi-14": {
    name: "Xiaomi 14",
    gradient: "from-orange-500 to-yellow-400",
  },
};

const issues = [

  {
    id: "screen-damage",
    title: "Screen Damage",
    desc: "Broken or cracked display replacement",
  },

  {
    id: "battery-issue",
    title: "Battery Issue",
    desc: "Battery draining or heating problems",
  },

  {
    id: "camera-issue",
    title: "Camera Problem",
    desc: "Front or rear camera malfunction",
  },

  {
    id: "charging-issue",
    title: "Charging Problem",
    desc: "Charging port or cable issue",
  },

  {
    id: "speaker-issue",
    title: "Speaker / Mic",
    desc: "Audio output or microphone issue",
  },

  {
    id: "diagnostics",
    title: "General Diagnostics",
    desc: "Complete device inspection",
  },
];

export default function RepairDevicePage() {

  const params = useParams();

  const router = useRouter();

  const id =
    String(params.id || "");

  const device =
    devices[id];

  if (!device) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">

        <div className="text-center">

          <h1 className="text-5xl font-black">
            Device Not Found
          </h1>

          <p className="mt-4 text-zinc-500">
            Unable to load repair device.
          </p>

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

        <div className="max-w-7xl mx-auto">

          {/* HERO */}

          <div
            className={`rounded-[40px] bg-gradient-to-br ${device.gradient} relative overflow-hidden shadow-2xl p-10`}
          >

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute right-10 top-10 opacity-20">

              <Smartphone className="h-52 w-52 text-white" />

            </div>

            <div className="relative z-10">

              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 text-white font-semibold">

                <Wrench className="h-5 w-5" />

                Repair Assistance

              </div>

              <h1 className="mt-8 text-6xl font-black text-white">

                {device.name}

              </h1>

              <p className="mt-4 text-xl text-white/80 max-w-2xl">

                Select the issue you are facing to continue repair diagnosis.

              </p>

            </div>

          </div>

          {/* TRUST */}

          <div className="grid md:grid-cols-3 gap-5 mt-10">

            <div className="bg-white rounded-3xl border border-zinc-200 p-6 shadow-sm">

              <ShieldCheck className="text-green-600 h-8 w-8" />

              <h3 className="mt-4 text-xl font-black text-zinc-900">

                Genuine Parts

              </h3>

              <p className="mt-2 text-zinc-500">

                Verified replacement components.

              </p>

            </div>

            <div className="bg-white rounded-3xl border border-zinc-200 p-6 shadow-sm">

              <Wrench className="text-blue-600 h-8 w-8" />

              <h3 className="mt-4 text-xl font-black text-zinc-900">

                Expert Technicians

              </h3>

              <p className="mt-2 text-zinc-500">

                Trained repair professionals.

              </p>

            </div>

            <div className="bg-white rounded-3xl border border-zinc-200 p-6 shadow-sm">

              <Smartphone className="text-purple-600 h-8 w-8" />

              <h3 className="mt-4 text-xl font-black text-zinc-900">

                Device Safety

              </h3>

              <p className="mt-2 text-zinc-500">

                Secure repair handling process.

              </p>

            </div>

          </div>

          {/* ISSUES */}

          <div className="mt-14">

            <h2 className="text-4xl font-black text-zinc-900">

              Select Issue

            </h2>

            <p className="text-zinc-500 mt-3">

              Choose the issue you are facing.

            </p>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

              {issues.map((issue) => (

                <button
                  key={issue.id}
                  onClick={() =>
                    router.push(
                      `/repair/issue/${id}?issue=${issue.id}`,
                    )
                  }
                  className="group bg-white rounded-[32px] border border-zinc-200 p-6 shadow-lg hover:shadow-2xl transition-all text-left"
                >

                  <div className="flex items-center justify-between">

                    <div className="h-14 w-14 rounded-2xl bg-zinc-100 flex items-center justify-center">

                      <Wrench className="text-zinc-700 h-7 w-7" />

                    </div>

                    <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center group-hover:translate-x-1 transition-all">

                      <ChevronRight className="h-5 w-5 text-zinc-700" />

                    </div>

                  </div>

                  <h3 className="mt-6 text-2xl font-black text-zinc-900">

                    {issue.title}

                  </h3>

                  <p className="mt-3 text-zinc-500 leading-relaxed">

                    {issue.desc}

                  </p>

                </button>

              ))}

            </div>

          </div>

        </div>

      </section>

    </div>

  );
}