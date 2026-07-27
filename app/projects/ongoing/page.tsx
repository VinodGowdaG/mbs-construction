import type { Metadata } from "next";

import OngoingProjectHero from "@/components/ongoing/OngoingProjectHero";
import OngoingProjectStats from "@/components/ongoing/OngoingProjectStats";
import OngoingProjectsGrid from "@/components/ongoing/OngoingProjectsGrid";
import OngoingProjectsCTA from "@/components/ongoing/OngoingProjectsCTA";

export const metadata: Metadata = {
  title: "Ongoing Projects | MBS Construction",

  description:
    "Explore the ongoing warehouse, PEB, factory building, industrial roofing and steel structure projects currently under construction by MBS Construction across Karnataka.",
};

export default function OngoingProjectsPage() {
  return (
    <main className="bg-white pt-24 lg:pt-28">

      <OngoingProjectHero />

      <OngoingProjectStats />

      <OngoingProjectsGrid />

      <OngoingProjectsCTA />

    </main>
  );
}