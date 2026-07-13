"use client";

interface Props {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: Props) {
  return (
    <div className="mb-14 flex flex-wrap items-center justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
            active === category
              ? "bg-[#D62828] text-white shadow-lg"
              : "border border-slate-300 bg-white text-[#0B4EA2] hover:border-[#D62828] hover:text-[#D62828]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}