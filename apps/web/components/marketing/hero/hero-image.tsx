export function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">
      
      {/* Main Device */}
      <div
        className="
        relative
        h-[550px]
        w-[280px]
        rounded-[3rem]
        border
        border-white/10
        bg-gradient-to-b
        from-zinc-900
        to-black
        shadow-[0_0_80px_rgba(255,255,255,0.08)]
      "
      >
        <div
          className="
          absolute
          inset-3
          rounded-[2.5rem]
          bg-gradient-to-br
          from-zinc-800
          to-zinc-950
        "
        />

        {/* Notch */}
        <div
          className="
          absolute
          left-1/2
          top-3
          h-6
          w-32
          -translate-x-1/2
          rounded-full
          bg-black
        "
        />
      </div>

      {/* Floating Card Left */}
      <div
        className="
        absolute
        -left-10
        top-20
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-4
        backdrop-blur-xl
      "
      >
        <p className="text-sm text-zinc-600">
          iPhone 15 Pro
        </p>

        <h4 className="pt-2 text-xl font-bold">
          ₹84,999
        </h4>
      </div>

      {/* Floating Card Right */}
      <div
        className="
        absolute
        -right-10
        bottom-20
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-4
        backdrop-blur-xl
      "
      >
        <p className="text-sm text-zinc-600">
          Repair Success
        </p>

        <h4 className="pt-2 text-xl font-bold text-green-400">
          98%
        </h4>
      </div>

      {/* Glow */}
      <div
        className="
        absolute
        -z-10
        h-[400px]
        w-[400px]
        rounded-full
        bg-blue-500/20
        blur-3xl
      "
      />
    </div>
  );
}