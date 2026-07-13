"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import GalleryLightbox from "./GalleryLightbox";

interface Props {
  title: string;
  gallery: string[];
}

export default function ProjectGallery({
  title,
  gallery,
}: Props) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

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
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4EA2]">
            Project Gallery
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#D62828]">
            Construction Gallery
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-[#0B4EA2]">
            A glimpse of our completed work showcasing quality workmanship,
            modern engineering, and precision construction.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {gallery.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setCurrent(index);
                setOpen(true);
              }}
              className="group relative h-80 cursor-pointer overflow-hidden rounded-3xl shadow-xl"
            >
              <Image
                src={image}
                alt={`${title} ${index + 1}`}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="absolute bottom-5 left-5 translate-y-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#D62828] backdrop-blur">
                  View Image
                </span>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Lightbox */}
        {open && (
          <GalleryLightbox
            images={gallery}
            current={current}
            onClose={() => setOpen(false)}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}

      </div>
    </section>
  );
}