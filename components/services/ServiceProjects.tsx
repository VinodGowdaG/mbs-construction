"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { featuredProjects } from "@/data/projectData";

interface Props {
  serviceSlug: string;
}

export default function ServiceProjects({
  serviceSlug,
}: Props) {
  const projects = featuredProjects.filter(
    (project) => project.service === serviceSlug
  );

  if (projects.length === 0) return null;

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-[#D62828]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#D62828]">
            Our Projects
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#D62828]">
            Related Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#0B4EA2]">
            Explore some of our successfully completed projects related to
            this service.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/projects/${project.slug}`}>

                <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

                  <div className="relative h-72">

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute bottom-6 left-6">

                      <p className="text-sm text-white">
                        📍 {project.location}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        {project.title}
                      </h3>

                    </div>

                  </div>

                </div>

              </Link>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}