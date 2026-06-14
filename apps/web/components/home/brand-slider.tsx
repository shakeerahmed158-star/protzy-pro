"use client";

import Image from "next/image";

export default function BrandSlider() {
  const brands = [
    "/brands/apple.png",
    "/brands/samsung.png",
    "/brands/oneplus.png",
    "/brands/xiaomi.png",
    "/brands/realme.png",
    "/brands/vivo.png",
    "/brands/oppo.png",
    "/brands/hp.png",
    "/brands/dell.png",
    "/brands/lenovo.png",
  ];

  const loop = [...brands, ...brands];

  return (
    <>
      <style jsx>{`
        @keyframes brandMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <section className="py-14 md:py-16 px-4 md:px-6 bg-gradient-to-b from-white via-[#f8fbff] to-[#eef5ff] overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <p className="text-[12px] font-black uppercase tracking-[0.25em] text-blue-600">
              Trusted Brands
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-3 tracking-tight">
              Premium Brands We Work With
            </h2>

            <p className="text-slate-500 mt-3 text-sm md:text-base max-w-2xl mx-auto">
              Buy • Sell • Repair • Exchange • Upgrade
            </p>
          </div>

          {/* Slider Wrap */}
          <div className="relative">

            {/* Left Fade */}
            <div className="absolute left-0 top-0 h-full w-16 md:w-28 bg-gradient-to-r from-white via-white/90 to-transparent z-20" />

            {/* Right Fade */}
            <div className="absolute right-0 top-0 h-full w-16 md:w-28 bg-gradient-to-l from-[#eef5ff] via-white/90 to-transparent z-20" />

            {/* Glow BG */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-indigo-100/20 blur-3xl" />

            {/* Track */}
            <div
              className="relative flex w-max gap-5 md:gap-6"
              style={{
                animation: "brandMove 24s linear infinite",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.animationPlayState = "paused")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.animationPlayState = "running")
              }
            >
              {loop.map((logo, i) => (
                <div
                  key={i}
                  className="group h-24 md:h-28 w-40 md:w-44 rounded-[26px] bg-white/90 backdrop-blur-xl border border-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center shrink-0 relative overflow-hidden"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-50/80 via-transparent to-indigo-50/80" />

                  <Image
                    src={logo}
                    alt="brand"
                    width={120}
                    height={55}
                    className="relative z-10 object-contain max-h-11 md:max-h-12 w-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}