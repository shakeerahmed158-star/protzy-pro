"use client";

interface Props {
  text: string;
  onClick?: () => void;
  full?: boolean;
}

export default function BuyButton({
  text,
  onClick,
  full,
}: Props) {

  return (
    <button
      onClick={onClick}
      className={`
        h-14 px-7 rounded-2xl
        bg-zinc-900 hover:bg-black
        text-white font-bold
        transition-all duration-300
        hover:scale-[1.02]
        active:scale-[0.98]
        shadow-lg hover:shadow-2xl
        ${full ? "w-full" : ""}
      `}
    >
      {text}
    </button>
  );
}