"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  service: {
    title: string;
    heroImage: string;
    shortDescription: string;
  };
}

export default function ServiceHero({ service }: Props) {
  return (
    <section className="relative h-[650px] overflow-hidden">

      <Image
        src={service.heroImage}
        alt={service.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-6xl font-black text-white"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3 }}
            className="mt-8 max-w-2xl text-xl leading-9 text-slate-200"
          >
            {service.shortDescription}
          </motion.p>

        </div>
      </div>

    </section>
  );
}