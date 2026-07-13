"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { aboutData } from "@/data/aboutData";

export default function CompanyStory() {
  const { story } = aboutData;

  return (
    <section className="bg-white py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Image */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >

          <div className="relative overflow-hidden rounded-[32px] shadow-2xl">

            <Image
              src={story.image}
              alt={story.title}
              width={700}
              height={650}
              className="h-[620px] w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          {/* Experience Card */}

          <div className="absolute -bottom-8 -right-8 rounded-3xl bg-[#D62828] p-8 text-white shadow-2xl">

            <h3 className="text-4xl font-bold">
              10+
            </h3>

            <p className="mt-2 text-sm uppercase tracking-widest">
              Years of Experience
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
            Our Story
          </span>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-[#D62828]">
            Engineering Excellence
            <br />
            Since Day One
          </h2>

          <div className="mt-8 space-y-6">

            {story.content.map((paragraph, index) => (

              <p
                key={index}
                className="text-lg leading-8 text-slate-600"
              >
                {paragraph}
              </p>

            ))}

          </div>

          {/* Highlights */}

          <div className="mt-10 grid gap-5">

            {[
              "Premium Construction Quality",
              "Experienced Engineering Team",
              "Modern Equipment & Technology",
              "On-Time Project Delivery",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >

                <CheckCircle2
                  className="text-[#D62828]"
                  size={24}
                />

                <span className="text-lg font-medium text-[#0B4EA2]">
                  {item}
                </span>

              </div>

            ))}

          </div>

          {/* Quote */}

          <div className="mt-12 rounded-3xl border-l-4 border-[#D62828] bg-slate-50 p-8">

            <p className="text-xl italic leading-8 text-slate-700">
              "At MBS Construction, every project is more than a structure—
              it's a long-term partnership built on trust, quality, and
              engineering excellence."
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}