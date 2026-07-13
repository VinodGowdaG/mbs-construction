"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B4EA2] py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[#D62828] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white backdrop-blur"
        >
          Let's Build Together
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
        >
          Ready To Start Your
          <br />
          Industrial Project?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-blue-100"
        >
          Whether you need a Pre Engineered Building, Warehouse,
          Roofing Solution, Civil Construction, Steel Fabrication,
          or a complete Turnkey Industrial Project, our experienced
          team is ready to deliver reliable, cost-effective, and
          high-quality solutions tailored to your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#D62828] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          <Link
            href="tel:+918147826165"
            className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-[#0B4EA2]"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Link>

          <Link
            href="https://wa.me/918147826165"
            target="_blank"
            className="inline-flex items-center rounded-full border border-green-400 bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-700"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 grid gap-8 text-white md:grid-cols-3"
        >
          <div>
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="mt-2 text-blue-100">
              Successfully Completed Projects
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="mt-2 text-blue-100">
              Years of Industry Experience
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="mt-2 text-blue-100">
              Commitment to Quality & Timely Delivery
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}