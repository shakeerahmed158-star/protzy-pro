interface Props {
  title: string;
  subtitle: string;
}

export default function BuyHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-14">

      <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">

        GOOPSY VERIFIED STORE

      </div>

      <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight text-zinc-900 leading-tight">
        {title}
      </h1>

      <p className="mt-5 text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}