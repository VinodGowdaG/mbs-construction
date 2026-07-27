"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { OngoingProject } from "@/data/ongoingProjectsData";

interface Props {
  project: OngoingProject;
}

export default function ProjectGallery({ project }: Props) {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#D62828]">
            Site Gallery
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#D62828]">
            Construction Progress Gallery
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-[#0B4EA2]">
            Explore the latest construction progress images captured from the
            project site.
          </p>

        </div>

        {/* Gallery */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {project.gallery.map((image, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl"
            >

              <div className="relative h-80 overflow-hidden">

                <Image
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}