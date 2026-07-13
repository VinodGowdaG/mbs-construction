"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ImageIcon,
  PlayCircle,
  FileText,
  FolderOpen,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Clients", href: "/#clients" }, 
  { name: "Contact", href: "/contact" },
];

const galleryItems = [
  {
    name: "Images",
    href: "/gallery/images",
    icon: ImageIcon,
  },
  {
    name: "Videos",
    href: "/gallery/videos",
    icon: PlayCircle,
  },
  {
    name: "Brochures",
    href: "/gallery/brochures",
    icon: FileText,
  },
  {
    name: "Categories",
    href: "/gallery/categories",
    icon: FolderOpen,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "home",
        "about",
        "services",
        "projects",
        "clients",
        "contact",
      ];

      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop - 120;

          if (window.scrollY >= top) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (href: string) => {
  const isProjectsPage =
    href === "/projects" && pathname === "/projects";

  const section = href.replace("/#", "").replace("#", "");

  const isActive =
    isProjectsPage || activeSection === section;

  return `relative px-1 py-2 font-semibold transition-all duration-300
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:bg-[#D62828]
  after:transition-all after:duration-300
  ${
    isActive
      ? "text-[#D62828] after:w-full"
      : scrolled
      ? "text-slate-800 hover:text-[#D62828] after:w-0 hover:after:w-full"
      : "text-white hover:text-red-400 after:w-0 hover:after:w-full"
  }`;
};
    return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 py-3 shadow-xl backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href="#home">
          <Image
            src="/images/logo.png"
            alt="MBS Construction"
            width={220}
            height={70}
            priority
            className="h-auto w-[180px] lg:w-[220px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkClass(item.href)}
            >
              {item.name}
            </Link>
          ))}
          {/* Gallery Dropdown */}
<div className="group relative">

  <button
    className={`flex items-center gap-1 font-semibold transition ${
      scrolled
        ? "text-slate-800 hover:text-[#D62828]"
        : "text-white hover:text-red-400"
    }`}
  >
    Gallery
    <ChevronDown
      size={16}
      className="transition group-hover:rotate-180"
    />
  </button>

  {/* Invisible Hover Bridge */}
  <div className="absolute left-0 top-full h-4 w-full"></div>

  {/* Dropdown */}
  <div
    className="
      absolute
      left-1/2
      top-full
      z-[9999]
      mt-4
      w-80
      -translate-x-1/2
      rounded-2xl
      border
      border-slate-200
      bg-white
      shadow-2xl

      invisible
      opacity-0
      translate-y-2
      transition-all
      duration-300

      group-hover:visible
      group-hover:opacity-100
      group-hover:translate-y-0
      pointer-events-none
      group-hover:pointer-events-auto
    "
  >
    {galleryItems.map((item) => {
      const Icon = item.icon;

      return (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center gap-4 border-b border-slate-100 px-5 py-4 transition hover:bg-blue-50 last:border-none"
        >
          <Icon
            size={20}
            className="text-[#D62828]"
          />

          <div>
            <h4 className="font-semibold text-slate-800">
              {item.name}
            </h4>

            <p className="text-sm text-slate-500">
              {item.name === "Images" && "Browse completed project photos"}
              {item.name === "Videos" && "Watch construction videos"}
              {item.name === "Brochures" && "Download company catalogues"}
              {item.name === "Categories" && "Explore project types"}
            </p>
          </div>
        </Link>
      );
    })}
  </div>

</div>

          
        </nav>

        {/* Get Quote Button */}
        <Link
          href="#contact"
          className="hidden rounded-full bg-[#D62828] px-7 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-red-700 lg:block"
        >
          Get Free Quote
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[700px] border-t bg-white"
            : "max-h-0"
        }`}
      >
        <div className="space-y-1 px-6 py-6">

          {navigation.map((item) => (
            <Link
    key={item.href}
    href={item.href}
    onClick={() => setMobileOpen(false)}
    className="block rounded-lg py-3 font-medium text-slate-800 transition hover:bg-slate-100 hover:px-3"
  >
    {item.name}
  </Link>
))}

<div className="mt-4 border-t pt-4">

  <h3 className="mb-3 font-semibold text-[#D62828]">
    Gallery
  </h3>

  {galleryItems.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      onClick={() => setMobileOpen(false)}
      className="block rounded-lg py-2 pl-4 text-slate-700 transition hover:bg-slate-100"
    >
      {item.name}
    </Link>
  ))}

</div>

          <div className="my-4 border-t" />

          <h3 className="mb-2 font-semibold text-[#0B4EA2]">
            Services
          </h3>

          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 block rounded-full bg-[#D62828] py-3 text-center font-semibold text-white transition hover:bg-red-700"
          >
            Get Free Quote
          </Link>

        </div>
      </div>
    </header>
  );
}