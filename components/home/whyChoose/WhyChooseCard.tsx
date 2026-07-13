"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function WhyChooseCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-md transition hover:border-[#D62828] hover:shadow-2xl"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B4EA2]/10 transition group-hover:bg-[#D62828]/10">
        <Icon className="h-8 w-8 text-[#0B4EA2] group-hover:text-[#D62828]" />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-[#D62828]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-[#0B4EA2]">
        {description}
      </p>
    </motion.div>
  );
}