"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Props {
  name: string;
  company: string;
  location: string;
  review: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  company,
  location,
  review,
  rating,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
    >
      <Quote
        className="mb-6 text-[#D62828]"
        size={42}
      />

      <div className="mb-5 flex">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="leading-8 text-[#0B4EA2]">
  &ldquo;{review}&rdquo;
</p>

      <div className="mt-8 border-t pt-5">
        <h4 className="font-bold text-[#D62828]">
          {name}
        </h4>

        <p className="text-[#0B4EA2]">
          {company}
        </p>

        <p className="text-sm text-slate-500">
          {location}
        </p>
      </div>
    </motion.div>
  );
}