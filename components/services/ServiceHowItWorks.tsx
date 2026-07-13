"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface Props {
  steps: string[];
}

export default function ServiceHowItWorks({
  steps,
}: Props) {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4EA2]">
            Process
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#D62828]">
            How It Works
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-[#0B4EA2]">
            Our systematic approach ensures every project is delivered
            efficiently, safely, and to the highest quality standards.
          </p>
        </motion.div>

        <div className="space-y-6">

          {steps.map((step, index) => (

            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex items-center gap-6">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D62828] text-2xl font-bold text-white">
                  {index + 1}
                </div>

                <div className="flex-1 rounded-2xl bg-white p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-[#0B4EA2]">
                    {step}
                  </h3>
                </div>

              </div>

              {index !== steps.length - 1 && (
                <div className="ml-8 py-3">
                  <ArrowDown className="text-[#D62828]" />
                </div>
              )}

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}