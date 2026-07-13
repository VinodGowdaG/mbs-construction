"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-2xl">
      {/* Badge */}
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md"
      >
        <span>🏗️</span>
        Industrial Construction Experts
      </motion.div>

     {/* Heading */}
     <motion.h1
  custom={0.2}
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  className="max-w-5xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl"
>
  Building Tomorrow&apos;s
  <br />

  <span className="bg-gradient-to-r from-[#0B4EA2] via-[#3B82F6] to-[#D62828] bg-clip-text text-transparent">
    <TypeAnimation
      sequence={[
        "Warehouse Buildings",
        2000,
        "PEB Structures",
        2000,
        "Industrial Sheds",
        2000,
        "Roofing Solutions",
        2000,
        "Civil Construction",
        2000,
      ]}
      wrapper="span"
      speed={45}
      repeat={Infinity}
    />
  </span>
</motion.h1>

      {/* Description */}
      <motion.p
        custom={0.4}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mt-12 text-xl leading-9 text-slate-200"
      >
        MBS Construction specializes in{" "}
        <span className="font-semibold text-white">
          Pre-Engineered Buildings (PEB)
        </span>
        ,{" "}
        <span className="font-semibold text-white">
          Warehouse Construction
        </span>
        ,{" "}
        <span className="font-semibold text-white">
          Civil Construction
        </span>{" "}
        and{" "}
        <span className="font-semibold text-white">
          Complete Roofing Solutions
        </span>
        . We deliver durable, cost-effective, and turnkey industrial
        construction projects across Karnataka.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        custom={0.6}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a
          href="https://wa.me/918147826165?text=Hello,%20I%20would%20like%20a%20free%20quote%20for%20industrial%20construction%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center rounded-full bg-[#D62828] px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700"
        >
          Get Free Quote
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("projects");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900"
        >
          View Projects
        </a>
      </motion.div>

      {/* Trust Highlights */}
      <motion.div
        custom={0.8}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mt-10 flex flex-wrap gap-6 text-sm text-slate-200"
      >
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-red-500" />
          PRE ENGINEERED BUILDINGS (PEB)
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-red-500" />
          CIVIL CONSTRUCTION
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-red-500" />
          WAREHOUSE CONSTRUCTION
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-red-500" />
          COMPLETE ROOFING SOLUTIONS
        </div>

      </motion.div>

      {/* Client Rating */}
      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mt-8 flex items-center gap-4"
      >
        <div className="text-yellow-400 text-xl tracking-wider">
          ★★★★★
        </div>

        <div className="text-sm text-slate-300">
          Trusted by industrial clients for quality construction and on-time
          project delivery.
        </div>
      </motion.div>
    </div>
  );
}