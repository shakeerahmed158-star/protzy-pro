interface Props {
  text: string;
}

export default function BuyBadge({
  text,
}: Props) {

  return (
    <div className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-4 py-2 text-sm font-bold">
      {text}
    </div>
  );
}