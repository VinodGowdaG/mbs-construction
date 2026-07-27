"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ongoingProjects,
  type OngoingProject,
} from "@/data/ongoingProjectsData";

interface Props {
  project: OngoingProject;
}

export default function RelatedProjects({ project }: Props) {
  const related = ongoingProjects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#D62828]">
            More Projects
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#D62828]">
            Related Ongoing Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-[#0B4EA2]">
            Discover other industrial construction projects currently being
            executed by MBS Construction.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {related.map((item) => (

            <Link
              key={item.id}
              href={`/projects/ongoing/${item.slug}`}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:shadow-2xl"
              >

                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white">
                    {item.progress}% Complete
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">

                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-white/80">
                      {item.location}
                    </p>

                  </div>

                </div>

              </motion.div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}