"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function CTA() {
  const whatsappMessage = `Hello MBS Construction, I would like a free quote for my project.\nName: \nLocation: \nProject details:`;
  return (
    <section id="contact" className="relative overflow-hidden py-24">

      {/* Background Image */}

      <div className="absolute inset-0">

        <Image
          src="/images/cta/cta-bg.png"
          alt="MBS Construction"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-slate-950/80" />

      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >

          <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Let&apos;s Build Together
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
            Ready To Build Your
            <br />

            <span className="text-[#D62828]">
              Next Industrial Project?
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Whether it&apos;s a warehouse, PEB structure, industrial shed,
            civil construction or complete roofing solution,
            MBS Construction delivers quality that lasts.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

            <Link
              href={`https://wa.me/918147826165?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-[#D62828] px-8 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Get Free Quote

              <ArrowRight size={18} />
            </Link>

            <Link
              href="https://wa.me/918147826165"
              target="_blank"
              className="flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              <MessageCircle size={18} />

              WhatsApp Us
            </Link>

          </div>

          {/* Contact */}

          <div className="mt-14 flex flex-wrap items-center justify-center gap-10">

            <div className="flex items-center gap-3 text-white">

              <Phone size={22} />

              <div>

                <p className="text-sm text-slate-300">
                  Call Us
                </p>

                <h3 className="text-xl font-bold">
                  <a href="tel:+918147826165" className="hover:underline">+91 81478 26165</a>
                </h3>

              </div>

            </div>

            <div className="h-10 w-px bg-white/20 hidden md:block" />

            <div className="text-white">

              <p className="text-sm text-slate-300">
                Quick Response
              </p>

              <h3 className="text-xl font-bold">
                Within 24 Hours
              </h3>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}