import GalleryCard from "./GalleryCard";
import { galleryMenu } from "./galleryData";

export default function GalleryMenu() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D62828]">
            Media Center
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-[#D62828] md:text-5xl">
            Explore Our Gallery
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#0B4EA2]">
            Browse project images, watch construction videos, download company
            brochures, and explore our projects by category.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {galleryMenu.map((item) => (
            <GalleryCard
              key={item.id}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}