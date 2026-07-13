"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Award,
  Building2,
  Clock3,
  ShieldCheck,
  HardHat,
  Wrench,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Proven Experience",
    description: "Over a decade of delivering successful industrial and commercial construction projects.",
  },
  {
    icon: Building2,
    title: "Complete Turnkey Solutions",
    description: "From planning and design to execution and final handover under one roof.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description: "Efficient project management ensures timely completion without compromising quality.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description: "We use high-grade materials and follow strict quality control standards.",
  },
  {
    icon: HardHat,
    title: "Safety First",
    description: "Every project follows industry-standard safety practices for workers and clients.",
  },
  {
    icon: Wrench,
    title: "Modern Technology",
    description: "Advanced equipment and engineering methods for durable and efficient structures.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Dedicated architects, engineers, supervisors, and skilled technicians.",
  },
  {
    icon: CheckCircle2,
    title: "Customer Satisfaction",
    description: "Long-term relationships built on trust, transparency, and excellent service.",
  },
];

export default function WhyChooseMBS() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Image */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/images/about/why-choose-mbs.png"
              alt="Why Choose MBS Construction"
              width={700}
              height={750}
              className="h-[720px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Card */}

          <div className="absolute -bottom-8 left-8 rounded-3xl bg-[#D62828] p-8 text-white shadow-2xl">
            <h3 className="text-4xl font-bold">250+</h3>
            <p className="mt-2 uppercase tracking-widest text-sm">
              Projects Delivered
            </p>
          </div>
        </motion.div>

        {/* Right Content */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B4EA2]">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-[#D62828]">
            Building Trust Through
            <br />
            Engineering Excellence
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            MBS Construction combines technical expertise, modern construction
            practices, and a customer-first approach to deliver durable,
            cost-effective, and high-quality infrastructure solutions across
            Karnataka.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">

            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  className="flex gap-4 rounded-2xl bg-white p-5 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B4EA2]/10">
                    <Icon className="text-[#D62828]" size={28} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#0B4EA2]">
                      {reason.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </motion.div>

      </div>
    </section>
  );
}