"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Building2,
  BriefcaseBusiness,
  Users,
  HardHat,
} from "lucide-react";

import { aboutData } from "@/data/aboutData";

const icons = [
  Building2,
  BriefcaseBusiness,
  Users,
  HardHat,
];

export default function CompanyStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#0B4EA2]/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#D62828]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B4EA2]">
            Company Statistics
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#D62828]">
            Numbers That Speak
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Every completed project reflects our commitment to quality,
            engineering excellence, and customer satisfaction.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {aboutData.stats.map((item, index) => {
            const Icon = icons[index];

            const value = parseInt(item.value);

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-lg transition-all"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0B4EA2]/10">

                  <Icon
                    size={40}
                    className="text-[#D62828]"
                  />

                </div>

                <h3 className="mt-8 text-5xl font-bold text-[#D62828]">

                  {inView && (
                    <CountUp
                      end={value}
                      duration={2}
                    />
                  )}

                  +

                </h3>

                <p className="mt-4 text-lg font-semibold text-[#0B4EA2]">
                  {item.label}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}