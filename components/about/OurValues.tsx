"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Lightbulb,
  HardHat,
  HeartHandshake,
  Clock3,
} from "lucide-react";

const values = [
  {
    title: "Quality",
    description:
      "We deliver every project with superior craftsmanship, premium materials, and strict quality standards.",
    icon: ShieldCheck,
  },
  {
    title: "Integrity",
    description:
      "Honesty, transparency, and ethical practices are the foundation of every client relationship.",
    icon: BadgeCheck,
  },
  {
    title: "Innovation",
    description:
      "We embrace modern construction technologies and innovative engineering solutions.",
    icon: Lightbulb,
  },
  {
    title: "Safety",
    description:
      "Safety is our highest priority, ensuring secure work environments and compliance with industry standards.",
    icon: HardHat,
  },
  {
    title: "Customer Satisfaction",
    description:
      "Understanding client requirements and exceeding expectations is our ultimate goal.",
    icon: HeartHandshake,
  },
  {
    title: "Timely Delivery",
    description:
      "Efficient planning and execution help us complete projects on schedule without compromising quality.",
    icon: Clock3,
  },
];

export default function OurValues() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B4EA2]">
            Our Core Values
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#D62828]">
            What Drives Us Every Day
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Our values guide every decision we make, every structure we build,
            and every relationship we create with our clients.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B4EA2]/10 transition group-hover:bg-[#D62828]/10">

                  <Icon
                    className="text-[#D62828]"
                    size={32}
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#D62828]">
                  {value.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {value.description}
                </p>

                <div className="mt-8 h-1 w-20 rounded-full bg-[#0B4EA2] transition-all group-hover:w-full" />

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}