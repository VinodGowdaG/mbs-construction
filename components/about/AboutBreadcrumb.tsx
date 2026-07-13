"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutBreadcrumb() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-5">

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 text-sm"
        >
          <Link
            href="/"
            className="flex items-center gap-2 font-medium text-slate-500 transition hover:text-[#0B4EA2]"
          >
            <Home size={16} />
            Home
          </Link>

          <ChevronRight
            size={16}
            className="text-slate-400"
          />

          <span className="font-semibold text-[#D62828]">
            About Us
          </span>
        </motion.div>

      </div>
    </section>
  );
}