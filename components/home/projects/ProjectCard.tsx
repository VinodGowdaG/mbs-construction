"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  title: string;
  image: string;
  slug: string;
}

export default function ProjectCard({
  title,
  image,
  slug,
}: Props) {
  return (
    <Link href={`/projects/${slug}`}>
      <motion.div
        whileHover={{ y: -8 }}
        className="cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl"
      >
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <h3 className="absolute bottom-6 left-6 text-xl font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
}