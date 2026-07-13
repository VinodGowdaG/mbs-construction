"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import CategoryFilter from "./CategoryFilter";
import { featuredProjects } from "@/data/projectData";

export default function FeaturedProjects() {
  const categories = useMemo(
    () => ["All", ...new Set(featuredProjects.map((p) => p.category))],
    []
  );

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? featuredProjects
      : featuredProjects.filter(
          (project) => project.category === activeCategory
        );

  const handleCategory = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section id="projects" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-[#D62828]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#D62828]">
            Featured Projects
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#D62828]">
            Engineering Excellence In Every Project
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#0B4EA2]">
            Explore our completed warehouses, PEB structures,
            industrial roofing and civil construction projects.
          </p>
        </motion.div>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={handleCategory}
        />

        {/* Featured Project */}
        {filteredProjects.length > 0 && (() => {
          const featured = filteredProjects[0];
          return (
            <FeaturedProject {...featured} status={(featured as any).status ?? "Completed"} />
          );
        })()}

        {/* Project Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}