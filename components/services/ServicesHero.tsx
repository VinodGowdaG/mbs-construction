"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B4EA2] pt-40 pb-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/services/services-banner.png')] bg-cover bg-center opacity-20" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B4EA2]/95 via-[#0B4EA2]/85 to-[#D62828]/80" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white backdrop-blur"
        >
          Our Services
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2, duration: .6 }}
          className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl"
        >
          Industrial Construction
          <br />
          Solutions That Last
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .4, duration: .6 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-blue-100"
        >
          MBS Construction provides complete industrial construction
          services including Pre Engineered Buildings (PEB),
          Warehouse Construction, Civil Construction,
          Roofing Solutions, Steel Fabrication,
          and Turnkey Industrial Projects across Karnataka.
        </motion.p>
      </div>
    </section>
  );
}