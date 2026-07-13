"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import { contactData } from "@/data/contactData";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden">

      <div className="relative h-[700px]">

        <Image
          src={contactData.hero.image}
          alt={contactData.hero.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B4EA2]/90 via-[#0B4EA2]/75 to-black/70" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">

          <div className="max-w-3xl text-white">

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold uppercase tracking-[0.35em]"
            >
              Contact MBS Construction
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-5xl font-bold leading-tight md:text-7xl"
            >
              {contactData.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-white/90"
            >
              {contactData.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-5"
            >
              <Link
                href="#contact-form"
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

        </div>

      </div>

      {/* Floating Cards */}

      <div className="relative z-20 -mt-20 mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">

        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <MapPin className="mb-4 text-[#D62828]" size={36} />
          <h3 className="text-xl font-bold text-[#0B4EA2]">
            Visit Our Office
          </h3>
          <p className="mt-3 text-slate-600">
            Bengaluru, Karnataka, India
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <Phone className="mb-4 text-[#D62828]" size={36} />
          <h3 className="text-xl font-bold text-[#0B4EA2]">
            Call Us
          </h3>
          <p className="mt-3 text-slate-600">
            +91 8147826165
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <Mail className="mb-4 text-[#D62828]" size={36} />
          <h3 className="text-xl font-bold text-[#0B4EA2]">
            Email Us
          </h3>
          <p className="mt-3 text-slate-600">
            info@mbsconstruction.in
          </p>
        </div>

      </div>

    </section>
  );
}