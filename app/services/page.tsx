import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProjectCTA from "@/components/projects/ProjectCTA";

export default function ServicesPage() {
  return (
    <main className="bg-white pt-24 lg:pt-28">
      <ServicesHero />
      <ServicesGrid />
      <ProjectCTA />
    </main>
  );
}