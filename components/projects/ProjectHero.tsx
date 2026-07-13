"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";

interface ProjectHeroProps {
  title: string;
  image: string;
  location: string;
  category: string;
}

export default function ProjectHero({
  title,
  image,
  location,
  category,
}: ProjectHeroProps) {
  return (
    <section className="relative h-[75vh] min-h-[550px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/65 to-slate-900/50" />

      {/* Blue Glow */}
      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />

      {/* Red Glow */}
      <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-red-600/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-8">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center text-sm text-slate-300"
          >
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <ChevronRight
              size={16}
              className="mx-2"
            />

            <Link
              href="/projects"
              className="transition hover:text-white"
            >
              Projects
            </Link>

            <ChevronRight
              size={16}
              className="mx-2"
            />

            <span className="text-white">
              {title}
            </span>
          </motion.div>

          {/* Category Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex rounded-full bg-[#D62828] px-5 py-2 text-sm font-semibold uppercase tracking-wider text-white"
          >
            {category}
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 max-w-4xl text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center gap-3 text-lg text-slate-200"
          >
            <MapPin
              size={22}
              className="text-[#D62828]"
            />

            <span>{location}, Karnataka</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}