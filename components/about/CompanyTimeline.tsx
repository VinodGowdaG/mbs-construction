"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Warehouse,
  Factory,
  Award,
  Hammer,
  MapPinned,
} from "lucide-react";

const timeline = [
  {
    year: "1998",
    title: "MBS GROUPS History",
    description:
      "MBS Groups has been a trusted name in the steel industry since 1998. Founded by Mr. Byre Gowda with his passion for precision steel solutions has steadily evolved into a benchmark for quality and reliability in civil construction.",
    icon: Building2,
  },
  {
    year: "2010",
    title: "MBS Constructions Founded",
    description:
      "In 2010, Mr. Manjunath H.B., the son of Mr. Byre Gowda, joined the business, bringing a new wave of energy and strategic vision.",
    icon: Warehouse,
  },
  {
    year: "2015",
    title: "PEB & Roofing Division Expansion",
    description:
      "MBS Roofing has become a leading name in customized PEB solutions, completing over 10 lakh sq. ft. of godown space — including 4 lakh sq. ft. of self-owned infrastructure.",
    icon: Factory,
  },
  {
    year: "2021",
    title: "50+ Projects Completed",
    description:
      "Reached the milestone of delivering over 50+ successful industrial and commercial construction projects.",
    icon: Award,
  },
  {
    year: "2023",
    title: "Turnkey Project Solutions",
    description:
      "Introduced complete turnkey construction services from design to project handover.",
    icon: Hammer,
  },
  {
    year: "2026",
    title: "Growing Across Karnataka",
    description:
      "Continuing to deliver innovative construction solutions for industries throughout Karnataka.",
    icon: MapPinned,
  },
];

export default function CompanyTimeline() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B4EA2]">
            Our Journey
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#D62828]">
            Company Timeline
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Every milestone reflects our dedication to engineering excellence,
            innovation, and delivering successful construction projects.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 h-full w-1 bg-[#0B4EA2]/20 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">

            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -60 : 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >
                  {/* Timeline Dot */}

                  <div className="absolute left-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[#D62828] text-white shadow-xl md:left-1/2 md:-translate-x-1/2">
                    <Icon size={26} />
                  </div>

                  {/* Card */}

                  <div
                    className={`ml-24 w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-lg md:ml-0 md:w-[45%] ${
                      isLeft
                        ? "md:mr-auto"
                        : "md:ml-auto"
                    }`}
                  >
                    <span className="rounded-full bg-[#0B4EA2]/10 px-4 py-2 text-sm font-bold text-[#0B4EA2]">
                      {item.year}
                    </span>

                    <h3 className="mt-6 text-2xl font-bold text-[#D62828]">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}