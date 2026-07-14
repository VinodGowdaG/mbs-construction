import type { Metadata } from "next";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryImages from "@/components/gallery/GalleryImages";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Project Images",
  description:
    "Browse completed warehouse, PEB, roofing and industrial construction project images.",
};

export default function ImagesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
          { name: "Images", url: "/gallery/images" },
        ]}
      />

      <GalleryHero
        title="Project Images"
        description="Browse our completed warehouse, PEB, roofing, steel fabrication and industrial construction project images."
      />

      <GalleryImages />
    </>
  );
}