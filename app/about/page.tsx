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

export const metadata: Metadata = {
  title: "About MBS Construction | Industrial Construction Company",

  description:
    "Learn about MBS Construction, our journey, mission, vision, expertise and commitment to delivering high-quality industrial infrastructure across Karnataka.",
};

export default function AboutPage() {
  return (
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
  );
}