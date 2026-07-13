"use client";

import { motion } from "framer-motion";
import {
  Ruler,
  Building2,
  Shield,
  Clock,
} from "lucide-react";

interface Props {
  specifications: {
    area: string;
    structure: string;
    roofing: string;
    duration: string;
  };
}

export default function ProjectSpecifications({
  specifications,
}: Props) {
  const specs = [
    {
      title: "Project Area",
      value: specifications.area,
      icon: <Ruler size={34} />,
    },
    {
      title: "Structure",
      value: specifications.structure,
      icon: <Building2 size={34} />,
    },
    {
      title: "Roofing",
      value: specifications.roofing,
      icon: <Shield size={34} />,
    },
    {
      title: "Duration",
      value: specifications.duration,
      icon: <Clock size={34} />,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4EA2]">
            Specifications
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#D62828]">
            Project Specifications
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-[#0B4EA2]">
            Every project is designed with high-quality materials,
            precision engineering and modern construction standards.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {specs.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 text-[#0B4EA2]">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-500">
                {item.title}
              </h3>

              <p className="mt-3 text-2xl font-bold text-[#D62828]">
                {item.value}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}