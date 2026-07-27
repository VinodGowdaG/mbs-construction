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

export default function ProjectProgress({ project }: Props) {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Construction Status
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#D62828]">
            Project Progress
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-[#0B4EA2]">
            Live construction progress with current execution stage and
            milestone tracking.
          </p>

        </div>

        <div className="grid gap-14 lg:grid-cols-2">

          {/* Progress Card */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <div className="mb-8 flex items-center justify-between">

              <h3 className="text-3xl font-bold text-[#D62828]">
                Overall Progress
              </h3>

              <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
                {project.progress}%
              </span>

            </div>

            <div className="h-5 overflow-hidden rounded-full bg-slate-200">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${project.progress}%`,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                }}
                className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-600"
              />

            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">

              <div className="rounded-2xl bg-slate-50 p-6">

                <p className="text-sm uppercase text-slate-500">
                  Current Stage
                </p>

                <h4 className="mt-2 text-xl font-bold text-[#0B4EA2]">
                  {project.currentStage}
                </h4>

              </div>

              <div className="rounded-2xl bg-slate-50 p-6">

                <p className="text-sm uppercase text-slate-500">
                  Expected Completion
                </p>

                <h4 className="mt-2 text-xl font-bold text-[#0B4EA2]">
                  {project.expectedCompletion}
                </h4>

              </div>

              <div className="rounded-2xl bg-slate-50 p-6">

                <p className="text-sm uppercase text-slate-500">
                  Workers On Site
                </p>

                <h4 className="mt-2 text-xl font-bold text-[#0B4EA2]">
                  {project.workers}
                </h4>

              </div>

              <div className="rounded-2xl bg-slate-50 p-6">

                <p className="text-sm uppercase text-slate-500">
                  Start Date
                </p>

                <h4 className="mt-2 text-xl font-bold text-[#0B4EA2]">
                  {project.startDate}
                </h4>

              </div>

            </div>

          </div>

          {/* Timeline */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h3 className="mb-10 text-3xl font-bold text-[#D62828]">
              Construction Timeline
            </h3>

            <div className="space-y-8">

              {project.timeline.map((item, index) => (

                <div
                  key={index}
                  className="flex items-start gap-5"
                >

                  {item.status === "Completed" ? (
                    <CheckCircle2
                      size={28}
                      className="text-green-600"
                    />
                  ) : item.status === "In Progress" ? (
                    <Clock3
                      size={28}
                      className="text-amber-500"
                    />
                  ) : (
                    <Circle
                      size={28}
                      className="text-slate-400"
                    />
                  )}

                  <div>

                    <h4 className="font-bold text-[#0B4EA2]">
                      {item.title}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {item.date}
                    </p>

                    <span
                      className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        item.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : item.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {item.status}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}