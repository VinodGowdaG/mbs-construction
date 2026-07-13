"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { services } from "@/data/servicesData";

interface Props {
  currentSlug: string;
  relatedServices: string[];
}

export default function RelatedServices({
  currentSlug,
  relatedServices,
}: Props) {
  const related = services.filter(
    (service) =>
      relatedServices.includes(service.slug) &&
      service.slug !== currentSlug
  );

  if (related.length === 0) return null;

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4EA2]">
            Explore More
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#D62828]">
            Related Services
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#0B4EA2]">
            Discover our other industrial construction services that
            perfectly complement this solution.
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {related.map((service) => (

            <motion.div
              key={service.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/services/${service.slug}`}>

                <div className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:shadow-2xl">

                  <div className="relative h-64">

                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-700 hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                      {service.title}
                    </h3>

                  </div>

                  <div className="p-8">

                    <p className="leading-8 text-[#0B4EA2]">
                      {service.shortDescription}
                    </p>

                    <div className="mt-6 inline-flex rounded-full bg-[#D62828] px-6 py-3 font-semibold text-white transition hover:bg-red-700">
                      Learn More →
                    </div>

                  </div>

                </div>

              </Link>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}