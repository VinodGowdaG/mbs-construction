"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Ruler, ArrowRight } from "lucide-react";

interface Props {
  title: string;
  location: string;
  area: string;
  year: string;
  status: string;
  image: string;
  category: string;
  href?: string;
}

export default function FeaturedProject({
  title,
  location,
  area,
  year,
  status,
  image,
  category,
  href = "#",
}: Props) {
  // generate a slug from title if no href provided
  const slugify = (s: string) =>
    s
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  const projectHref = href === "#" ? `/projects/${slugify(title)}` : href;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={title}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-10 overflow-hidden rounded-[32px]"
      >
        <div className="relative h-[600px]">

          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

          <div className="absolute left-12 top-12">

            <span className="rounded-full bg-[#D62828] px-5 py-2 text-sm font-semibold text-white">
              {category}
            </span>

          </div>

          <div className="absolute bottom-14 left-12 max-w-xl text-white">

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
                Completed {year}
              </div>

            </div>

            <Link
              href={projectHref}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#D62828] px-8 py-4 font-semibold transition hover:bg-red-700"
            >
              View Project
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}