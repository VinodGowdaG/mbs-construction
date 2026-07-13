"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function ProjectsHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/projects/project-hero.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#0B4EA2]/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#D62828]/30 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Breadcrumb */}
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-5 text-sm uppercase tracking-[0.3em] text-red-400"
        >
          Home / Projects
        </motion.p>

        {/* Badge */}
        <motion.div
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md"
        >
          <Building2 size={18} />
          Our Completed Projects
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl"
        >
          Engineering
          <span className="block bg-gradient-to-r from-[#0B4EA2] via-white to-[#D62828] bg-clip-text text-transparent">
            Excellence
          </span>
          In Every Project
        </motion.h1>

        {/* Description */}
        <motion.p
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 max-w-3xl text-lg leading-9 text-slate-200"
        >
          Explore our portfolio of completed industrial warehouses,
          Pre-Engineered Buildings (PEB), factory sheds, steel
          structures, roofing systems, and turnkey construction
          projects delivered across Karnataka.
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-wrap gap-5"
        >
          <Link
            href="/#contact"
            className="group inline-flex items-center rounded-full bg-[#D62828] px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-red-700"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
          </Link>

          <Link
            href="/gallery/images"
            className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-slate-900"
          >
            View Gallery
          </Link>
        </motion.div>

      </div>
    </section>
  );
}