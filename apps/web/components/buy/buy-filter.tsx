"use client";

interface Props {
  brands: string[];
  selected: string;
  onSelect: (
    brand: string
  ) => void;
}

export default function BuyFilter({
  brands,
  selected,
  onSelect,
}: Props) {

  return (
    <div className="flex flex-wrap gap-3">

      {brands.map((brand) => (

        <button
          key={brand}
          onClick={() =>
            onSelect(brand)
          }
          className={`
            px-5 py-3 rounded-2xl
            font-semibold transition-all
            ${
              selected === brand
                ? "bg-black text-white"
                : "bg-white border border-zinc-200 text-zinc-700 hover:border-black"
            }
          `}
        >
          {brand}
        </button>
      ))}
    </div>
  );
}