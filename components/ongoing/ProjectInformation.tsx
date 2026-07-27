"use client";

import {
  Building2,
  User,
  HardHat,
  MapPinned,
  Warehouse,
  Square,
  Shield,
  Hammer,
  Layers,
  Truck,
} from "lucide-react";

import type { OngoingProject } from "@/data/ongoingProjectsData";

interface Props {
  project: OngoingProject;
}

export default function ProjectInformation({ project }: Props) {
  const details = [
    {
      icon: Building2,
      title: "Client",
      value: project.client,
    },
    {
      icon: User,
      title: "Consultant",
      value: project.consultant,
    },
    {
      icon: HardHat,
      title: "Project Manager",
      value: project.projectManager,
    },
    {
      icon: MapPinned,
      title: "Site Engineer",
      value: project.siteEngineer,
    },
    {
      icon: Warehouse,
      title: "Project Type",
      value: project.projectType,
    },
    {
      icon: Square,
      title: "Project Area",
      value: project.area,
    },
    {
      icon: Shield,
      title: "Structure",
      value: project.structure,
    },
    {
      icon: Layers,
      title: "Roofing",
      value: project.roofing,
    },
  ];

  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0B4EA2]">
            Project Specifications
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#D62828]">
            Project Information
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-[#0B4EA2]">
            Complete technical information and construction specifications
            for this ongoing project.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {details.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#D62828] hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D62828]/10">

                  <Icon
                    size={28}
                    className="text-[#D62828]"
                  />

                </div>

                <p className="text-sm uppercase tracking-wider text-slate-500">
                  {item.title}
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#0B4EA2]">
                  {item.value}
                </h3>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}