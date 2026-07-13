"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function ProjectCTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B4EA2] via-[#0D5CC4] to-[#083B79]" />

      {/* Red Glow */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#D62828]/30 blur-[120px]" />

      {/* Blue Glow */}
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-400/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white backdrop-blur"
        >
          Let's Build Together
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl"
        >
          Ready to Build Your
          <br />
          Next Industrial Project?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-blue-100"
        >
          MBS Construction delivers world-class Pre-Engineered Buildings,
          Industrial Warehouses, Factory Buildings, Roofing Solutions,
          Civil Construction and Steel Fabrication with superior quality,
          timely execution and complete customer satisfaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .6 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >

          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full bg-[#D62828] px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-red-700"
          >
            Get Free Quote

            <ArrowRight
              size={20}
              className="ml-2"
            />
          </Link>

          <Link
            href="tel:+918147826165"
            className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#0B4EA2]"
          >
            <PhoneCall
              size={20}
              className="mr-2"
            />

            Call Now
          </Link>

        </motion.div>

      </div>

    </section>
  );
}