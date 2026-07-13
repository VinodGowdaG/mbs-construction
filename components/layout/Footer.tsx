"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react"; 
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "PEB Buildings",
    "Warehouse Construction",
    "Civil Construction",
    "Roofing Solutions",
    "Steel Fabrication",
  ];

  return (
    <footer id="footer" className="relative bg-slate-950 text-white">

      {/* Top Border */}

      <div className="h-1 w-full bg-gradient-to-r from-[#0B4EA2] via-[#D62828] to-[#0B4EA2]" />

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company */}

          <div>

            <Image
              src="/images/logo-white.png"
              alt="MBS Construction"
              width={180}
              height={60}
            />

            <p className="mt-6 leading-8 text-slate-300">
              MBS Construction specializes in Pre Engineered Buildings,
              Warehouse Construction, Civil Construction, Industrial Roofing,
              and complete turnkey infrastructure solutions across Karnataka.
            </p>

          </div>

          {/* Company Links */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-[#D62828]">
              Company
            </h3>

            <ul className="space-y-4">

              {companyLinks.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="text-slate-300 transition hover:text-white"
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-[#D62828]">
              Our Services
            </h3>

            <ul className="space-y-4">

              {services.map((service) => (

                <li
                  key={service}
                  className="text-slate-300"
                >
                  {service}
                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-[#D62828]">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <Phone className="text-[#D62828]" />
                <div>
                  <p>+91 8147826165</p>
                  <p>+91 8147826167</p>
                  <p>+91 8147826169</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="text-[#D62828]" />
                <p>mbsroofings@gmail.com</p>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-[#D62828]" />
                <p>
                  Hanchipura Village,
                  <br />
                  Kunigal Road,
                  <br />
                  Nelamangala,
                  Bengaluru - 562123
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 border-t border-slate-800" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          <div className="text-slate-400">
            <p>© {year} MBS Construction. All Rights Reserved.</p>
            <p className="mt-2 text-sm">
              Developed by{" "}
              <Link
                href="https://github.com/VinodGowdaG"
                className="text-[#D62828] hover:underline"
              >
                Vinodgowda G
              </Link>
            </p>
          </div>

          {/* Social */}

          <div className="flex gap-4">

            <Link
              href="https://www.facebook.com/profile.php?id=61581771645935&sk=about"
              className="rounded-full bg-slate-800 p-3 transition hover:bg-[#D62828]"
            >
                <FaFacebookF size={18} />
            </Link>

            <Link
              href="https://www.instagram.com/mbs_roofings_and_peb/"
              className="rounded-full bg-slate-800 p-3 transition hover:bg-[#D62828]"
            >
              <FaInstagram size={18} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/mbs-groups-a420bb421/"
              className="rounded-full bg-slate-800 p-3 transition hover:bg-[#D62828]"
            >
              <FaLinkedinIn size={18} />
            </Link>

            <Link
              href="https://www.youtube.com/@MBSPROPERTIES-n8q"
              className="rounded-full bg-slate-800 p-3 transition hover:bg-[#D62828]"
            >
              <FaYoutube size={18} />
            </Link>

          </div>

          {/* Back To Top */}

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="rounded-full bg-[#D62828] p-3 transition hover:bg-red-700"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>

    </footer>
  );
}