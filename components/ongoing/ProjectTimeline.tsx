"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  Circle,
} from "lucide-react";

import type { OngoingProject } from "@/data/ongoingProjectsData";

interface Props {
  project: OngoingProject;
}

export default function ProjectTimeline({ project }: Props) {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Construction Timeline
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#D62828]">
            Project Milestones
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-[#0B4EA2]">
            Follow the progress of the project through every important
            construction milestone.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-slate-200" />

          <div className="space-y-12">

            {project.timeline.map((item, index) => {

              const completed =
                item.status === "Completed";

              const progress =
                item.status === "In Progress";

              const description =
                (item as { description?: string }).description;

              return (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  className="relative flex gap-8"
                >

                  {/* Icon */}

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">

                    {completed ? (
                      <CheckCircle2
                        className="text-green-600"
                        size={28}
                      />
                    ) : progress ? (
                      <Clock3
                        className="text-yellow-500"
                        size={28}
                      />
                    ) : (
                      <Circle
                        className="text-slate-400"
                        size={26}
                      />
                    )}

                  </div>

                  {/* Card */}

                  <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl">

                    <div className="flex flex-wrap items-center justify-between gap-4">

                      <h3 className="text-2xl font-bold text-[#D62828]">
                        {item.title}
                      </h3>

                      <span
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${
                          completed
                            ? "bg-green-100 text-green-700"
                            : progress
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {item.status}
                      </span>

                    </div>

                    <p className="mt-3 text-[#0B4EA2]">
                      {item.date}
                    </p>

                    {description ? (
                      <p className="mt-5 leading-8 text-slate-600">
                        {description}
                      </p>
                    ) : null}

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