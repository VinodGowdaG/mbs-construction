"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4EA2]">
            OUR PURPOSE
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#D62828]">
            Mission & Vision
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#0B4EA2]">
            We are committed to delivering exceptional industrial construction
            solutions while building long-lasting relationships based on trust,
            innovation, and engineering excellence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white p-10 shadow-lg transition-all duration-300 hover:shadow-2xl"
          >
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-100">
              <Target
                size={42}
                className="text-[#D62828]"
              />
            </div>

            <h3 className="mb-6 text-3xl font-bold text-[#D62828]">
              Our Mission
            </h3>

            <p className="text-lg leading-9 text-[#0B4EA2]">
              To deliver premium industrial construction,
              Pre-Engineered Buildings (PEB), warehouse construction,
              roofing systems, civil construction, and steel fabrication
              with uncompromising quality, innovative engineering,
              timely execution, and complete customer satisfaction.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white p-10 shadow-lg transition-all duration-300 hover:shadow-2xl"
          >
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100">
              <Eye
                size={42}
                className="text-[#0B4EA2]"
              />
            </div>

            <h3 className="mb-6 text-3xl font-bold text-[#D62828]">
              Our Vision
            </h3>

            <p className="text-lg leading-9 text-[#0B4EA2]">
              To become Karnataka&apos;s most trusted industrial construction
              company by delivering sustainable, innovative, and
              high-quality infrastructure that empowers industries,
              strengthens communities, and sets new benchmarks for
              engineering excellence.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}