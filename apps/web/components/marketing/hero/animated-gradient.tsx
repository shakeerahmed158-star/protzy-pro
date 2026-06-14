export function AnimatedGradient() {
  return (
    <>
      <div
        className="
        absolute
        left-1/2
        top-0
        h-[500px]
        w-[260px]
        -translate-x-1/2
        rounded-full
        bg-blue-500/20
        blur-3xl
      "
      />

      <div
        className="
        absolute
        right-0
        top-40
        h-[300px]
        w-[300px]
        rounded-full
        bg-purple-500/10
        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-0
        left-20
        h-[250px]
        w-[250px]
        rounded-full
        bg-cyan-500/10
        blur-3xl
      "
      />
    </>
  );
}