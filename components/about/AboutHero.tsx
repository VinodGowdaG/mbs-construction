"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

import { aboutData } from "@/data/aboutData";

export default function AboutHero() {
  const { hero } = aboutData;

  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <div className="relative h-[85vh] min-h-[650px] w-full">

        <Image
          src={hero.image}
          alt={hero.title}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B4EA2]/90 via-[#0B4EA2]/75 to-black/70" />

        {/* Decorative Blur */}

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#D62828]/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />

        {/* Content */}

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">

          <div className="max-w-4xl">

            <motion.span
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md"
            >
              About MBS Construction
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl"
            >
              {hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-8 max-w-3xl text-lg leading-8 text-white/90 md:text-xl"
            >
              {hero.subtitle}
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-12 flex flex-wrap gap-5"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#D62828] px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-red-700"
              >
                View Projects

                <ArrowRight size={20} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-[#0B4EA2]"
              >
                <Phone size={18} />

                Contact Us
              </Link>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Floating Cards */}

      <div className="relative -mt-20 z-20 mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4">

        {aboutData.stats.map((item) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl"
          >
            <h3 className="text-4xl font-bold text-[#D62828]">
              {item.value}
            </h3>

            <p className="mt-3 font-medium text-[#0B4EA2]">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}