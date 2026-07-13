import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { featuredProjects } from "@/data/projectData";

import ProjectHero from "@/components/projects/ProjectHero";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectSpecifications from "@/components/projects/ProjectSpecifications";
import ProjectFeatures from "@/components/projects/ProjectFeatures";
import RelatedProjects from "@/components/projects/RelatedProjects";
import ProjectCTA from "@/components/projects/ProjectCTA";
import ProjectBreadcrumb from "@/components/projects/ProjectBreadcrumb";
import ProjectNavigation from "@/components/projects/ProjectNavigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetails({ params }: Props) {
  const { slug } = await params;

  const project = featuredProjects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white">

  <div className="mx-auto max-w-7xl px-6 pt-32">
    <ProjectBreadcrumb title={project.title} />
  </div>

  <ProjectHero
    title={project.title}
    image={project.image}
    location={project.location}
    category={project.category}
  />

  <ProjectOverview
    overview={project.overview}
    description={project.description}
    client={project.client}
    location={project.location}
    category={project.category}
    area={project.area}
    year={project.year}
  />

  <ProjectSpecifications
    specifications={project.specifications}
  />

  <ProjectFeatures
    features={project.features}
  />

  <ProjectGallery
    title={project.title}
    gallery={project.gallery}
  />

  <RelatedProjects
    currentSlug={project.slug}
    projects={featuredProjects}
  />

  <ProjectNavigation
  currentSlug={project.slug}
  projects={featuredProjects}
/>

  <ProjectCTA />

</main>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border-b border-slate-200 pb-4 last:border-none">
      <p className="text-sm uppercase tracking-wide text-slate-500">
        {title}
      </p>

      <p className="mt-1 text-lg font-semibold text-slate-800">
        {value}
      </p>
    </div>
  );
}