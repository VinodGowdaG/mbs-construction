import { notFound } from "next/navigation";

import { ongoingProjects } from "@/data/ongoingProjectsData";

import ProjectHero from "@/components/ongoing/ProjectHero";
import ProjectOverview from "@/components/ongoing/ProjectOverview";
import ProjectProgress from "@/components/ongoing/ProjectProgress";
import ProjectInformation from "@/components/ongoing/ProjectInformation";
import ProjectGallery from "@/components/ongoing/ProjectGallery";
import ProjectTimeline from "@/components/ongoing/ProjectTimeline";
import ProjectLocation from "@/components/ongoing/ProjectLocation";
import RelatedProjects from "@/components/ongoing/RelatedProjects";
import ProjectCTA from "@/components/ongoing/ProjectCTA";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function OngoingProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = ongoingProjects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white pt-24 lg:pt-28">

      <ProjectHero project={project} />

      <ProjectOverview project={project} />

      <ProjectProgress project={project} />

      <ProjectInformation project={project} />

      <ProjectGallery project={project} />

      <ProjectTimeline project={project} />

      <ProjectLocation project={project} />

      <RelatedProjects project={project} />

      <ProjectCTA />

    </main>
  );
}