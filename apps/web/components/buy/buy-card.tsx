interface Props {
  title: string;
  value: string;
}

export default function BuyCard({
  title,
  value,
}: Props) {

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6">

      <p className="text-zinc-500 text-sm">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-black text-zinc-900">
        {value}
      </h3>
    </div>
  );
}