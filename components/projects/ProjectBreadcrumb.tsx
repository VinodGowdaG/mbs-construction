"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Props {
  title: string;
}

export default function ProjectBreadcrumb({ title }: Props) {
  return (
    <div className="mb-10">
      <nav className="flex flex-wrap items-center gap-2 text-sm">

        <Link
          href="/"
          className="flex items-center gap-1 text-slate-500 transition hover:text-[#D62828]"
        >
          <Home size={16} />
          Home
        </Link>

        <ChevronRight
          size={16}
          className="text-slate-400"
        />

        <Link
          href="/projects"
          className="text-slate-500 transition hover:text-[#D62828]"
        >
          Projects
        </Link>

        <ChevronRight
          size={16}
          className="text-slate-400"
        />

        <span className="font-semibold text-[#D62828]">
          {title}
        </span>

      </nav>
    </div>
  );
}