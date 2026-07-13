"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

import { featuredProjects } from "../../data/projectData";

interface Props {
  activeCategory: string;
  search: string;
}

export default function ProjectsGrid({
  activeCategory,
  search,
}: Props) {
  const filteredProjects = featuredProjects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" ||
      project.category === activeCategory;

    const keyword = search.toLowerCase();

    const matchesSearch =
      project.title.toLowerCase().includes(keyword) ||
      project.location.toLowerCase().includes(keyword);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              <Link href={`/projects/${project.slug}`}>

                <div className="relative h-72">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-[#D62828] px-4 py-2 text-sm font-semibold text-white">
                    {project.category}
                  </span>

                </div>

                <div className="p-7">

                  <div className="mb-3 flex items-center gap-2 text-slate-500">
                    <MapPin size={18} />
                    {project.location}
                  </div>

                  <h3 className="text-2xl font-bold text-[#D62828]">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#0B4EA2]">
                    {project.description}
                  </p>

                  <div className="mt-6 inline-flex items-center font-semibold text-[#D62828]">
                    View Project
                    <ArrowRight
                      size={18}
                      className="ml-2"
                    />
                  </div>

                </div>

              </Link>
            </motion.div>
          ))}

        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="text-3xl font-bold text-[#D62828]">
              No Projects Found
            </h3>

            <p className="mt-4 text-[#0B4EA2]">
              Try another search or choose a different category.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}