import type { Metadata } from "next";

import ContactBreadcrumb from "@/components/contact/ContactBreadcrumb";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import OfficeLocation from "@/components/contact/OfficeLocation";
import BusinessHours from "@/components/contact/BusinessHours";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact MBS Construction",
  description:
    "Contact MBS Construction for PEB Buildings, Warehouses, Roofing, Civil Construction and Turnkey Projects.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">

      <ContactBreadcrumb />

      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <OfficeLocation />

      <BusinessHours />

      <ContactFAQ />

      <ContactCTA />

    </main>
  );
}