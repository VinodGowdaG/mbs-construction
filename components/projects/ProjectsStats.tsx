"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Warehouse,
  Users,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: Building2,
    number: "100+",
    title: "Projects Completed",
  },
  {
    icon: Warehouse,
    number: "2M+",
    title: "Sq. Ft. Constructed",
  },
  {
    icon: Users,
    number: "80+",
    title: "Happy Clients",
  },
  {
    icon: Award,
    number: "10+",
    title: "Years Experience",
  },
];

export default function ProjectsStats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border bg-white p-8 text-center shadow-lg transition hover:shadow-2xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D62828]/10">
                  <Icon
                    className="text-[#D62828]"
                    size={32}
                  />
                </div>

                <h2 className="text-4xl font-bold text-[#D62828]">
                  {item.number}
                </h2>

                <p className="mt-3 text-[#0B4EA2]">
                  {item.title}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}