"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WhyChooseCard from "./WhyChooseCard";
import CounterCard from "./CounterCard";
import { whyChooseData } from "./whyChooseData";

export default function WhyChoose() {
  return (
    <section id="why-choose" className="bg-slate-50 py-24">
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
            Why Choose MBS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#D62828]">
            Building Trust Through Quality & Excellence
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#0B4EA2]">
            We combine engineering expertise, premium materials, and timely
            execution to deliver industrial projects that stand the test of time.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div className="grid gap-6 sm:grid-cols-2">
            {whyChooseData.map((item) => (
              <WhyChooseCard key={item.title} {...item} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/images/why-choose/team.png"
              alt="MBS Construction Team"
              width={700}
              height={700}
              className="rounded-3xl shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
              <CounterCard number={10} suffix="+" label="Years Experience" />
              <CounterCard number={100} suffix="+" label="Projects Completed" />
              <CounterCard number={50} suffix="+" label="Happy Clients" />
              <CounterCard number={24} suffix="/7" label="Customer Support" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}