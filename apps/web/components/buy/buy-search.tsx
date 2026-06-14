"use client";

interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export default function BuySearch({
  value,
  onChange,
}: Props) {

  return (
    <div className="relative w-full">

      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Search devices..."
        className="
          w-full h-16 rounded-3xl
          border border-zinc-200
          bg-white
          px-6
          text-lg
          outline-none
          focus:border-black
          transition-all
          shadow-sm
        "
      />
    </div>
  );
}