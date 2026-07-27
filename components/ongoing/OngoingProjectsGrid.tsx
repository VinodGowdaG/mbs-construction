"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Hammer,
  ArrowRight,
} from "lucide-react";

import { ongoingProjects } from "@/data/ongoingProjectsData";

export default function OngoingProjectsGrid() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {ongoingProjects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white">
                  Ongoing
                </div>

                <div className="absolute bottom-5 left-5 right-5">

                  <span className="rounded-full bg-[#D62828] px-3 py-1 text-xs text-white">
                    {project.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                </div>

              </div>

              {/* Content */}

              <div className="space-y-5 p-6">

                <div className="flex items-center gap-2 text-sm text-gray-600">

                  <MapPin
                    size={18}
                    className="text-[#D62828]"
                  />

                  {project.location}

                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">

                  <Hammer
                    size={18}
                    className="text-[#0B4EA2]"
                  />

                  {project.currentStage}

                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">

                  <Calendar
                    size={18}
                    className="text-green-600"
                  />

                  Expected: {project.expectedCompletion}

                </div>

                {/* Progress */}

                <div>

                  <div className="mb-2 flex justify-between text-sm font-semibold">

                    <span>Construction Progress</span>

                    <span className="text-green-600">
                      {project.progress}%
                    </span>

                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${project.progress}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                      }}
                      className="h-full rounded-full bg-green-500"
                    />

                  </div>

                </div>

                <Link
                  href={`/projects/ongoing/${project.slug}`}
                  className="inline-flex items-center gap-2 font-semibold text-[#D62828] transition hover:gap-4"
                >
                  View Project

                  <ArrowRight size={18} />

                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}