const stats = [
  {
    value: "15K+",
    label: "Devices Sold",
  },
  {
    value: "2K+",
    label: "Trusted Dealers",
  },
  {
    value: "25+",
    label: "Cities Active",
  },
];

export function HeroStats() {
  return (
    <div className="flex flex-wrap gap-10 pt-12">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-3xl font-bold text-white">
            {item.value}
          </h3>

          <p className="pt-2 text-sm text-zinc-600">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}