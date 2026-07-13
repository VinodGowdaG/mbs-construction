"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface FeatureCardProps {
  title: string;
}

export default function FeatureCard({ title }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-[#0B4EA2] hover:shadow-lg"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B4EA2]/10">
        <CheckCircle2 className="h-6 w-6 text-[#0B4EA2]" />
      </div>

      <p className="font-semibold text-[#0B4EA2]">
        {title}
      </p>
    </motion.div>
  );
}