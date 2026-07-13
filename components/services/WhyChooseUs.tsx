"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  HardHat,
  Clock3,
  IndianRupee,
  Building2,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "10+ Years of Experience",
    description:
      "Extensive expertise in industrial construction, warehouses, PEB buildings, roofing systems, and turnkey project execution.",
  },
  {
    icon: HardHat,
    title: "Expert Engineering Team",
    description:
      "Our experienced engineers and project managers ensure precision planning, quality execution, and structural reliability.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Safety",
    description:
      "We use premium-grade materials and follow strict quality control and safety standards throughout every project.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Efficient project management enables us to complete projects within committed timelines without compromising quality.",
  },
  {
    icon: IndianRupee,
    title: "Cost Effective Solutions",
    description:
      "Optimized designs, modern construction methods, and efficient planning help reduce overall project costs.",
  },
  {
    icon: Building2,
    title: "Complete Turnkey Services",
    description:
      "From design and engineering to fabrication, erection, roofing, and final handover, we manage every stage.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-[#D62828]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#D62828]">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#D62828]">
            Why Industries Choose MBS Construction
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#0B4EA2]">
            We combine engineering excellence, quality materials, modern
            construction techniques, and professional project management to
            deliver industrial projects that exceed expectations.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {reasons.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:border-[#D62828] hover:shadow-2xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B4EA2] text-white">

                  <Icon size={32} />

                </div>

                <h3 className="mb-4 text-2xl font-bold text-[#D62828]">
                  {item.title}
                </h3>

                <p className="leading-8 text-[#0B4EA2]">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}