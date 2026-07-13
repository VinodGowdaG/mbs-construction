"use client";

import { Search } from "lucide-react";

interface Props {
  categories: string[];
  activeCategory: string;
  search: string;
  total: number;
  onCategoryChange: (category: string) => void;
  onSearchChange: (value: string) => void;
}

export default function ProjectsFilter({
  categories,
  activeCategory,
  search,
  total,
  onCategoryChange,
  onSearchChange,
}: Props) {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-8 flex flex-col items-center justify-between gap-6 lg:flex-row">

          {/* Search */}
          <div className="relative w-full lg:max-w-md">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full rounded-full border border-slate-300 py-4 pl-12 pr-5 outline-none transition focus:border-[#0B4EA2] focus:ring-2 focus:ring-[#0B4EA2]/20"
            />
          </div>

          {/* Count */}
          <div className="rounded-full bg-[#D62828]/10 px-6 py-3 font-semibold text-[#D62828]">
            {total} Projects Found
          </div>

        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#D62828] text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-[#0B4EA2] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}