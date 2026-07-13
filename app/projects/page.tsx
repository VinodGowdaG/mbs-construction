"use client";

import { useMemo, useState } from "react";

import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsFilter from "@/components/projects/ProjectsFilter";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectCTA from "@/components/projects/ProjectCTA";
import ProjectsStats from "@/components/projects/ProjectsStats";

import { featuredProjects } from "@/data/projectData";

export default function ProjectsPage() {
  const categories = useMemo(
    () => [
      "All",
      ...new Set(featuredProjects.map((project) => project.category)),
    ],
    []
  );

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProjects = featuredProjects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" ||
      project.category === activeCategory;

    const keyword = search.toLowerCase();

    const matchesSearch =
      project.title.toLowerCase().includes(keyword) ||
      project.location.toLowerCase().includes(keyword);

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-white">
      <ProjectsHero />

        <ProjectsStats />

      <ProjectsFilter
        categories={categories}
        activeCategory={activeCategory}
        search={search}
        total={filteredProjects.length}
        onCategoryChange={setActiveCategory}
        onSearchChange={setSearch}
      />

      <ProjectsGrid
        activeCategory={activeCategory}
        search={search}
      />

      <ProjectCTA />
    </main>
  );
}