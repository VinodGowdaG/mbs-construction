import Hero from "@/components/home/hero/Hero";
import ProjectSlider from "@/components/home/hero/ProjectSlider";
import About from "@/components/home/about/About";
import MissionVision from "@/components/home/about/MissionVision";
import Services from "@/components/home/services/Services";
import WhyChooseUs from "@/components/home/whyChoose/WhyChoose";
import Process from "@/components/home/process/Process";
import Industries from "@/components/home/industries/Industries";
import Clients from "@/components/home/clients/Clients";
import FeaturedProjects from "@/components/home/projects/FeaturedProjects";
import Testimonials from "@/components/home/testimonials/Testimonials";
import CTA from "@/components/home/cta/CTA";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects */}
      <ProjectSlider />

      {/* About Section */}
      <About />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Services */}
      <Services /> 

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Process */}
      <Process />

      {/* Industries */}
      <Industries />

      {/* Clients */}
      <Clients />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <CTA />

    </>
  );
}