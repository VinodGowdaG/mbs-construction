"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { ongoingProjects } from "@/data/ongoingProjectsData";
import OngoingFeaturedProject from "./OngoingFeaturedProject";
import OngoingProjectCard from "./OngoingProjectCard";

export default function OngoingProjects() {
  const featured = ongoingProjects[0];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center justify-between gap-8 lg:flex-row"
        >
          <div>

            <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Current Projects
            </span>

            <h2 className="mt-6 text-5xl font-bold text-[#D62828]">
              Projects Under Construction
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#0B4EA2]">
              Explore our ongoing warehouse, PEB, industrial and roofing
              construction projects currently being executed across Karnataka.
            </p>

          </div>

          <Link
            href="/projects/ongoing"
            className="inline-flex items-center gap-3 rounded-full bg-[#D62828] px-7 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Featured Ongoing Project */}

        <OngoingFeaturedProject {...featured} />

        {/* Cards */}

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {ongoingProjects.map((project) => (
            <OngoingProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}