"use client";

import { CheckCircle2 } from "lucide-react";

interface Props {
  benefits: string[];
}

export default function ServiceBenefits({
  benefits,
}: Props) {
  return (
    <section id="benefits" className="py-24 bg-slate-50">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-14 text-center text-5xl font-bold text-[#D62828]">
          Benefits
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {benefits.map((benefit) => (

            <div
              key={benefit}
              className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg"
            >
              <CheckCircle2 className="text-green-600" />

              <span className="font-semibold text-[#0B4EA2]">
                {benefit}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}