"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

interface ComparisonRow {
  feature: string;
  left: string;
  right: string;
}

interface Props {
  comparison?: {
    title: string;
    leftTitle: string;
    rightTitle: string;
    rows: ComparisonRow[];
  };
}

export default function ServiceComparison({
  comparison,
}: Props) {
  if (!comparison) return null;

  return (
    <section id="comparison" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4EA2]">
            Comparison
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#D62828]">
            {comparison.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#0B4EA2]">
            Compare the key differences to choose the most suitable solution
            for your industrial construction project.
          </p>
        </motion.div>

        {/* Desktop Table */}
        <div className="hidden overflow-hidden rounded-3xl shadow-2xl lg:block">

          <table className="w-full">

            <thead>

              <tr>

                <th className="bg-slate-100 px-8 py-6 text-left text-lg font-bold text-slate-800">
                  Feature
                </th>

                <th className="bg-[#0B4EA2] px-8 py-6 text-center text-lg font-bold text-white">
                  {comparison.leftTitle}
                </th>

                <th className="bg-[#D62828] px-8 py-6 text-center text-lg font-bold text-white">
                  {comparison.rightTitle}
                </th>

              </tr>

            </thead>

            <tbody>

              {comparison.rows.map((row, index) => (

                <tr
                  key={index}
                  className="border-b transition hover:bg-slate-50"
                >

                  <td className="bg-slate-50 px-8 py-6 font-semibold text-[#0B4EA2]">
                    {row.feature}
                  </td>

                  <td className="px-8 py-6 text-center">
                    <div className="flex items-center justify-center gap-2 font-semibold text-green-600">
                      <CheckCircle2 size={18} />
                      {row.left}
                    </div>
                  </td>

                  <td className="px-8 py-6 text-center">
                    <div className="flex items-center justify-center gap-2 font-semibold text-slate-600">
                      <XCircle size={18} />
                      {row.right}
                    </div>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Mobile Cards */}
        <div className="space-y-6 lg:hidden">

          {comparison.rows.map((row, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="rounded-3xl border bg-white p-6 shadow-lg"
            >

              <h3 className="mb-6 text-xl font-bold text-[#D62828]">
                {row.feature}
              </h3>

              <div className="space-y-5">

                <div className="rounded-2xl bg-blue-50 p-5">

                  <p className="font-bold text-[#0B4EA2]">
                    {comparison.leftTitle}
                  </p>

                  <div className="mt-3 flex items-center gap-2 font-medium text-green-600">
                    <CheckCircle2 size={18} />
                    {row.left}
                  </div>

                </div>

                <div className="rounded-2xl bg-red-50 p-5">

                  <p className="font-bold text-[#D62828]">
                    {comparison.rightTitle}
                  </p>

                  <div className="mt-3 flex items-center gap-2 font-medium text-slate-700">
                    <XCircle size={18} />
                    {row.right}
                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}