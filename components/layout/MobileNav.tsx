"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { navigation, galleryItems } from "./navigation";

interface Props {
  pathname: string;
  mobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
}

export default function MobileNav({
  pathname,
  mobileOpen,
  setMobileOpen,
}: Props) {
  return (
    <div
      className={`overflow-hidden transition-all duration-500 lg:hidden ${
        mobileOpen
          ? "max-h-[700px] border-t bg-white"
          : "max-h-0"
      }`}
    >
      <div className="space-y-2 px-6 py-6">

        {navigation.map((item) => {

          const active =
            pathname === item.href ||
            (item.href === "/projects" &&
              pathname.startsWith("/projects"));

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-xl px-4 py-3 font-medium transition ${
                active
                  ? "bg-red-50 text-[#D62828]"
                  : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              {item.name}
            </Link>
          );
        })}

        <div className="my-5 border-t" />

        <h3 className="mb-3 font-semibold text-[#D62828]">
          Gallery
        </h3>

        {galleryItems.map((item) => {

          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                pathname === item.href
                  ? "bg-red-50 text-[#D62828]"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Icon size={18} />

              <span>{item.name}</span>
            </Link>
          );
        })}

        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className="mt-6 block rounded-full bg-[#D62828] py-3 text-center font-semibold text-white transition hover:bg-red-700"
        >
          Get Free Quote
        </Link>

      </div>
    </div>
  );
}