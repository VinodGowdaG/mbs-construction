"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, ExternalLink } from "lucide-react";
import { videoData } from "./videoData";

export default function GalleryVideos() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D62828]">
            Project Videos
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#D62828]">
            Construction Videos
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#0B4EA2]">
            Watch our warehouse construction, PEB installation,
            roofing works, steel fabrication and drone walkthroughs.
          </p>

        </div>

        {/* Video Grid */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {videoData.map((video) => (

            <div
              key={video.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/20" />

                {/* Play Button */}

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 transition group-hover:scale-110">

                    <Play
                      size={34}
                      className="ml-1 text-[#D62828]"
                      fill="currentColor"
                    />

                  </div>

                </div>

              </div>

              <div className="p-6">

                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-[#D62828]">
                  {video.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-[#D62828]">
                  {video.title}
                </h3>

                <Link
                  href={video.url}
                  target="_blank"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0B4EA2] hover:text-[#D62828]"
                >
                  Watch Video

                  <ExternalLink size={18} />

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}