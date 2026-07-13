"use client";

import { motion } from "framer-motion";
import ProcessStep from "./ProcessStep";
import { processSteps } from "./processData";

export default function Process() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-[#D62828]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#D62828]">
            Our Process
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#D62828]">
            How We Build Your Project
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#0B4EA2]">
            Every project follows a structured process that ensures quality,
            safety, transparency and timely delivery.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step) => (
            <ProcessStep
              key={step.step}
              {...step}
            />
          ))}
        </div>

      </div>
    </section>
  );
}