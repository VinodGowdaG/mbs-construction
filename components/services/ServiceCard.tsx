"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  slug: string;
  title: string;
  image: string;
  shortDescription: string;
}

export default function ServiceCard({
  slug,
  title,
  image,
  shortDescription,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-3xl bg-white shadow-lg"
    >
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 hover:scale-110"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-[#D62828]">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-[#0B4EA2]">
          {shortDescription}
        </p>

        <Link
          href={`/services/${slug}`}
          className="mt-8 inline-flex items-center font-semibold text-[#D62828]"
        >
          Learn More

          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </motion.div>
  );
}