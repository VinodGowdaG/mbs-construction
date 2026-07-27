"use client";

import { motion } from "framer-motion";
import {
  Hammer,
  Building2,
  MapPin,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: Hammer,
    number: "12+",
    title: "Active Projects",
  },
  {
    icon: Building2,
    number: "5.2 Lakh",
    title: "Sq.ft Under Construction",
  },
  {
    icon: MapPin,
    number: "8",
    title: "Cities",
  },
  {
    icon: Clock3,
    number: "68%",
    title: "Average Progress",
  },
];

export default function OngoingProjectStats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <Icon
                  size={42}
                  className="mb-5 text-[#D62828]"
                />

                <h3 className="text-4xl font-bold text-[#D62828]">
                  {item.number}
                </h3>

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