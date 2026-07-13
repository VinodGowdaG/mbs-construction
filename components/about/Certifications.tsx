"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  ShieldCheck,
  HardHat,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";

const certifications = [
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description:
      "Every project follows strict quality control standards using premium materials and proven construction practices.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Standards",
    description:
      "We prioritize worker safety and maintain industry-standard safety protocols on every project.",
  },
  {
    icon: HardHat,
    title: "Experienced Engineers",
    description:
      "Our qualified engineers and supervisors ensure precise planning, execution, and project management.",
  },
  {
    icon: Wrench,
    title: "Modern Equipment",
    description:
      "Advanced machinery and construction technologies help us deliver efficient and durable structures.",
  },
  {
    icon: Trophy,
    title: "Engineering Excellence",
    description:
      "Our focus on innovation and technical expertise ensures long-lasting industrial infrastructure.",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description:
      "Transparent communication, timely delivery, and reliable support have earned the trust of our clients.",
  },
];

export default function Certifications() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B4EA2]">
            Our Commitment
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#D62828]">
            Quality & Excellence
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We continuously improve our processes to deliver reliable,
            high-quality, and safe construction solutions for every client.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg transition hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B4EA2]/10">
                  <Icon size={32} className="text-[#D62828]" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#D62828]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}