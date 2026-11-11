
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://mbsconstructions.com";

export const metadata: Metadata = {
  title: "Industrial Construction Video",
  description:
    "Watch industrial construction work and project execution by MBS Constructions in Bengaluru and Karnataka.",
  alternates: {
    canonical: `${siteUrl}/videos/construction`,
  },
  openGraph: {
    title: "Industrial Construction & Project Execution | MBS Constructions",
    description:
      "Explore industrial construction activities and project execution by MBS Constructions.",
    url: `${siteUrl}/videos/construction`,
    type: "video.other",
    images: [
      {
        url: `${siteUrl}/images/video-thumbnails/construction.jpg`,
        width: 1280,
        height: 720,
        alt: "MBS Constructions industrial construction video",
      },
    ],
  },
};

export default function ConstructionVideoPage() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Industrial Construction & Project Execution | MBS Constructions",
    description:
      "Watch industrial construction work and project execution by MBS Constructions.",
      uploadDate: "2026-11-11",
    thumbnailUrl: [
      `${siteUrl}/images/video-thumbnails/construction.jpg`,
    ],
    contentUrl: `${siteUrl}/videos/home-slider/construction.mp4`,
    url: `${siteUrl}/videos/construction`,
    publisher: {
      "@type": "Organization",
      name: "MBS Constructions",
      url: siteUrl,
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoSchema).replace(/</g, "\\u003c"),
        }}
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
          Industrial Construction & Project Execution
        </h1>

        <p className="mb-8 max-w-3xl text-gray-600">
          Explore construction work and project execution
          by MBS Constructions.
        </p>

        <video
          controls
          playsInline
          preload="metadata"
          poster="/images/video-thumbnails/construction.jpg"
          className="aspect-video w-full rounded-xl bg-black shadow-xl"
        >
          <source
            src="/videos/home-slider/construction.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>

        <Link
          href="/projects"
          className="mt-8 inline-flex rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
        >
          Explore Our Projects
        </Link>
      </section>
    </main>
  );
}
