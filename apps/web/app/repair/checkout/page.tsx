"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import { useState } from "react";

import {
  ShieldCheck,
  MapPin,
  Phone,
  User,
  Truck,
  Wrench,
} from "lucide-react";

import {
  createRepairLead,
} from "../../../lib/api/repair";

export default function RepairCheckoutPage() {

  const router = useRouter();

  const params =
    useSearchParams();

  const deviceId =
    params.get("id");

  const issue =
    params.get("issue");

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] =
    useState({
      customerName: "",
      mobileNumber: "",
      area: "",
      address: "",
    });

  //////////////////////////////////////////////////////
  // SUBMIT REPAIR
  //////////////////////////////////////////////////////

  const handleRepairBooking =
    async () => {

      //////////////////////////////////////////////////////
      // VALIDATION
      //////////////////////////////////////////////////////

      if (
        !form.customerName ||
        !form.mobileNumber ||
        !form.area ||
        !form.address
      ) {
        return alert(
          "Please fill all fields",
        );
      }

      if (
        form.mobileNumber.length < 10
      ) {
        return alert(
          "Enter valid mobile number",
        );
      }

      if (!deviceId || !issue) {
        return alert(
          "Repair data missing",
        );
      }

      try {

        setLoading(true);

        //////////////////////////////////////////////////////
        // API CALL
        //////////////////////////////////////////////////////

        await createRepairLead({

          deviceId,

          issue,

          customerName:
            form.customerName,

          mobileNumber:
            form.mobileNumber,

          area:
            form.area,

          address:
            form.address,
        });

        //////////////////////////////////////////////////////
        // SUCCESS
        //////////////////////////////////////////////////////

        router.push(
          "/repair/success",
        );

      } catch (err: any) {

        console.error(err);

        alert(
          err?.response?.data
            ?.message ||
            "Repair booking failed",
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="min-h-screen bg-[#f8fafc] px-5 py-10">

      <div className="max-w-3xl mx-auto">

        {/* HERO */}

        <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white shadow-2xl">

          <h1 className="text-5xl font-black">

            Repair Booking

          </h1>

          <p className="mt-3 text-white/80 text-lg">

            Schedule your smartphone repair service.

          </p>

          <div className="mt-6 inline-flex items-center gap-2 bg-white/15 border border-white/20 backdrop-blur-xl px-5 py-3 rounded-full">

            <Wrench className="h-5 w-5" />

            <span className="font-semibold">

              Smart Repair Network Enabled

            </span>

          </div>

        </div>

        {/* FORM */}

        <div className="bg-white rounded-[40px] border border-zinc-200 shadow-xl p-8 mt-8">

          {/* TRUST */}

          <div className="grid md:grid-cols-3 gap-4 mb-8">

            <div className="border border-zinc-200 rounded-3xl p-5 bg-white">

              <Truck className="text-blue-600 mb-3" />

              <p className="font-semibold text-zinc-800">

                Pickup & Delivery

              </p>

            </div>

            <div className="border border-zinc-200 rounded-3xl p-5 bg-white">

              <ShieldCheck className="text-green-600 mb-3" />

              <p className="font-semibold text-zinc-800">

                Genuine Parts

              </p>

            </div>

            <div className="border border-zinc-200 rounded-3xl p-5 bg-white">

              <Wrench className="text-purple-600 mb-3" />

              <p className="font-semibold text-zinc-800">

                Expert Technicians

              </p>

            </div>

          </div>

          {/* INPUTS */}

          <div className="space-y-5">

            {/* NAME */}

            <div>

              <label className="text-sm font-bold text-zinc-700">

                Full Name

              </label>

              <div className="mt-2 relative">

                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 h-5 w-5" />

                <input
                  value={form.customerName}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      customerName:
                        e.target.value,
                    })
                  }
                  placeholder="Enter your full name"
                  className="w-full h-16 rounded-3xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 pl-14 pr-5 outline-none focus:border-blue-500 text-lg"
                />

              </div>

            </div>

            {/* PHONE */}

            <div>

              <label className="text-sm font-bold text-zinc-700">

                Mobile Number

              </label>

              <div className="mt-2 relative">

                <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 h-5 w-5" />

                <input
                  value={form.mobileNumber}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      mobileNumber:
                        e.target.value,
                    })
                  }
                  placeholder="Enter mobile number"
                  className="w-full h-16 rounded-3xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 pl-14 pr-5 outline-none focus:border-blue-500 text-lg"
                />

              </div>

            </div>

            {/* AREA */}

            <div>

              <label className="text-sm font-bold text-zinc-700">

                Area

              </label>

              <div className="mt-2 relative">

                <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 h-5 w-5" />

                <input
                  value={form.area}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      area:
                        e.target.value,
                    })
                  }
                  placeholder="Whitefield, HSR, Indiranagar..."
                  className="w-full h-16 rounded-3xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 pl-14 pr-5 outline-none focus:border-blue-500 text-lg"
                />

              </div>

            </div>

            {/* ADDRESS */}

            <div>

              <label className="text-sm font-bold text-zinc-700">

                Pickup Address

              </label>

              <textarea
                value={form.address}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address:
                      e.target.value,
                  })
                }
                placeholder="Flat / House / Landmark"
                className="w-full h-36 rounded-3xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 p-5 outline-none focus:border-blue-500 text-lg mt-2 resize-none"
              />

            </div>

          </div>

          {/* CTA */}

          <button
            onClick={handleRepairBooking}
            disabled={loading}
            className="w-full h-16 rounded-3xl bg-zinc-900 hover:bg-black text-white text-xl font-black mt-8 transition-all disabled:opacity-50"
          >

            {loading
              ? "Booking Repair..."
              : "Confirm Repair Booking"}

          </button>

        </div>

      </div>

    </div>

  );
}