
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction & Roofing Videos | MBS Constructions",
  description:
    "Watch construction and roofing project videos from MBS Constructions.",
  alternates: {
    canonical: "https://mbsconstructions.com/videos",
  },
};

const videos = [
  {
    title: "Industrial Construction & Project Execution",
    description:
      "Explore construction activities and project execution by MBS Constructions.",
    thumbnail: "/images/video-thumbnails/construction.jpg",
    href: "/videos/construction",
  },
  {
    title: "Industrial Roofing Solutions",
    description:
      "Discover roofing solutions and on-site project work by MBS Constructions.",
    thumbnail: "/images/video-thumbnails/roofing.jpg",
    href: "/videos/roofing",
  },
];

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-950 px-5 py-20 text-center text-white md:py-28">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-500">
          MBS Constructions
        </p>

        <h1 className="text-4xl font-extrabold md:text-6xl">
          Our Videos
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-gray-300">
          Explore our construction and roofing project videos.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-2 md:py-20">
        {videos.map((video) => (
          <Link
            key={video.href}
            href={video.href}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl"
          >
            <div className="relative aspect-video overflow-hidden bg-gray-900">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl text-white shadow-lg">
                  ▶
                </span>
              </span>
            </div>

            <div className="p-6">
              <h2 className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">
                {video.title}
              </h2>

              <p className="text-sm leading-7 text-gray-600">
                {video.description}
              </p>

              <span className="mt-5 inline-block font-semibold text-red-600">
                Watch Video →
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
