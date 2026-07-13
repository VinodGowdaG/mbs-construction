"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Project {
  slug: string;
  title: string;
}

interface Props {
  currentSlug: string;
  projects: Project[];
}

export default function ProjectNavigation({
  currentSlug,
  projects,
}: Props) {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentSlug
  );

  const previous =
    currentIndex > 0 ? projects[currentIndex - 1] : null;

  const next =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  return (
    <section className="border-t border-slate-200 py-16">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row">

        {/* Previous */}
        <div className="flex-1">
          {previous && (
            <Link
              href={`/projects/${previous.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-6 transition hover:border-[#D62828] hover:shadow-lg"
            >
              <ArrowLeft
                size={28}
                className="text-[#D62828]"
              />

              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Previous Project
                </p>

                <h3 className="mt-1 text-xl font-bold text-[#0B4EA2] group-hover:text-[#D62828]">
                  {previous.title}
                </h3>
              </div>
            </Link>
          )}
        </div>

        {/* Next */}
        <div className="flex-1">
          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex items-center justify-end gap-4 rounded-2xl border border-slate-200 p-6 text-right transition hover:border-[#D62828] hover:shadow-lg"
            >
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Next Project
                </p>

                <h3 className="mt-1 text-xl font-bold text-[#0B4EA2] group-hover:text-[#D62828]">
                  {next.title}
                </h3>
              </div>

              <ArrowRight
                size={28}
                className="text-[#D62828]"
              />
            </Link>
          )}
        </div>

      </div>
    </section>
  );
}