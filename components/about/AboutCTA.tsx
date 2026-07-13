"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-24">

      <Image
        src="/images/about/about-cta.png"
        alt="MBS Construction"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B4EA2]/95 via-[#0B4EA2]/85 to-black/80" />

      <div className="relative mx-auto max-w-5xl px-6 text-center text-white">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold leading-tight md:text-6xl"
        >
          Let's Build Your Next Project Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/90"
        >
          Whether you're planning a warehouse, factory, PEB structure,
          commercial building, or turnkey industrial project, our experienced
          team is ready to help you build with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#D62828] px-8 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            Get Free Quote
            <ArrowRight size={20} />
          </Link>

          <Link
            href="tel:+918147826165"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#0B4EA2]"
          >
            <Phone size={18} />
            Call Now
          </Link>
        </motion.div>

      </div>
    </section>
  );
}   