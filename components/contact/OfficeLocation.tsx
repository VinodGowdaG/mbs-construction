"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Building2,
  Phone,
  Mail,
} from "lucide-react";

export default function OfficeLocation() {
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
            Visit Our Office
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#D62828]">
            Find MBS Construction
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We'd be happy to discuss your project requirements. Visit our office
            or schedule a meeting with our engineering team.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Google Map */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.424896584984!2d77.36050507588826!3d13.072236212662293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae2f32c5d351db%3A0x369073b4b9d37d09!2sMBS%20Roofings!5e0!3m2!1sen!2sin!4v1783940100184!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="min-h-[550px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Office Details */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden rounded-3xl shadow-xl">

              <Image
                src="/images/contact/office.png"
                alt="MBS Construction Office"
                width={700}
                height={420}
                className="h-72 w-full object-cover"
              />

            </div>

            <div className="mt-8 rounded-3xl bg-slate-50 p-8">

              <div className="space-y-8">

                <div className="flex gap-5">
                  <Building2
                    size={30}
                    className="mt-1 text-[#D62828]"
                  />

                  <div>
                    <h3 className="text-xl font-bold text-[#0B4EA2]">
                      MBS Construction
                    </h3>

                    <p className="mt-2 text-slate-600">
                      Premium Industrial Construction &
                      Pre-Engineered Building Solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <MapPin
                    size={28}
                    className="mt-1 text-[#D62828]"
                  />

                  <div>
                    <h3 className="font-bold text-[#0B4EA2]">
                      Office Address
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      Bengaluru,
                      <br />
                      Karnataka,
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Phone
                    size={28}
                    className="mt-1 text-[#D62828]"
                  />

                  <div>
                    <h3 className="font-bold text-[#0B4EA2]">
                      Phone
                    </h3>

                    <p className="mt-2 text-slate-600">
                      +91 8147826165
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Mail
                    size={28}
                    className="mt-1 text-[#D62828]"
                  />

                  <div>
                    <h3 className="font-bold text-[#0B4EA2]">
                      Email
                    </h3>

                    <p className="mt-2 text-slate-600">
                      info@mbsconstruction.in
                    </p>
                  </div>
                </div>

              </div>

              <Link
                href="https://maps.app.goo.gl/kKzHguAh374bRQxPA"
                target="_blank"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#D62828] px-8 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                <Navigation size={20} />

                Get Directions
              </Link>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}