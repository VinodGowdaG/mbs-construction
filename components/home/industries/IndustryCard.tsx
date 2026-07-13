"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  image: string;
}

export default function IndustryCard({ title, image }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl"
    >
      <div className="relative h-80">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#D62828] transition group-hover:rotate-45">
            <ArrowUpRight className="text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}