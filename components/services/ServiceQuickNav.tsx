"use client";

import Link from "next/link";

const links = [
  { label: "Overview", href: "#overview" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Applications", href: "#applications" },
  { label: "Industries", href: "#industries" },
  { label: "Comparison", href: "#comparison" },
  { label: "FAQ", href: "#faq" },
];

export default function ServiceQuickNav() {
  return (
    <section className="sticky top-20 z-30 border-y bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl overflow-x-auto px-6">
        <div className="flex min-w-max gap-3 py-4">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-[#0B4EA2] transition hover:border-[#D62828] hover:bg-[#D62828] hover:text-white"
            >
              {link.label}
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}