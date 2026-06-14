export function FloatingDevices() {
  return (
    <div className="relative flex items-center justify-center">
      
      {/* Main Device */}
      <div
        className="
        relative
        h-[500px]
        w-[260px]
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
      </div>

      {/* Floating Glow */}
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