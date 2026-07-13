"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Building2,
  Hammer,
  Award,
  Wrench,
} from "lucide-react";

interface Props {
  features: string[];
}

const icons = [
  <ShieldCheck size={28} />,
  <Building2 size={28} />,
  <Hammer size={28} />,
  <Award size={28} />,
  <Wrench size={28} />,
  <CheckCircle2 size={28} />,
];

export default function ProjectFeatures({
  features,
}: Props) {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4EA2]">
            Project Highlights
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#D62828]">
            Key Features
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#0B4EA2]">
            Every MBS Construction project is delivered with superior quality,
            innovative engineering, and a commitment to long-term durability.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-5 rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl"
            >
              <div className="rounded-2xl bg-blue-100 p-4 text-[#0B4EA2]">
                {icons[index % icons.length]}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#D62828]">
                  {feature}
                </h3>

                <p className="mt-2 text-slate-600">
                  Built using premium materials and modern construction
                  techniques to ensure long-lasting performance.
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}