export function HeroButtons() {
  return (
    <div className="flex flex-col gap-4 pt-8 sm:flex-row">
      
      <button
        className="
        rounded-2xl
        bg-white
        px-8
        py-4
        font-semibold
        text-black
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]
      "
      >
        Start Selling
      </button>

      <button
        className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-8
        py-4
        font-semibold
        text-white
        backdrop-blur-xl
        transition-all
        duration-300
        hover:bg-white/10
      "
      >
        Explore Platform
      </button>
    </div>
  );
}