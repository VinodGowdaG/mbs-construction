"use client";

import { useState } from "react";
import Image from "next/image";
import { imageData } from "./imageData";

const filters = [
  "All",
  "Warehouse",
  "PEB",
  "Roofing",
  "Steel",
  "Civil",
];

export default function GalleryImages() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? imageData
      : imageData.filter((item) => item.category === active);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-14 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D62828]">
            Project Gallery
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#D62828]">
            Project Images
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-[#0B4EA2]">
            Explore our completed warehouse, PEB, roofing,
            steel fabrication and civil construction projects.
          </p>

        </div>

        {/* Filter */}

        <div className="mb-12 flex flex-wrap justify-center gap-4">

          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full px-6 py-3 font-medium transition ${
                active === filter
                  ? "bg-[#D62828] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-[#0B4EA2] hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}

        </div>

        {/* Gallery Grid */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filtered.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-72">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <span className="rounded-full bg-red-600 px-3 py-1 text-xs text-white">
                    {item.category}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}