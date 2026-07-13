"use client";

import { motion } from "framer-motion";
import ClientCard from "./ClientCard";
import { clients } from "./clientsData";

export default function Clients() {
  return (
    <section id="clients" className="bg-white py-24">
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
            Trusted By
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#D62828]">
            Our Valuable Clients
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#0B4EA2]">
            We are proud to have partnered with leading industries,
            manufacturers, commercial businesses and organizations across
            Karnataka, delivering quality construction solutions with trust and
            excellence.
          </p>
        </motion.div>

        {/* Clients Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client) => (
            <ClientCard
              key={client.name}
              {...client}
            />
          ))}
        </div>

      </div>
    </section>
  );
}