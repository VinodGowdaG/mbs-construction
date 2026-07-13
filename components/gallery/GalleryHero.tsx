"use client";

import Link from "next/link";
import { ArrowRight, Images, PlayCircle, FileText, FolderOpen } from "lucide-react";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28">

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/gallery/gallery-hero.jpg')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Blue Glow */}

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px]" />

      {/* Red Glow */}

      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-red-600/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Breadcrumb */}

        <div className="mb-6 flex items-center gap-2 text-sm text-slate-300">

          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <span>/</span>

          <span className="text-red-400">
            Gallery
          </span>

        </div>

        {/* Heading */}

        <h1 className="max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">

          Our

          <span className="block text-[#D62828]">
            Project Gallery
          </span>

        </h1>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">

          Discover our completed warehouses, Pre-Engineered Buildings,
          industrial roofing, civil construction and steel fabrication
          projects. Explore project images, construction videos,
          company brochures and project categories.

        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-5">

          <Link
            href="/gallery/images"
            className="inline-flex items-center gap-2 rounded-full bg-[#D62828] px-8 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            Explore Gallery

            <ArrowRight size={18} />
          </Link>

          <Link
            href="/gallery/brochures"
            className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
          >
            Download Brochures
          </Link>

        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

            <Images className="mb-4 text-blue-400" size={34} />

            <h3 className="text-4xl font-bold text-white">
              500+
            </h3>

            <p className="mt-2 text-slate-300">
              Project Images
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

            <PlayCircle className="mb-4 text-red-400" size={34} />

            <h3 className="text-4xl font-bold text-white">
              50+
            </h3>

            <p className="mt-2 text-slate-300">
              Construction Videos
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

            <FileText className="mb-4 text-green-400" size={34} />

            <h3 className="text-4xl font-bold text-white">
              10+
            </h3>

            <p className="mt-2 text-slate-300">
              Company Brochures
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

            <FolderOpen className="mb-4 text-yellow-400" size={34} />

            <h3 className="text-4xl font-bold text-white">
              6+
            </h3>

            <p className="mt-2 text-slate-300">
              Project Categories
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}