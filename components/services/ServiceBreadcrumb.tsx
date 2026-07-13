"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Props {
  title: string;
}

export default function ServiceBreadcrumb({
  title,
}: Props) {
  return (
    <section className="border-b bg-slate-50">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-5 text-sm">

        <Link
          href="/"
          className="text-[#0B4EA2] hover:text-[#D62828]"
        >
          Home
        </Link>

        <ChevronRight size={16} />

        <Link
          href="/services"
          className="text-[#0B4EA2] hover:text-[#D62828]"
        >
          Services
        </Link>

        <ChevronRight size={16} />

        <span className="font-semibold text-[#D62828]">
          {title}
        </span>

      </div>
    </section>
  );
}