
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://mbsconstructions.com";

export const metadata: Metadata = {
  title: "Industrial Roofing Solutions Video",
  description:
    "Watch industrial roofing project work and roofing solutions from MBS Constructions in Bengaluru and Karnataka.",

  alternates: {
    canonical: `${siteUrl}/videos/roofing`,
  },

  openGraph: {
    title: "Industrial Roofing Solutions | MBS Constructions",
    description:
      "Explore industrial roofing solutions and on-site project work by MBS Constructions.",
    url: `${siteUrl}/videos/roofing`,
    type: "video.other",
    images: [
      {
        url: `${siteUrl}/images/video-thumbnails/roofing.jpg`,
        width: 1280,
        height: 720,
        alt: "MBS Constructions industrial roofing video",
      },
    ],
  },
};

export default function RoofingVideoPage() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",

    name: "Industrial Roofing Solutions | MBS Constructions",

    description:
      "Watch industrial roofing installation, roofing solutions and project work by MBS Constructions.",

    // Add the actual first publication date here when known.
    // uploadDate: "YYYY-MM-DD",

    thumbnailUrl: [
      `${siteUrl}/images/video-thumbnails/roofing.jpg`,
    ],

    contentUrl: `${siteUrl}/videos/home-slider/roofing.mp4`,

    url: `${siteUrl}/videos/roofing`,

    publisher: {
      "@type": "Organization",
      name: "MBS Constructions",
      url: siteUrl,
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Google VideoObject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Link
          href="/videos"
          className="mb-8 inline-block text-sm font-semibold text-red-600"
        >
          ← Back to Videos
        </Link>

        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl">
          Industrial Roofing Solutions
        </h1>

        <p className="mb-8 max-w-3xl leading-7 text-gray-600">
          Watch roofing project work and explore the roofing
          solutions offered by MBS Constructions.
        </p>

        <video
          controls
          playsInline
          preload="metadata"
          poster="/images/video-thumbnails/roofing.jpg"
          className="aspect-video w-full rounded-2xl bg-black shadow-xl"
        >
          <source
            src="/videos/home-slider/roofing.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-red-600 px-7 py-3 font-bold text-white hover:bg-red-700"
          >
            Enquire About Roofing
          </Link>
        </div>
      </section>
    </main>
  );
}
