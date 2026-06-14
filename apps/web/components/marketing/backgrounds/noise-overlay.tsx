export function NoiseOverlay() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.03]
        mix-blend-soft-light
      "
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />
  );
}