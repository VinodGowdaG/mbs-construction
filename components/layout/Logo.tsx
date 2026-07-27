"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  navbarSolid: boolean;
}

export default function Logo({ navbarSolid }: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center"
      aria-label="MBS Construction"
    >
      <Image
        src="/images/logo.png"
        alt="MBS Construction"
        width={220}
        height={70}
        priority
        className={`h-auto transition-all duration-500 ${
          navbarSolid
            ? "w-[145px] lg:w-[170px]"
            : "w-[180px] lg:w-[220px]"
        }`}
      />
    </Link>
  );
}