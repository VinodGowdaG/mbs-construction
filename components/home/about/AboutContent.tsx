"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// using a mailto link for direct email contact
import { ArrowRight } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  "100+ Successfully Completed Projects",
  "Pre-Engineered Building Specialists",
  "Complete Civil Construction Solutions",
  "Premium Roofing & Steel Fabrication",
];

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-xl"
    >
      {/* Section Tag */}
      <span className="inline-block rounded-full bg-[#0B4EA2]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#D62828]">
        About MBS Construction
      </span>

      {/* Heading */}
      <h2 className="mt-6 text-4xl font-extrabold leading-tight text-[#D62828] lg:text-5xl">
  Building Stronger
  <span className="block">
    Industrial Infrastructure
  </span>
</h2>

      {/* Description */}
      <p className="mt-6 text-lg leading-8 text-[#0B4EA2]">
        MBS Construction is a trusted construction company specializing in
        <strong> Pre-Engineered Buildings (PEB)</strong>, warehouse construction,
        civil construction, roofing solutions, and steel fabrication.
      </p>

      <p className="mt-4 text-lg leading-8 text-[#0B4EA2]">
        We deliver durable, innovative, and cost-effective industrial
        infrastructure with a strong commitment to quality, safety, and
        on-time project completion across Karnataka.
      </p>

      {/* Features */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <FeatureCard
            key={feature}
            title={feature}
          />
        ))}
      </div>

      {/* CTA */}
      <Link
        href="/about"
        className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#D62828] px-7 py-4 font-semibold text-white transition duration-300 hover:bg-[#b71f1f]"
      >
        Know More About Us
        <ArrowRight size={20} />
      </Link>
    </motion.div>
  );
}