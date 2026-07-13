"use client";

interface Props {
  service: {
    overview: string;
  };
}

export default function ServiceOverview({
  service,
}: Props) {
  return (
    <section id="overview" className="py-24 bg-white">  

      <div className="mx-auto max-w-5xl px-6">

        <h2 className="mb-8 text-5xl font-bold text-[#D62828]">
          Service Overview
        </h2>

        <p className="text-lg leading-10 text-[#0B4EA2]">
          {service.overview}
        </p>

      </div>

    </section>
  );
}