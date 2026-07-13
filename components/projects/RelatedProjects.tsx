"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

interface Project {
  id: number;
  title: string;
  slug: string;
  image: string;
  location: string;
  category: string;
}

interface Props {
  currentSlug: string;
  projects: Project[];
}

export default function RelatedProjects({
  currentSlug,
  projects,
}: Props) {

  const related = projects
    .filter((project) => project.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4EA2]">
            More Projects
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#D62828]">
            Related Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#0B4EA2]">
            Discover more industrial construction projects completed by
            MBS Construction across Karnataka.
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {related.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition-all"
            >

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-110"
                />

              </div>

              <div className="p-8">

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
                  {project.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-[#D62828]">
                  {project.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-slate-500">
                  <MapPin size={18} />
                  {project.location}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-8 inline-flex items-center font-semibold text-[#D62828] transition hover:gap-3"
                >
                  View Project
                  <ArrowRight
                    size={18}
                    className="ml-2"
                  />
                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}