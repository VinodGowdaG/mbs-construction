"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function ProjectCTA() {
  return (
    <section className="bg-[#0B4EA2] py-24">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white">
          Let's Build Together
        </span>

        <h2 className="mt-8 text-5xl font-black text-white">
          Planning Your Next Industrial Project?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
          From Pre-Engineered Buildings and warehouses to industrial sheds,
          roofing and turnkey construction, MBS Construction delivers projects
          with quality, speed and reliability.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#D62828] px-8 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            Request a Quote
            <ArrowRight size={18} />
          </Link>

          <a
            href="tel:+918147826165"
            className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0B4EA2]"
          >
            <Phone size={18} />
            Call Now
          </a>

        </div>

      </div>

    </section>
  );
}