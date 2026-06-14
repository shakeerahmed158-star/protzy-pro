"use client";

import { useState } from "react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import { motion } from "framer-motion";

import {
  Smartphone,
  MapPin,
  User,
  Phone,
  ShieldCheck,
  Truck,
  Wallet,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const API_URL =
  "http://192.168.29.244:3000";

export default function PickupPage() {

  const router = useRouter();

  const params =
    useSearchParams();

  //////////////////////////////////////////////////////
  // URL DATA
  //////////////////////////////////////////////////////

  const brand =
    params.get("brand") || "";

  const device =
    params.get("device") || "";

  const ram =
    params.get("ram") || "";

  const storage =
    params.get("storage") || "";

  const price = Number(
    params.get("price") || "0"
  );

  const answersString =
    params.get("answers") || "{}";

  let parsedAnswers: any = {};

  try {

    parsedAnswers = JSON.parse(
      decodeURIComponent(
        answersString
      )
    );

  } catch {

    parsedAnswers = {};
  }

  //////////////////////////////////////////////////////
  // FORM
  //////////////////////////////////////////////////////

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [city, setCity] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  //////////////////////////////////////////////////////
  // SUBMIT
  //////////////////////////////////////////////////////

  const handlePickup =
    async () => {

      if (
        !name ||
        !phone ||
        !city ||
        !address
      ) {
        alert(
          "Please fill all details"
        );

        return;
      }

      if (phone.length !== 10) {

        alert(
          "Enter valid phone number"
        );

        return;
      }

      try {

        setLoading(true);

        const payload = {
          brand,

          model: device,

          variant: ram,

          storage,

          city,

          area: address,

          condition: "GOOD",
        };

        console.log(
          "🚀 LEAD PAYLOAD",
          payload
        );

        const res =
          await fetch(
            `${API_URL}/api/lead/create`,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify(
                payload
              ),
            }
          );

        console.log(
          "STATUS 👉",
          res.status
        );

        const text =
          await res.text();

        console.log(
          "RAW RESPONSE 👉",
          text
        );

        let data: any = {};

        try {

          data = JSON.parse(text);

        } catch {

          data = {
            message: text,
          };
        }

        console.log(
          "✅ LEAD RESPONSE",
          data
        );

        if (res.ok) {

          router.push(
            "/sell-phone/success"
          );

        } else {

          alert(
            data?.message ||
              "Lead creation failed"
          );
        }

      } catch (err: any) {

        console.error(
          "PICKUP ERROR 👉",
          err
        );

        alert(
          err?.message ||
            "Lead creation failed"
        );

      } finally {

        setLoading(false);
      }
    };

  //////////////////////////////////////////////////////
  // UI
  //////////////////////////////////////////////////////

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f8ff]">

      {/* BACKGROUND */}

      <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-blue-400/20 blur-3xl" />

      <div className="absolute right-[-120px] top-40 h-[320px] w-[320px] rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="absolute bottom-[-100px] left-[35%] h-[280px] w-[280px] rounded-full bg-violet-300/20 blur-3xl" />

      <div className="relative z-10 px-4 py-10">

        <div className="mx-auto max-w-4xl">

          {/* HERO */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mb-8 text-center"
          >

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 shadow-lg">

              <Sparkles className="h-4 w-4 text-blue-600" />

              <span className="text-sm font-semibold text-blue-700">
                Smart Pickup Scheduling
              </span>

            </div>

            <h1 className="text-[42px] font-black tracking-[-2px] text-black md:text-[72px]">

              Schedule Your

              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent">

                Free Pickup

              </span>

            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">

              Secure doorstep pickup with
              instant verification and fast
              payout process.

            </p>

          </motion.div>

          {/* MAIN CARD */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              overflow-hidden
              rounded-[42px]
              border
              border-white/70
              bg-white/80
              shadow-[0_25px_80px_rgba(15,23,42,0.08)]
              backdrop-blur-3xl
            "
          >

            {/* HEADER */}

            <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 p-8 text-white md:p-10">

              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                <div>

                  <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                    Selected Device
                  </p>

                  <h2 className="mt-3 text-4xl font-black">
                    {device}
                  </h2>

                  <p className="mt-3 text-white/80">
                    {brand} • {ram} • {storage}
                  </p>

                </div>

                <div className="rounded-[30px] bg-white/15 px-7 py-6 backdrop-blur-xl">

                  <p className="text-sm text-white/70">
                    Final Exchange Value
                  </p>

                  <h3 className="mt-2 text-5xl font-black">
                    ₹
                    {price.toLocaleString()}
                  </h3>

                </div>

              </div>

            </div>

            {/* CONTENT */}

            <div className="p-6 md:p-8">

              {/* BENEFITS */}

              <div className="grid gap-5 md:grid-cols-3">

                <BenefitCard
                  icon={
                    <Truck className="h-7 w-7 text-blue-600" />
                  }
                  title="Free Pickup"
                  desc="Doorstep device collection available."
                />

                <BenefitCard
                  icon={
                    <ShieldCheck className="h-7 w-7 text-emerald-600" />
                  }
                  title="Secure Verification"
                  desc="Transparent quality inspection process."
                />

                <BenefitCard
                  icon={
                    <Wallet className="h-7 w-7 text-violet-600" />
                  }
                  title="Instant Payment"
                  desc="Get paid immediately after verification."
                />

              </div>

              {/* FORM */}

              <div className="mt-10 space-y-6">

                {/* NAME */}

                <InputBlock
                  label="Full Name"
                  icon={
                    <User className="h-5 w-5 text-blue-600" />
                  }
                >

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) =>
                      setName(
                        e.target.value
                      )
                    }
                    className="
                      h-16
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      pl-14
                      pr-5
                      text-black
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-500/20
                    "
                  />

                </InputBlock>

                {/* PHONE */}

                <InputBlock
                  label="Mobile Number"
                  icon={
                    <Phone className="h-5 w-5 text-blue-600" />
                  }
                >

                  <input
                    type="tel"
                    placeholder="Enter 10 digit mobile number"
                    value={phone}
                    maxLength={10}
                    onChange={(e) =>
                      setPhone(
                        e.target.value.replace(
                          /\D/g,
                          ""
                        )
                      )
                    }
                    className="
                      h-16
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      pl-14
                      pr-5
                      text-black
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-500/20
                    "
                  />

                </InputBlock>

                {/* CITY */}

                <InputBlock
                  label="Pickup City"
                  icon={
                    <MapPin className="h-5 w-5 text-blue-600" />
                  }
                >

                  <select
                    value={city}
                    onChange={(e) =>
                      setCity(
                        e.target.value
                      )
                    }
                    className="
                      h-16
                      w-full
                      appearance-none
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      pl-14
                      pr-5
                      text-black
                      outline-none
                      transition-all
                      duration-300
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-500/20
                    "
                  >

                    <option value="">
                      Select City
                    </option>

                    <option value="Bangalore">
                      Bangalore
                    </option>

                  </select>

                </InputBlock>

                {/* ADDRESS */}

                <div>

                  <label className="mb-3 block text-sm font-bold text-slate-700">
                    Pickup Address
                  </label>

                  <textarea
                    placeholder="Enter complete pickup address with landmark"
                    rows={5}
                    value={address}
                    onChange={(e) =>
                      setAddress(
                        e.target.value
                      )
                    }
                    className="
                      w-full
                      rounded-3xl
                      border
                      border-slate-200
                      bg-white
                      p-5
                      text-black
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-500/20
                    "
                  />

                </div>

                {/* TRUST BAR */}

                <div className="rounded-[30px] bg-gradient-to-r from-blue-50 via-cyan-50 to-violet-50 p-6">

                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <div className="flex items-start gap-3">

                      <CheckCircle2 className="mt-1 h-6 w-6 text-emerald-600" />

                      <div>

                        <h3 className="font-black text-black">
                          Secure Device Handling
                        </h3>

                        <p className="mt-1 text-sm text-slate-600">
                          Your data privacy and
                          secure pickup experience
                          are fully protected.
                        </p>

                      </div>

                    </div>

                    <div className="rounded-2xl bg-white px-5 py-4 shadow-lg">

                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        Estimated Payout
                      </p>

                      <h4 className="mt-2 text-3xl font-black text-black">
                        ₹
                        {price.toLocaleString()}
                      </h4>

                    </div>

                  </div>

                </div>

                {/* CTA */}

                <button
                  onClick={handlePickup}
                  disabled={loading}
                  className="
                    group
                    flex
                    h-16
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    via-cyan-500
                    to-violet-500
                    text-white
                    shadow-[0_20px_50px_rgba(59,130,246,0.35)]
                    transition-all
                    duration-300
                    hover:scale-[1.01]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >

                  {loading ? (

                    <>

                      <Loader2 className="h-5 w-5 animate-spin" />

                      <span className="text-lg font-black">
                        Scheduling Pickup...
                      </span>

                    </>

                  ) : (

                    <>

                      <span className="text-lg font-black">
                        Confirm Pickup
                      </span>

                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

                    </>

                  )}

                </button>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </main>
  );
}

//////////////////////////////////////////////////////
// BENEFIT CARD
//////////////////////////////////////////////////////

function BenefitCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {

  return (
    <div className="rounded-[30px] border border-white/70 bg-white/80 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)] backdrop-blur-2xl">

      {icon}

      <h3 className="mt-5 text-xl font-black text-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        {desc}
      </p>

    </div>
  );
}

//////////////////////////////////////////////////////
// INPUT BLOCK
//////////////////////////////////////////////////////

function InputBlock({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {

  return (
    <div>

      <label className="mb-3 block text-sm font-bold text-slate-700">
        {label}
      </label>

      <div className="relative">

        <div className="absolute left-5 top-1/2 z-10 -translate-y-1/2">

          {icon}

        </div>

        {children}

      </div>

    </div>
  );
}