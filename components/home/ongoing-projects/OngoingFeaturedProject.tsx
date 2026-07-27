"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Ruler,
  ArrowRight,
  Hammer,
} from "lucide-react";

interface Props {
  title: string;
  slug: string;
  image: string;
  category: string;
  location: string;
  area: string;
  progress: number;
  currentStage: string;
  expectedCompletion: string;
}

export default function OngoingFeaturedProject({
  title,
  slug,
  image,
  category,
  location,
  area,
  progress,
  currentStage,
  expectedCompletion,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-[32px]"
    >
      <div className="relative h-[600px]">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        {/* Badges */}

        <div className="absolute left-10 top-10 flex gap-3">

          <span className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white">
            Ongoing
          </span>

          <span className="rounded-full bg-[#D62828] px-5 py-2 text-sm font-semibold text-white">
            {category}
          </span>

        </div>

        {/* Content */}

        <div className="absolute bottom-12 left-12 max-w-xl text-white">

          <h2 className="text-5xl font-bold">
            {title}
          </h2>

          <div className="mt-8 space-y-3">

            <div className="flex items-center gap-3">
              <MapPin size={20} />
              {location}
            </div>

            <div className="flex items-center gap-3">
              <Ruler size={20} />
              {area}
            </div>

            <div className="flex items-center gap-3">
              <Calendar size={20} />
              Expected Completion • {expectedCompletion}
            </div>

            <div className="flex items-center gap-3">
              <Hammer size={20} />
              {currentStage}
            </div>

          </div>

          {/* Progress */}

          <div className="mt-8">

            <div className="mb-2 flex justify-between text-sm">

              <span>Construction Progress</span>

              <span>{progress}%</span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/20">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="h-full rounded-full bg-green-500"
              />

            </div>

          </div>

          <Link
            href={`/projects/ongoing/${slug}`}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#D62828] px-8 py-4 font-semibold transition hover:bg-red-700"
          >
            View Project
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </motion.div>
  );
}