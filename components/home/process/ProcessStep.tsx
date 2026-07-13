"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Props {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ProcessStep({
  step,
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl"
    >
      {/* Step Number */}
      <span className="absolute right-6 top-6 text-5xl font-extrabold text-[#D62828]/10">
        {step}
      </span>

      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B4EA2]/10">
        <Icon className="h-8 w-8 text-[#0B4EA2]" />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-[#D62828]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-[#0B4EA2]">
        {description}
      </p>
    </motion.div>
  );
}