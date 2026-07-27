"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Hammer,
  MapPin,
  TrendingUp,
} from "lucide-react";

export default function OngoingProjectsHero() {
  return (
    <section className="relative overflow-hidden pt-44 pb-28">

      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/projects/warehouse-1.png')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-slate-950/80" />

      {/* Blue Glow */}

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px]" />

      {/* Red Glow */}

      <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-red-600/20 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Breadcrumb */}

        <div className="mb-8 flex items-center gap-2 text-sm text-slate-300">

          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <span>/</span>

          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>

          <span>/</span>

          <span className="text-red-400">
            Ongoing Projects
          </span>

        </div>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="rounded-full bg-green-600/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
            Live Construction Updates
          </span>

          <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl">

            Projects

            <span className="block text-[#D62828]">
              Under Construction
            </span>

          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">

            Discover our ongoing warehouse, factory,
            industrial shed and Pre-Engineered Building
            construction projects currently being executed
            across Karnataka with world-class engineering
            and quality standards.

          </p>

        </motion.div>

        {/* Stats */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

            <Hammer
              className="mb-4 text-green-400"
              size={36}
            />

            <h3 className="text-4xl font-bold text-white">
              12+
            </h3>

            <p className="mt-2 text-slate-300">
              Active Projects
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

            <Building2
              className="mb-4 text-blue-400"
              size={36}
            />

            <h3 className="text-4xl font-bold text-white">
              5.2L+
            </h3>

            <p className="mt-2 text-slate-300">
              Sq.ft Under Construction
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

            <TrendingUp
              className="mb-4 text-red-400"
              size={36}
            />

            <h3 className="text-4xl font-bold text-white">
              68%
            </h3>

            <p className="mt-2 text-slate-300">
              Average Progress
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

            <MapPin
              className="mb-4 text-yellow-400"
              size={36}
            />

            <h3 className="text-4xl font-bold text-white">
              8
            </h3>

            <p className="mt-2 text-slate-300">
              Cities Covered
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}