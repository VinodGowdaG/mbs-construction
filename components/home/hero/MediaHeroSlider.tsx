
"use client";

import { useEffect, useState } from "react";

type Slide = {
  type: "image" | "video";
  src: string;
  title: string;
  description: string;
  tag: string;
  buttonText: string;
  buttonLink: string;
};

const slides: Slide[] = [
  {
    type: "image",
    src: "/images/home-slider/warehouse.png",
    tag: "MBS CONSTRUCTIONS",
    title: "Building Industrial Excellence",
    description:
      "Delivering innovative construction solutions with quality, strength and precision.",
    buttonText: "Explore Our Projects",
    buttonLink: "/projects",
  },
  {
    type: "video",
    src: "/videos/home-slider/construction.mp4",
    tag: "OUR EXPERTISE",
    title: "Creating Structures That Last",
    description:
      "From industrial facilities to modern commercial spaces, we build with excellence.",
    buttonText: "Discover More",
    buttonLink: "/about",
  },
  {
    type: "image",
    src: "/images/home-slider/peb-building.png",
    tag: "PRE ENGINEERED BUILDINGS",
    title: "Strong Structures. Smarter Solutions.",
    description:
      "Modern PEB solutions designed for industrial growth and performance.",
    buttonText: "Our Services",
    buttonLink: "/services",
  },
  {
    type: "video",
    src: "/videos/home-slider/roofing.mp4",
    tag: "COMPLETE ROOFING SOLUTIONS",
    title: "Quality Above Everything",
    description:
      "Reliable roofing and construction solutions built to perform.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

export default function MediaHeroSlider() {
  const [current, setCurrent] = useState(0);

  const activeSlide = slides[current];

  // NEXT SLIDE
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // PREVIOUS SLIDE
  const previousSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  // AUTOMATIC SLIDE CHANGE
  useEffect(() => {
    const duration =
      slides[current].type === "video" ? 20000 : 7000;

    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section
      id="media-slider"
      aria-label="MBS Constructions project showcase"
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-black text-white"
    >
      {/* BACKGROUND IMAGE OR VIDEO */}
      <div className="absolute inset-0">
        {activeSlide.type === "video" ? (
          <video
            key={activeSlide.src}
            autoPlay
            muted
            playsInline
            preload="metadata"
            onEnded={nextSlide}
            className="h-full w-full object-cover"
          >
            <source
              src={activeSlide.src}
              type="video/mp4"
            />
          </video>
        ) : (
          <img
            key={activeSlide.src}
            src={activeSlide.src}
            alt={activeSlide.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* DARK OVERLAY - IMAGE SLIDES ONLY */}
      {activeSlide.type === "image" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </>
      )}

      {/* TEXT CONTENT - IMAGE SLIDES ONLY */}
      {activeSlide.type === "image" && (
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-12">
          <div className="max-w-3xl">

            {/* TAG */}
            <span className="mb-6 inline-block rounded-full bg-red-600 px-5 py-2 text-xs font-bold tracking-[3px]">
              {activeSlide.tag}
            </span>

            {/* TITLE */}
            <h2
              key={activeSlide.title}
              className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl"
            >
              {activeSlide.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="mb-9 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
              {activeSlide.description}
            </p>

            {/* BUTTON */}
            <a
              href={activeSlide.buttonLink}
              className="inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-red-600"
            >
              {activeSlide.buttonText}
              <span>→</span>
            </a>

          </div>
        </div>
      )}

      {/* PREVIOUS BUTTON */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/30 text-xl transition hover:bg-red-600 sm:left-8 sm:h-14 sm:w-14"
      >
        &#10094;
      </button>

      {/* NEXT BUTTON */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/30 text-xl transition hover:bg-red-600 sm:right-8 sm:h-14 sm:w-14"
      >
        &#10095;
      </button>

      {/* BOTTOM SLIDE INDICATORS */}
      <div className="absolute bottom-9 left-0 right-0 z-20 flex items-center justify-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={
              current === index ? "true" : undefined
            }
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-10 bg-red-600"
                : "w-3 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* SLIDE COUNTER */}
      <div className="absolute bottom-8 right-8 z-20 hidden items-center gap-3 text-sm font-semibold sm:flex">
        <span className="text-xl text-white">
          {String(current + 1).padStart(2, "0")}
        </span>

        <span className="text-white/50">/</span>

        <span className="text-white/60">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

    </section>
  );
}
