"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

const services = [
  "Pre-Engineered Buildings",
  "Warehouse Construction",
  "Civil Construction",
  "Roofing Solutions",
  "Steel Fabrication",
  "Turnkey Projects",
];

export default function ContactForm() {
  return (
    <section
      id="contact-form"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B4EA2]">
              Request a Quote
            </span>

            <h2 className="mt-5 text-5xl font-bold text-[#D62828]">
              Tell Us About Your Project
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Planning a warehouse, PEB building, industrial shed, roofing
              project, or complete turnkey solution? Fill out the form and our
              experts will get back to you with the best solution.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-[#D62828]" />
                <p className="text-slate-700">
                  Free consultation and project discussion
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-[#D62828]" />
                <p className="text-slate-700">
                  Customized quotation based on your requirements
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-[#D62828]" />
                <p className="text-slate-700">
                  Expert guidance from experienced engineers
                </p>
              </div>

            </div>

          </motion.div>

          {/* Form */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-8 shadow-2xl"
          >

            <div className="grid gap-6 md:grid-cols-2">

              <input
                type="text"
                placeholder="Full Name"
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#0B4EA2]"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#0B4EA2]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#0B4EA2]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#0B4EA2]"
              />

            </div>

            <select
              className="mt-6 w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#0B4EA2]"
              defaultValue=""
            >
              <option value="" disabled>
                Select Service
              </option>

              {services.map((service) => (
                <option
                  key={service}
                  value={service}
                >
                  {service}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Project Location"
              className="mt-6 w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#0B4EA2]"
            />

            <textarea
              rows={6}
              placeholder="Tell us about your project..."
              className="mt-6 w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#0B4EA2]"
            />

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#D62828] px-8 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Send Inquiry

              <Send size={18} />
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}