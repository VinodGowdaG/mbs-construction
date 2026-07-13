"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  MessageCircle,
} from "lucide-react";

import { contactData } from "@/data/contactData";

const contactCards = [
  {
    title: "Office Address",
    value: contactData.office.address,
    icon: MapPin,
    color: "bg-blue-50",
  },
  {
    title: "Phone Number",
    value: contactData.office.phone,
    icon: Phone,
    color: "bg-red-50",
    href: `tel:${contactData.office.phone.replace(/\s+/g, "")}`,
  },
  {
    title: "Email Address",
    value: contactData.office.email,
    icon: Mail,
    color: "bg-blue-50",
    href: `mailto:${contactData.office.email}`,
  },
  {
    title: "Website",
    value: contactData.office.website,
    icon: Globe,
    color: "bg-red-50",
    href: `https://${contactData.office.website}`,
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B4EA2]">
            Contact Information
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#D62828]">
            We're Here to Help
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Whether you're planning a warehouse, factory, PEB structure, or a
            complete turnkey project, our team is ready to assist you.
          </p>
        </motion.div>

        {/* Contact Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {contactCards.map((card, index) => {
            const Icon = card.icon;

            const content = (
              <>
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.color}`}
                >
                  <Icon
                    size={32}
                    className="text-[#D62828]"
                  />
                </div>

                <h3 className="mt-8 text-xl font-bold text-[#0B4EA2]">
                  {card.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 break-words">
                  {card.value}
                </p>
              </>
            );

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{ y: -8 }}
              >
                {card.href ? (
                  <Link
                    href={card.href}
                    className="block h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:shadow-2xl"
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
                    {content}
                  </div>
                )}
              </motion.div>
            );
          })}

        </div>

        {/* Bottom Row */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Business Hours */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg">
            <div className="flex items-center gap-4">
              <Clock className="text-[#D62828]" size={32} />
              <h3 className="text-2xl font-bold text-[#0B4EA2]">
                Business Hours
              </h3>
            </div>

            <div className="mt-8 space-y-5">
              {contactData.businessHours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between border-b border-slate-200 pb-3"
                >
                  <span className="font-medium text-slate-700">
                    {item.day}
                  </span>

                  <span className="font-semibold text-[#D62828]">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Card */}

          <div className="rounded-3xl bg-gradient-to-r from-[#0B4EA2] to-[#083A79] p-8 text-white shadow-xl">
            <MessageCircle size={40} />

            <h3 className="mt-6 text-3xl font-bold">
              Need a Quick Response?
            </h3>

            <p className="mt-5 leading-8 text-white/90">
              Chat directly with our team on WhatsApp for quotations, project
              discussions, or construction-related inquiries.
            </p>

            <Link
              href="https://wa.me/918147826165"
              target="_blank"
              className="mt-8 inline-flex rounded-full bg-[#D62828] px-8 py-4 font-semibold transition hover:bg-red-700"
            >
              Chat on WhatsApp
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}