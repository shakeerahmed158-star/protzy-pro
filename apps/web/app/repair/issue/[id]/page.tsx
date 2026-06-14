"use client";

import {
  useParams,
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  ChevronLeft,
  CheckCircle2,
  Wrench,
  ShieldCheck,
  Truck,
  Clock3,
} from "lucide-react";

const issueMap: Record<string, any> = {

  "screen-damage": {
    title: "Screen Damage",
    desc: "Display replacement and glass repair",
    price: "Starts from ₹1499",
  },

  "battery-issue": {
    title: "Battery Issue",
    desc: "Battery draining or heating issue",
    price: "Starts from ₹999",
  },

  "camera-issue": {
    title: "Camera Problem",
    desc: "Front or rear camera repair",
    price: "Starts from ₹1299",
  },

  "charging-issue": {
    title: "Charging Problem",
    desc: "Charging port or connector issue",
    price: "Starts from ₹799",
  },

  "speaker-issue": {
    title: "Speaker / Mic",
    desc: "Audio and microphone repair",
    price: "Starts from ₹699",
  },

  diagnostics: {
    title: "General Diagnostics",
    desc: "Full device inspection and testing",
    price: "Inspection based pricing",
  },
};

export default function RepairIssuePage() {

  const params = useParams();

  const searchParams =
    useSearchParams();

  const router = useRouter();

  const deviceId =
    String(params.id || "");

  const issueId =
    String(
      searchParams.get("issue") || "",
    );

  const issue =
    issueMap[issueId];

  if (!issue) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">

        <div className="text-center">

          <h1 className="text-5xl font-black">
            Issue Not Found
          </h1>

          <p className="mt-4 text-zinc-500">
            Unable to load repair issue.
          </p>

        </div>

      </div>

    );
  }

  return (

    <div className="min-h-screen bg-[#f8fafc]">

      {/* TOP */}

      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-8">

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

        <div className="max-w-5xl mx-auto">

          {/* HERO */}

          <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white shadow-2xl relative overflow-hidden">

            <div className="absolute inset-0 bg-black/10" />

            <div className="relative z-10">

              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 font-semibold">

                <Wrench className="h-5 w-5" />

                Repair Diagnosis

              </div>

              <h1 className="mt-8 text-5xl font-black">

                {issue.title}

              </h1>

              <p className="mt-4 text-xl text-white/85 max-w-2xl">

                {issue.desc}

              </p>

              <div className="mt-6 inline-flex items-center rounded-full bg-white/20 border border-white/20 px-5 py-3 text-lg font-bold">

                {issue.price}

              </div>

            </div>

          </div>

          {/* TRUST */}

          <div className="grid md:grid-cols-3 gap-5 mt-10">

            <div className="bg-white rounded-3xl border border-zinc-200 p-6 shadow-sm">

              <ShieldCheck className="text-green-600 h-8 w-8" />

              <h3 className="mt-4 text-xl font-black text-zinc-900">

                Genuine Components

              </h3>

              <p className="mt-2 text-zinc-500">

                Quality verified replacement parts.

              </p>

            </div>

            <div className="bg-white rounded-3xl border border-zinc-200 p-6 shadow-sm">

              <Truck className="text-blue-600 h-8 w-8" />

              <h3 className="mt-4 text-xl font-black text-zinc-900">

                Pickup & Delivery

              </h3>

              <p className="mt-2 text-zinc-500">

                Doorstep repair logistics available.

              </p>

            </div>

            <div className="bg-white rounded-3xl border border-zinc-200 p-6 shadow-sm">

              <Clock3 className="text-orange-600 h-8 w-8" />

              <h3 className="mt-4 text-xl font-black text-zinc-900">

                Fast Turnaround

              </h3>

              <p className="mt-2 text-zinc-500">

                Same day repair possible for select issues.

              </p>

            </div>

          </div>

          {/* PROCESS */}

          <div className="mt-12 bg-white rounded-[36px] border border-zinc-200 shadow-lg p-8">

            <h2 className="text-3xl font-black text-zinc-900">

              Repair Process

            </h2>

            <div className="space-y-5 mt-8">

              <div className="flex items-start gap-4">

                <CheckCircle2 className="text-green-600 mt-1" />

                <p className="text-zinc-700 text-lg">

                  Repair request submitted to technician network.

                </p>

              </div>

              <div className="flex items-start gap-4">

                <CheckCircle2 className="text-green-600 mt-1" />

                <p className="text-zinc-700 text-lg">

                  Pickup scheduling confirmation via call or WhatsApp.

                </p>

              </div>

              <div className="flex items-start gap-4">

                <CheckCircle2 className="text-green-600 mt-1" />

                <p className="text-zinc-700 text-lg">

                  Device diagnosis and repair estimation process.

                </p>

              </div>

              <div className="flex items-start gap-4">

                <CheckCircle2 className="text-green-600 mt-1" />

                <p className="text-zinc-700 text-lg">

                  Secure delivery after successful repair completion.

                </p>

              </div>

            </div>

          </div>

          {/* CTA */}

          <button
            onClick={() =>
              router.push(
                `/repair/checkout?id=${deviceId}&issue=${issueId}`,
              )
            }
            className="w-full h-16 rounded-3xl bg-zinc-900 hover:bg-black text-white text-xl font-black mt-10 transition-all"
          >

            Continue Repair Booking

          </button>

        </div>

      </section>

    </div>

  );
}