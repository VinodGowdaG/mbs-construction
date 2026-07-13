"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { brochureData } from "./brochureData";

export default function GalleryBrochures() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D62828]">
            Downloads
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#D62828]">
            Company Brochures
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#0B4EA2]">
            Download our company profile, product catalogues and technical brochures.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {brochureData.map((item) => (

            <div
              key={item.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Cover */}

              <div className="relative h-72">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute right-4 top-4 rounded-full bg-white p-3 shadow-lg">

                  <FileText
                    className="text-[#D62828]"
                    size={22}
                  />

                </div>

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#D62828]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[#0B4EA2]">
                  {item.description}
                </p>

                <p className="mt-5 text-sm text-slate-500">
                  PDF • {item.size}
                </p>

                <Link
                  href={item.file}
                  target="_blank"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D62828] px-6 py-3 font-semibold text-white transition hover:bg-red-700"
                >
                  <Download size={18} />

                  Download
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}