"use client";

import { motion } from "framer-motion";
import {
  User,
  MapPin,
  CalendarDays,
  Building2,
  Ruler,
} from "lucide-react";

interface Props {
  overview: string;
  description: string;
  client: string;
  location: string;
  category: string;
  area: string;
  year: string;
}

export default function ProjectOverview({
  overview,
  description,
  client,
  location,
  category,
  area,
  year,
}: Props) {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-3">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="lg:col-span-2"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4EA2]">
            Project Overview
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#D62828]">
            Built with Precision & Engineering Excellence
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#0B4EA2]">
            {overview}
          </p>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            {description}
          </p>
        </motion.div>

        {/* Right Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
        >
          <h3 className="mb-8 text-2xl font-bold text-[#D62828]">
            Project Information
          </h3>

          <div className="space-y-6">

            <Info icon={<User size={20} />} title="Client" value={client} />

            <Info icon={<MapPin size={20} />} title="Location" value={location} />

            <Info
              icon={<Building2 size={20} />}
              title="Category"
              value={category}
            />

            <Info icon={<Ruler size={20} />} title="Area" value={area} />

            <Info
              icon={<CalendarDays size={20} />}
              title="Completed"
              value={year}
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 border-b border-slate-200 pb-5 last:border-none">

      <div className="rounded-xl bg-blue-50 p-3 text-[#0B4EA2]">
        {icon}
      </div>

      <div>
        <p className="text-sm uppercase tracking-wide text-slate-500">
          {title}
        </p>

        <p className="mt-1 font-semibold text-slate-800">
          {value}
        </p>
      </div>

    </div>
  );
}