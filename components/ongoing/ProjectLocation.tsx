"use client";

import { MapPin, Navigation, Building2 } from "lucide-react";
import type { OngoingProject } from "@/data/ongoingProjectsData";

interface Props {
  project: OngoingProject;
}

export default function ProjectLocation({ project }: Props) {
  return (
    <section
      id="location"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

        {/* Map */}

        <div className="overflow-hidden rounded-3xl shadow-xl">

          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(project.location)}&output=embed`}
            width="100%"
            height="520"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />

        </div>

        {/* Details */}

        <div className="flex flex-col justify-center">

          <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#D62828] w-fit">
            Project Location
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#D62828]">
            Construction Site
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#0B4EA2]">
            Visit our ongoing construction site and monitor the progress of the
            project. The location below can also be opened directly in Google
            Maps.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex gap-4">

              <div className="rounded-2xl bg-[#D62828]/10 p-4">
                <MapPin className="text-[#D62828]" />
              </div>

              <div>
                <p className="text-sm uppercase text-slate-500">
                  Site Location
                </p>

                <h3 className="text-xl font-bold text-[#0B4EA2]">
                  {project.location}
                </h3>
              </div>

            </div>

            <div className="flex gap-4">

              <div className="rounded-2xl bg-[#D62828]/10 p-4">
                <Building2 className="text-[#D62828]" />
              </div>

              <div>
                <p className="text-sm uppercase text-slate-500">
                  Client
                </p>

                <h3 className="text-xl font-bold text-[#0B4EA2]">
                  {project.client}
                </h3>
              </div>

            </div>

          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-[#D62828] px-8 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            <Navigation size={18} />
            Open in Google Maps
          </a>

        </div>

      </div>
    </section>
  );
}