"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ClientCardProps {
  name: string;
  logo: string;
}

export default function ClientCard({
  name,
  logo,
}: ClientCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="flex h-36 items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition hover:border-[#D62828] hover:shadow-xl"
    >
      <Image
        src={logo}
        alt={name}
        width={180}
        height={80}
        className="max-h-16 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
      />
    </motion.div>
  );
}