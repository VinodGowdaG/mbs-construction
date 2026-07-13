"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowUpRight, MapPin } from "lucide-react";

const projects = [
  {
    title: "Industrial Warehouse",
    location: "Bengaluru",
    image: "/images/projects/warehouse-1.png",
    href: "/projects/industrial-warehouse",
  },
  {
    title: "PEB Factory Building",
    location: "Tumakuru",
    image: "/images/projects/warehouse-2.png",
    href: "/projects/peb-factory",
  },
  {
    title: "Logistics Warehouse",
    location: "Mysuru",
    image: "/images/projects/warehouse-3.png",
    href: "/projects/logistics-warehouse",
  },
  {
    title: "Industrial Roofing",
    location: "Hubballi",
    image: "/images/projects/peb-1.png",
    href: "/projects/industrial-roofing",
  },
  {
    title: "Steel Structure",
    location: "Hassan",
    image: "/images/projects/steel-1.png",
    href: "/projects/steel-structure",
  },
];

export default function ProjectSlider() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0B4EA2]">
              Featured Projects
            </p>

            <h2 className="mt-2 text-4xl font-bold text-slate-900">
              Our Latest Projects
            </h2>
          </div>

          <button
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              projectsSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-full border border-slate-300 px-6 py-3 font-medium transition hover:border-[#0B4EA2] hover:bg-[#0B4EA2] hover:text-white"
          >
            View All
          </button>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          spaceBetween={24}
          grabCursor
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.title}
              className="!w-[320px]"
            >
              <Link
                href={project.href}
                className="group block overflow-hidden rounded-2xl bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <ArrowUpRight className="absolute right-4 top-4 h-8 w-8 rounded-full bg-white p-2 text-black opacity-0 transition group-hover:opacity-100" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-slate-600">
                    <MapPin size={16} />
                    {project.location}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}