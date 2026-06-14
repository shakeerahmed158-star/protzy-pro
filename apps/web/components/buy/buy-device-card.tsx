"use client";

import { useRouter } from "next/navigation";

import BuyBadge from "./buy-badge";

interface Props {
  id: string;
  name: string;
  price: number;
  image: string;
  condition: string;
}

export default function BuyDeviceCard({
  id,
  name,
  price,
  image,
  condition,
}: Props) {

  const router =
    useRouter();

  return (
    <div
      onClick={() =>
        router.push(
          `/buy/device/${id}`
        )
      }
      className="
        group cursor-pointer
        rounded-[34px]
        border border-zinc-200
        bg-white
        overflow-hidden
        hover:shadow-2xl
        transition-all duration-500
        hover:-translate-y-2
      "
    >

      {/* IMAGE */}

      <div className="relative h-[340px] overflow-hidden bg-gradient-to-b from-zinc-100 to-white">

        <img
          src={image}
          alt={name}
          className="
            h-full w-full object-contain p-10
            transition-transform duration-500
            group-hover:scale-110
          "
        />

        <div className="absolute top-5 left-5">

          <BuyBadge text={condition} />

        </div>
      </div>

      {/* CONTENT */}

      <div className="p-6">

        <h3 className="text-2xl font-black text-zinc-900">
          {name}
        </h3>

        <p className="mt-3 text-4xl font-black text-zinc-900">
          ₹{price.toLocaleString()}
        </p>

        <button
          className="
            mt-6 w-full h-14 rounded-2xl
            bg-zinc-900 text-white font-bold
            hover:bg-black transition-all
          "
        >
          View Details
        </button>

      </div>
    </div>
  );
}