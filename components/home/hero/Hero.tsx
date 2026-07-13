"use client";

import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/45" />

          {/* Blue Glow */}
          <div className="absolute top-0 right-0 h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[150px]" />

          {/* Red Glow */}
          <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-red-600/20 blur-[150px]" />
        </div>

        {/* Content */}
        <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-36 pb-20 lg:px-8 lg:pt-40">
          <div className="grid w-full items-center gap-16 lg:grid-cols-2">
            <HeroContent />
            <HeroStats />
          </div>
        </div>
      </section>

      {/* Spacer for next section */}
      <section className="relative z-30 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Project Slider / Next Section */}
        </div>
      </section>
    </>
  );
}