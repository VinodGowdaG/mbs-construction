"use client";

import { services } from "@/data/servicesData";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            slug={service.slug}
            title={service.title}
            image={service.image}
            shortDescription={service.shortDescription}
          />
        ))}
      </div>
    </section>
  );
}