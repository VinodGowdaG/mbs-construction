"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-[#D62828]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#D62828]">
            Our Services
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#D62828]">
            Complete Construction Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#0B4EA2]">
            MBS Construction delivers end-to-end industrial construction
            solutions including Pre-Engineered Buildings, Warehouses,
            Civil Construction, Roofing Systems, Steel Fabrication and
            Turnkey Projects across Karnataka.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}