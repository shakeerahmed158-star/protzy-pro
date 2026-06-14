export function GradientOrbs() {
  return (
    <>
      <div
        className="
          absolute
          left-0
          top-0
          h-[500px]
          w-[260px]
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          right-0
          top-40
          h-[400px]
          w-[400px]
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />
    </>
  );
}