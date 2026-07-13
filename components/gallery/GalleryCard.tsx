"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface GalleryCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
  button: string;
}

export default function GalleryCard({
  title,
  description,
  image,
  href,
  button,
}: GalleryCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative h-64 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Title on Image */}

        <div className="absolute bottom-6 left-6">

          <h3 className="text-3xl font-bold text-white">
            {title}
          </h3>

        </div>
      </div>

      {/* Content */}

      <div className="p-7">

        <p className="leading-7 text-[#0B4EA2]">
          {description}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 font-semibold text-[#D62828]">

          {button}

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />

        </div>

      </div>
    </Link>
  );
}