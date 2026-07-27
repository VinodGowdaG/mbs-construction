"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function OngoingProjectsCTA() {
  return (
    <section className="bg-[#0B4EA2] py-24">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white"
        >
          Planning Your Next Industrial Project?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80"
        >
          Partner with MBS Construction for world-class Pre-Engineered
          Buildings, Warehouses, Industrial Sheds and Turnkey Construction
          solutions delivered on time with uncompromising quality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#D62828] px-8 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            Start Your Project

            <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>

    </section>
  );
}