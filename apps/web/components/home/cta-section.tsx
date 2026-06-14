import Link from "next/link";
import Image from "next/image";
import { Download, Smartphone, ShieldCheck, Zap } from "lucide-react";

export default function AppCTA() {
  const points = [
    "Sell Old Phones",
    "Buy Refurbished",
    "Track Orders",
    "Safe Experience",
  ];

  return (
    <section className="py-12 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#08152f] via-[#0c2552] to-[#123b87] px-6 md:px-10 py-8 md:py-10">

          {/* Glow */}
          <div className="absolute -right-16 top-0 h-60 w-60 rounded-full bg-blue-400/20 blur-3xl" />

          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">

            {/* Left */}
            <div>
              <p className="text-xs font-semibold text-blue-200 uppercase tracking-[0.25em]">
                Download The App
              </p>

              <h2 className="mt-3 text-2xl md:text-4xl font-bold text-white leading-tight">
                Sell, Buy & Upgrade
                <span className="block text-[#7cffc4]">
                  Devices Smarter.
                </span>
              </h2>

              <p className="mt-4 text-sm md:text-base text-blue-100 max-w-lg leading-7">
                Use the Goopsy app to sell old phones, buy refurbished devices,
                track orders, and enjoy a premium smooth experience.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-3 mt-5">
                {points.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white">
                    {i === 0 && <Zap className="h-4 w-4 text-[#7cffc4]" />}
                    {i === 1 && <Smartphone className="h-4 w-4 text-[#7cffc4]" />}
                    {i === 2 && <Download className="h-4 w-4 text-[#7cffc4]" />}
                    {i === 3 && <ShieldCheck className="h-4 w-4 text-[#7cffc4]" />}
                    <span className="text-sm text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  href="#"
                  className="inline-flex h-11 items-center rounded-xl bg-black px-5 text-sm font-semibold text-white hover:opacity-90 transition"
                >
                  Google Play
                </Link>

                <Link
                  href="#"
                  className="inline-flex h-11 items-center rounded-xl bg-white px-5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition"
                >
                  App Store
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/hero/hero.png"
                alt="Goopsy App"
                width={280}
                height={280}
                className="object-contain drop-shadow-2xl"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}