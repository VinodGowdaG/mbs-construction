
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

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  // Automatically advance image and video slides.
  useEffect(() => {
    const duration =
      slides[current].type === "video" ? 20000 : 7000;

    const timer = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [current]);

  return (
    <section
      id="media-slider"
      aria-label="MBS Constructions project showcase"
      className="
        relative w-full overflow-hidden bg-black text-white
        h-[100svh] min-h-[480px]
        md:h-[85svh] md:min-h-[600px]
        lg:h-[100svh]
      "
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
            className="
              absolute inset-0 h-full w-full
              object-cover object-center
            "
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
            className="
              absolute inset-0 h-full w-full
              object-cover object-center
            "
          />
        )}
      </div>

      {/* DARK OVERLAY - IMAGE SLIDES ONLY */}
      {activeSlide.type === "image" && (
        <>
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/85 via-black/45 to-black/20
              md:bg-gradient-to-r
              md:from-black/80 md:via-black/45 md:to-black/10
            "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/40 via-transparent to-black/10
            "
          />
        </>
      )}

      {/* TEXT CONTENT - IMAGE SLIDES ONLY */}
      {activeSlide.type === "image" && (
        <div
          className="
            relative z-10 mx-auto flex h-full w-full
            max-w-7xl items-center
            px-6 pt-20 pb-28
            sm:px-10
            md:px-16 md:pt-16 md:pb-20
            lg:px-20
          "
        >
          <div className="w-full max-w-3xl">
            {/* TAG */}
            <span
              className="
                mb-4 inline-block rounded-full bg-red-600
                px-3 py-2 text-[9px] font-bold
                tracking-[1.5px]
                sm:px-4 sm:text-[10px]
                sm:tracking-[2px]
                md:mb-6 md:px-5 md:text-xs
                md:tracking-[3px]
              "
            >
              {activeSlide.tag}
            </span>

            {/* TITLE */}
            <h2
              key={activeSlide.title}
              className="
                mb-4 max-w-3xl font-extrabold
                leading-[1.12] tracking-tight
                text-[clamp(1.75rem,7vw,2.5rem)]
                sm:text-4xl
                md:mb-6 md:text-5xl
                lg:text-6xl xl:text-7xl
              "
            >
              {activeSlide.title}
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mb-6 max-w-xl text-sm
                leading-6 text-white/90
                sm:text-base sm:leading-7
                md:mb-9 md:text-lg md:leading-8
              "
            >
              {activeSlide.description}
            </p>

            {/* BUTTON */}
            <a
              href={activeSlide.buttonLink}
              className="
                inline-flex min-h-11 items-center
                justify-center gap-3 rounded-full
                bg-red-600 px-5 py-3
                text-xs font-bold text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-white hover:text-red-600
                sm:px-7 sm:text-sm
                md:px-8 md:py-4
              "
            >
              {activeSlide.buttonText}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      )}

      {/* PREVIOUS BUTTON */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="
          absolute bottom-20 left-5 z-20
          flex h-11 w-11 items-center
          justify-center rounded-full
          border border-white/40 bg-black/40
          text-lg transition hover:bg-red-600
          md:bottom-auto md:left-5 md:top-1/2
          md:h-12 md:w-12 md:-translate-y-1/2
          lg:left-8 lg:h-14 lg:w-14
        "
      >
        &#10094;
      </button>

      {/* NEXT BUTTON */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="
          absolute bottom-20 right-5 z-20
          flex h-11 w-11 items-center
          justify-center rounded-full
          border border-white/40 bg-black/40
          text-lg transition hover:bg-red-600
          md:bottom-auto md:right-5 md:top-1/2
          md:h-12 md:w-12 md:-translate-y-1/2
          lg:right-8 lg:h-14 lg:w-14
        "
      >
        &#10095;
      </button>

      {/* BOTTOM SLIDE INDICATORS */}
      <div
        className="
          absolute bottom-8 left-0 right-0
          z-20 flex items-center
          justify-center gap-3
          md:bottom-9
        "
      >
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={
              current === index ? "true" : undefined
            }
            className="
              flex h-8 items-center justify-center
            "
          >
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-10 bg-red-600"
                  : "w-3 bg-white/60 hover:bg-white"
              }`}
            />
          </button>
        ))}
      </div>

      {/* SLIDE COUNTER - DESKTOP ONLY */}
      <div
        className="
          absolute bottom-8 right-8 z-20
          hidden items-center gap-3
          text-sm font-semibold lg:flex
        "
      >
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
