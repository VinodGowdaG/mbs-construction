"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  previous?: {
    slug: string;
    title: string;
  };

  next?: {
    slug: string;
    title: string;
  };
}

export default function ServiceNavigation({
  previous,
  next,
}: Props) {
  return (
    <section className="py-16">
      <div className="mx-auto flex max-w-7xl justify-between px-6">

        {previous ? (
          <Link
            href={`/services/${previous.slug}`}
            className="rounded-2xl border px-8 py-6 transition hover:bg-slate-100"
          >
            <ArrowLeft className="mb-3" />

            <p className="text-sm text-slate-500">
              Previous Service
            </p>

            <h3 className="font-bold text-[#D62828]">
              {previous.title}
            </h3>

          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/services/${next.slug}`}
            className="rounded-2xl border px-8 py-6 text-right transition hover:bg-slate-100"
          >
            <ArrowRight className="mb-3 ml-auto" />

            <p className="text-sm text-slate-500">
              Next Service
            </p>

            <h3 className="font-bold text-[#D62828]">
              {next.title}
            </h3>

          </Link>
        ) : (
          <div />
        )}

      </div>
    </section>
  );
}