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
  title: "About MBS Construction | Industrial Construction Company",

  description:
    "Learn about MBS Construction, our journey, mission, vision, expertise and commitment to delivering high-quality industrial infrastructure across Karnataka.",

  alternates: {
    canonical: "https://www.mbsconstruction.in/about",
  },

  openGraph: {
    title: "About MBS Construction",
    description:
      "Learn about MBS Construction, our journey, mission, vision, expertise and commitment to delivering high-quality industrial infrastructure across Karnataka.",
    url: "https://www.mbsconstruction.in/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.mbsconstruction.in",
          },
          {
            name: "About",
            url: "https://www.mbsconstruction.in/about",
          },
        ]}
      />

      <main className="bg-white">
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