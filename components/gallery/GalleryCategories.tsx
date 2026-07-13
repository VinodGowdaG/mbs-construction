"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categoryData } from "./categoryData";

export default function GalleryCategories() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D62828]">
            Browse by Category
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#D62828]">
            Project Categories
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#0B4EA2]">
            Explore our completed projects organized by construction type.
          </p>

        </div>

        {/* Categories */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {categoryData.map((item) => (

            <Link
              key={item.id}
              href={item.href}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">

                  <h3 className="text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-white/90">
                    {item.description}
                  </p>

                </div>

              </div>

              <div className="flex items-center justify-between px-6 py-5">

                <span className="font-semibold text-[#D62828]">
                  Explore Projects
                </span>

                <ArrowRight
                  className="text-[#D62828] transition group-hover:translate-x-2"
                  size={20}
                />

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}