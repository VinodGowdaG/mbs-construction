"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ServiceCard({
  id,
  title,
  description,
  image,
  link,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <span className="absolute left-6 top-6 rounded-full bg-[#D62828] px-4 py-2 text-lg font-bold text-white">
          {id}
        </span>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-2xl font-bold text-[#D62828]">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-[#0B4EA2]">
          {description}
        </p>

        <Link
          href={link}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-[#D62828] transition group-hover:gap-3"
        >
          Learn More
          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
}