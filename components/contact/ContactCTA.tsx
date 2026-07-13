"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden">

      <div className="relative h-[550px]">

        <Image
          src="/images/contact/contact-cta.png"
          alt="MBS Construction"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B4EA2]/95 via-[#0B4EA2]/80 to-black/80" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-white"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
              Let's Build Together
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Ready to Start Your
              <span className="block text-[#FF4D4F]">
                Next Industrial Project?
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/90">
              Whether you need a Pre-Engineered Building, industrial warehouse,
              factory building, roofing solution, or a complete turnkey project,
              MBS Construction is ready to deliver quality, reliability, and
              excellence.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/contact#contact-form"
                className="inline-flex items-center gap-3 rounded-full bg-[#D62828] px-8 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Get Free Quote
                <ArrowRight size={20} />
              </Link>

              <Link
                href="tel:+918147826165"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#0B4EA2]"
              >
                <Phone size={20} />
                Call +91 8147826165
              </Link>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}