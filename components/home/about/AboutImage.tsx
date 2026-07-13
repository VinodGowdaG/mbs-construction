"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <Image
          src="/images/about/about-main.png"
          alt="MBS Construction"
          width={700}
          height={700}
          className="h-[600px] w-full object-cover"
        />
      </div>

      {/* Floating Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="absolute -bottom-8 -right-8 hidden overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl lg:block"
      >
        <Image
          src="/images/about/about-overlay.png"
          alt="Completed Industrial Building"
          width={240}
          height={180}
          className="h-44 w-60 object-cover"
        />
      </motion.div>

      {/* Experience Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute left-6 top-6 rounded-2xl bg-[#0B4EA2] px-6 py-5 text-white shadow-xl"
      >
        <h3 className="text-4xl font-bold">10+</h3>
        <p className="mt-1 text-sm uppercase tracking-wider">
          Years Experience
        </p>
      </motion.div>

      {/* Decorative Glow */}
      <div className="absolute -left-10 -bottom-10 -z-10 h-48 w-48 rounded-full bg-blue-200 blur-3xl opacity-40" />
    </motion.div>
  );
}