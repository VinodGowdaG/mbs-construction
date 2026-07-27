"use client";

import { CheckCircle2 } from "lucide-react";
import type { OngoingProject } from "@/data/ongoingProjectsData";

interface Props {
  project: OngoingProject;
}

export default function ProjectOverview({ project }: Props) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#D62828]">
            Project Overview
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#D62828]">
            Building Industrial Excellence
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#0B4EA2]">
            {project.overview}
          </p>

          <p className="mt-6 leading-8 text-slate-600">
            {project.description}
          </p>

        </div>

        {/* Right */}

        <div>

          <h3 className="mb-8 text-3xl font-bold text-[#D62828]">
            Project Highlights
          </h3>

          <div className="grid gap-5">

            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-[#D62828]"
              >
                <CheckCircle2
                  className="text-green-600"
                  size={24}
                />

                <span className="font-medium text-slate-700">
                  {feature}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}