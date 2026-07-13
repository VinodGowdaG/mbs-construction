"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

import { aboutData } from "@/data/aboutData";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#0B4EA2]/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#D62828]/10 blur-[120px]" />

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
            Our Purpose
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#D62828]">
            Mission & Vision
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Guided by innovation, engineering excellence, and customer
            satisfaction, we strive to build lasting infrastructure that
            empowers industries and communities.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Mission */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="group rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl transition-all"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0B4EA2]/10">

              <Target
                size={40}
                className="text-[#D62828]"
              />

            </div>

            <h3 className="mt-8 text-3xl font-bold text-[#D62828]">
              Our Mission
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {aboutData.mission}
            </p>

            <div className="mt-8 h-1 w-24 rounded-full bg-[#D62828]" />
          </motion.div>

          {/* Vision */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="group rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl transition-all"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#D62828]/10">

              <Eye
                size={40}
                className="text-[#0B4EA2]"
              />

            </div>

            <h3 className="mt-8 text-3xl font-bold text-[#D62828]">
              Our Vision
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {aboutData.vision}
            </p>

            <div className="mt-8 h-1 w-24 rounded-full bg-[#0B4EA2]" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}