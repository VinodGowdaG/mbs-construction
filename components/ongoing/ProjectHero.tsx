"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Building2,
  Hammer,
  ArrowRight,
} from "lucide-react";

import type { OngoingProject } from "@/data/ongoingProjectsData";

interface Props {
  project: OngoingProject;
}

export default function ProjectHero({ project }: Props) {
  return (
    <section className="relative h-[700px] overflow-hidden pt-40 pb-28">

      <Image
        src={project.image}
        alt={project.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">

        <div className="max-w-3xl text-white">

          {/* Breadcrumb */}

          <div className="mb-6 flex items-center gap-2 text-sm text-gray-300">

            <Link href="/">Home</Link>

            <span>/</span>

            <Link href="/projects">Projects</Link>

            <span>/</span>

            <Link href="/projects/ongoing">Ongoing</Link>

            <span>/</span>

            <span className="text-red-400">
              {project.title}
            </span>

          </div>

          {/* Badges */}

          <div className="mb-6 flex flex-wrap gap-3">

            <span className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold">
              Ongoing
            </span>

            <span className="rounded-full bg-[#D62828] px-5 py-2 text-sm font-semibold">
              {project.category}
            </span>

            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
              {project.progress}% Completed
            </span>

          </div>

          {/* Title */}

          <h1 className="text-5xl font-black leading-tight md:text-6xl">
            {project.title}
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            {project.description}
          </p>

          {/* Information */}

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="flex items-center gap-3">

              <MapPin className="text-red-500" />

              <div>

                <p className="text-sm text-gray-300">
                  Location
                </p>

                <p className="font-semibold">
                  {project.location}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <Building2 className="text-red-500" />

              <div>

                <p className="text-sm text-gray-300">
                  Client
                </p>

                <p className="font-semibold">
                  {project.client}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <Hammer className="text-red-500" />

              <div>

                <p className="text-sm text-gray-300">
                  Current Stage
                </p>

                <p className="font-semibold">
                  {project.currentStage}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <Calendar className="text-red-500" />

              <div>

                <p className="text-sm text-gray-300">
                  Expected Completion
                </p>

                <p className="font-semibold">
                  {project.expectedCompletion}
                </p>

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/contact"
              className="rounded-full bg-[#D62828] px-8 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Request a Quote
            </Link>

            <a
              href="#location"
              className="inline-flex items-center gap-2 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              View Location

              <ArrowRight size={18} />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}