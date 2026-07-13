"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Warehouse,
  Truck,
  Building2,
  Store,
  Zap,
} from "lucide-react";

interface Props {
  industries: string[];
}

const icons = [
  Factory,
  Warehouse,
  Truck,
  Building2,
  Store,
  Zap,
];

export default function ServiceIndustries({
  industries,
}: Props) {
  return (
    <section id="industries" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4EA2]">
            Industries We Serve
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#D62828]">
            Trusted Across Multiple Industries
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#0B4EA2]">
            We provide reliable construction solutions for industries
            requiring durable, efficient, and high-performance infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={industry}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon
                    size={32}
                    className="text-[#0B4EA2]"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#D62828]">
                  {industry}
                </h3>

                <p className="mt-4 leading-8 text-[#0B4EA2]">
                  Specialized industrial construction solutions designed
                  for efficiency, durability, and long-term operational
                  performance.
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}