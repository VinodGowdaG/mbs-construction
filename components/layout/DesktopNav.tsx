"use client";

import Link from "next/link";

import Logo from "./Logo";
import GalleryDropdown from "./GalleryDropdown";
import { navigation } from "./navigation";

interface Props {
  pathname: string;
  navbarSolid: boolean;
}

export default function DesktopNav({
  pathname,
  navbarSolid,
}: Props) {
  return (
    <>
      <Logo navbarSolid={navbarSolid} />

      <nav className="hidden items-center gap-8 lg:flex">

        {navigation.map((item) => {

          const active =
            pathname === item.href ||
            (item.href === "/projects" &&
              pathname.startsWith("/projects"));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative font-semibold transition ${
                active
                  ? "text-[#D62828]"
                  : navbarSolid
                  ? "text-slate-800 hover:text-[#D62828]"
                  : "text-white hover:text-red-400"
              }`}
            >
              {item.name}
            </Link>
          );
        })}

        <GalleryDropdown
          pathname={pathname}
          navbarSolid={navbarSolid}
        />
      </nav>

      <Link
        href="/contact"
        className="hidden rounded-full bg-[#D62828] px-7 py-3 font-semibold text-white transition hover:bg-red-700 lg:block"
      >
        Get Free Quote
      </Link>
    </>
  );
}