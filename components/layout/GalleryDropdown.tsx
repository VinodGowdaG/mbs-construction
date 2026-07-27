"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { galleryItems } from "./navigation";

interface Props {
  navbarSolid: boolean;
  pathname: string;
}

export default function GalleryDropdown({
  navbarSolid,
  pathname,
}: Props) {
  const isGallery =
    pathname.startsWith("/gallery");

  return (
    <div className="group relative">

      <button
        className={`flex items-center gap-1 font-semibold transition ${
          isGallery
            ? "text-[#D62828]"
            : navbarSolid
            ? "text-slate-800 hover:text-[#D62828]"
            : "text-white hover:text-red-400"
        }`}
      >
        Gallery

        <ChevronDown
          size={16}
          className="transition group-hover:rotate-180"
        />
      </button>

      <div className="absolute left-0 top-full h-4 w-full" />

      <div
        className="
        invisible
        absolute
        left-1/2
        top-full
        z-50
        mt-4
        w-80
        -translate-x-1/2
        translate-y-2
        rounded-2xl
        border
        border-slate-200
        bg-white
        opacity-0
        shadow-2xl
        transition-all
        duration-300
        group-hover:visible
        group-hover:translate-y-0
        group-hover:opacity-100
      "
      >
        {galleryItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 border-b border-slate-100 px-5 py-4 transition last:border-none ${
                active
                  ? "bg-red-50"
                  : "hover:bg-blue-50"
              }`}
            >
              <Icon
                size={20}
                className="text-[#D62828]"
              />

              <div>
                <h4 className="font-semibold text-slate-800">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {item.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
}