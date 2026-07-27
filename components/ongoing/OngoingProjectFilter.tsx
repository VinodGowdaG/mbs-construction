"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const categories = [
  "All",
  "Warehouse",
  "PEB",
  "Factory",
  "Roofing",
  "Steel",
  "Civil",
];

export default function OngoingProjectFilter() {
  const [active, setActive] = useState("All");

  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Search */}

        <div className="relative mb-10">

          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search ongoing projects..."
            className="w-full rounded-2xl border border-slate-200 py-5 pl-14 pr-5 outline-none transition focus:border-[#D62828]"
          />

        </div>

        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-full px-7 py-3 font-medium transition ${
                active === category
                  ? "bg-[#D62828] text-white"
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