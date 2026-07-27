"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface Project {
  id: number;
  title: string;
  slug: string;
  image: string;
  location: string;
  progress: number;
  currentStage: string;
}

interface Props {
  project: Project;
}

export default function OngoingProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/ongoing/${project.slug}`}>
      <motion.div
        whileHover={{ y: -8 }}
        className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:shadow-2xl"
      >
        {/* Image */}

        <div className="relative h-60 overflow-hidden">

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-700 hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Ongoing Badge */}

          <div className="absolute left-4 top-4 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white">
            Ongoing
          </div>

          {/* Title */}

          <div className="absolute bottom-5 left-5 right-5">

            <h3 className="text-xl font-bold text-white">
              {project.title}
            </h3>

          </div>

        </div>

        {/* Content */}

        <div className="space-y-4 p-6">

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin size={16} className="text-[#D62828]" />
            {project.location}
          </div>

          <div>

            <div className="mb-2 flex justify-between text-sm font-medium">

              <span>Progress</span>

              <span className="text-green-600">
                {project.progress}%
              </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-200">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${project.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-green-500"
              />

            </div>

          </div>

          <div>

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Current Stage
            </p>

            <p className="mt-1 font-semibold text-[#0B4EA2]">
              {project.currentStage}
            </p>

          </div>

        </div>
      </motion.div>
    </Link>
  );
}