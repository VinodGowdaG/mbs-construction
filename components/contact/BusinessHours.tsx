"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  CalendarDays,
  PhoneCall,
  Headset,
} from "lucide-react";

const schedule = [
  {
    day: "Monday",
    time: "9:00 AM – 6:00 PM",
  },
  {
    day: "Tuesday",
    time: "9:00 AM – 6:00 PM",
  },
  {
    day: "Wednesday",
    time: "9:00 AM – 6:00 PM",
  },
  {
    day: "Thursday",
    time: "9:00 AM – 6:00 PM",
  },
  {
    day: "Friday",
    time: "9:00 AM – 6:00 PM",
  },
  {
    day: "Saturday",
    time: "9:00 AM – 5:00 PM",
  },
  {
    day: "Sunday",
    time: "Closed",
  },
];

export default function BusinessHours() {
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
            Office Schedule
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#D62828]">
            Business Hours
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We're available throughout the week to discuss your construction
            projects and provide expert guidance.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Working Hours */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-10 shadow-xl"
          >
            <div className="mb-8 flex items-center gap-4">
              <Clock3
                size={36}
                className="text-[#D62828]"
              />

              <h3 className="text-3xl font-bold text-[#0B4EA2]">
                Working Hours
              </h3>
            </div>

            <div className="space-y-5">

              {schedule.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-5"
                >
                  <span className="font-semibold text-slate-700">
                    {item.day}
                  </span>

                  <span
                    className={`font-bold ${
                      item.time === "Closed"
                        ? "text-red-600"
                        : "text-[#0B4EA2]"
                    }`}
                  >
                    {item.time}
                  </span>
                </div>
              ))}

            </div>

          </motion.div>

          {/* Contact Highlights */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            <div className="rounded-3xl bg-[#0B4EA2] p-8 text-white shadow-xl">

              <PhoneCall size={40} />

              <h3 className="mt-6 text-3xl font-bold">
                Quick Response
              </h3>

              <p className="mt-4 leading-8 text-white/90">
                Our team aims to respond to all inquiries within one business
                day.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl">

              <CalendarDays
                size={40}
                className="text-[#D62828]"
              />

              <h3 className="mt-6 text-3xl font-bold text-[#0B4EA2]">
                Site Visits
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Need an on-site consultation? Contact us to schedule a project
                inspection and discuss your requirements.
              </p>

            </div>

            <div className="rounded-3xl bg-[#D62828] p-8 text-white shadow-xl">

              <Headset size={40} />

              <h3 className="mt-6 text-3xl font-bold">
                Project Support
              </h3>

              <p className="mt-4 leading-8 text-white/90">
                From planning and design to project completion, we're here to
                support you at every stage.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}