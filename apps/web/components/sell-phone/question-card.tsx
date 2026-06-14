"use client";


interface QuestionCardProps {
  title: string;
  options: string[];
  selected: string[];
  onSelect: (value: string) => void;
}

export default function QuestionCard({
  title,
  options,
  selected,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-4 text-xl font-semibold text-white">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`rounded-2xl border p-4 transition-all ${
              selected.includes(option)
                ? "border-blue-500 bg-blue-500/20 text-white"
                : "border-white/10 bg-white/5 text-zinc-400"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}