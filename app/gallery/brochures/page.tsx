import type { Metadata } from "next";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryBrochures from "@/components/gallery/GalleryBrochures";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Company Brochures",
  description:
    "Download MBS Construction company profile, service brochures, project catalogues and corporate documents.",

  alternates: {
    canonical: "/gallery/brochures",
  },
};

export default function BrochuresPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
          { name: "Brochures", url: "/gallery/brochures" },
        ]}
      />

      <GalleryHero
        title="Company Brochures"
        description="Download our company profile, service catalogue, project brochures and marketing materials."
      />

      <GalleryBrochures />
    </>
  );
}