import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import AboutBreadcrumb from "@/components/about/AboutBreadcrumb";
import CompanyStory from "@/components/about/CompanyStory";
import CompanyStats from "@/components/about/CompanyStats";
import MissionVision from "@/components/about/MissionVision";
import OurValues from "@/components/about/OurValues";
import CompanyTimeline from "@/components/about/CompanyTimeline";
import WhyChooseMBS from "@/components/about/WhyChooseMBS";
import Industries from "@/components/home/industries/Industries";
import Certifications from "@/components/about/Certifications";
import AboutCTA from "@/components/about/AboutCTA";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About Us | Construction & PEB Experts in Bengaluru",

  description:
    "Learn about MBS Constructions, our expertise in PEB buildings, industrial construction, roofing, warehouse development and steel fabrication.",

  alternates: {
    canonical: "https://mbsconstructions.com/about",
  },

  openGraph: {
    type: "website",
    url: "https://mbsconstructions.com/about",
    title: "About MBS Constructions",
    description:
      "Discover our construction expertise and industrial infrastructure solutions across Karnataka.",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.mbsconstructions.com",
          },
          {
            name: "About",
            url: "https://www.mbsconstructions.com/about",
          },
        ]}
      />
        <main className="bg-white pt-24 lg:pt-28">
          <AboutBreadcrumb />

          <AboutHero />

          <CompanyStory />

          <CompanyStats />

          <MissionVision />

          <OurValues />

          <CompanyTimeline />

          <WhyChooseMBS />

          <Industries />

          <Certifications />

          <AboutCTA />
        </main>
      
    </>
  );
}