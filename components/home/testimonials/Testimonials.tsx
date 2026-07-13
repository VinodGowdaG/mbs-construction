"use client";

import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialData";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-[#D62828]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#D62828]">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#D62828]">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#0B4EA2]">
            Our commitment to quality, timely delivery, and customer satisfaction
            has earned the trust of clients across Karnataka.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
            />
          ))}
        </div>

      </div>
    </section>
  );
}