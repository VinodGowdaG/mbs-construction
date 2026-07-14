import type { Metadata } from "next";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryCategories from "@/components/gallery/GalleryCategories";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Project Categories",
  description:
    "Explore MBS Construction projects categorized by warehouses, PEB structures, industrial roofing, steel fabrication and civil construction.",

  alternates: {
    canonical: "/gallery/categories",
  },
};

export default function CategoriesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
          { name: "Categories", url: "/gallery/categories" },
        ]}
      />

      <GalleryHero
        title="Project Categories"
        description="Browse our projects by warehouse construction, PEB buildings, roofing, steel fabrication and civil construction categories."
      />

      <GalleryCategories />
    </>
  );
}