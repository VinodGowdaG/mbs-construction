"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I request a quotation?",
    answer:
      "You can request a quotation by filling out our contact form, calling us directly, or sending us a WhatsApp message. Our team will review your requirements and provide a customized estimate.",
  },
  {
    question: "Do you provide free site visits?",
    answer:
      "Yes. We offer site visits and project consultations to better understand your requirements before preparing a proposal.",
  },
  {
    question: "Which locations do you serve?",
    answer:
      "We undertake projects across Karnataka and other parts of India depending on the project scope and client requirements.",
  },
  {
    question: "What types of construction projects do you handle?",
    answer:
      "We specialize in Pre-Engineered Buildings (PEB), warehouses, industrial sheds, civil construction, roofing solutions, steel fabrication, and turnkey industrial projects.",
  },
  {
    question: "How long does it take to receive a quotation?",
    answer:
      "Most quotations are prepared within 24–48 business hours after we receive the necessary project details.",
  },
  {
    question: "Can I contact you through WhatsApp?",
    answer:
      "Yes. You can reach us on WhatsApp for quick discussions, project inquiries, and quotation requests.",
  },
  {
    question: "Do you provide turnkey construction services?",
    answer:
      "Absolutely. We manage everything from planning and design to construction and project handover, ensuring a hassle-free experience.",
  },
  {
    question: "How do I schedule a meeting with your team?",
    answer:
      "Simply call us, send an email, or submit the contact form. Our team will coordinate a suitable meeting time with you.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B4EA2]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#D62828]">
            Have Questions?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Here are answers to some of the most common questions our clients ask before starting a project.
          </p>
        </motion.div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-[#0B4EA2]">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#D62828]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-slate-200 px-8 py-6 text-slate-600 leading-8">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
