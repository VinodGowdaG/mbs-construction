import type { Metadata } from "next";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryVideos from "@/components/gallery/GalleryVideos";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Construction Videos",
  description:
    "Watch MBS Construction project videos featuring warehouses, Pre-Engineered Buildings (PEB), industrial sheds, roofing, steel fabrication and civil construction projects.",

  alternates: {
    canonical: "/gallery/videos",
  },
};

export default function VideosPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
          { name: "Videos", url: "/gallery/videos" },
        ]}
      />

      <GalleryHero
        title="Construction Videos"
        description="Watch our completed warehouse, PEB, roofing, steel fabrication and industrial construction project videos."
      />

      <GalleryVideos />
    </>
  );
}