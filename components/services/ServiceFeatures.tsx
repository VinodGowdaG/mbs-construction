"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  features: string[];
}

export default function ServiceFeatures({
  features,
}: Props) {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4EA2]">
            Highlights
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#D62828]">
            Key Features
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-[#0B4EA2]">
            Every project is designed with quality,
            durability and long-term performance in mind.
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (

            <motion.div
              key={feature}
              whileHover={{ y: -8 }}
              className="rounded-3xl border bg-white p-8 shadow-lg"
            >
              <CheckCircle2
                className="mb-5 text-[#D62828]"
                size={36}
              />

              <h3 className="text-xl font-semibold text-[#0B4EA2]">
                {feature}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}