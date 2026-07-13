import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/servicesData";


import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceApplications from "@/components/services/ServiceApplications";
import ServiceCTA from "@/components/services/ServiceCTA";
import ServiceHowItWorks from "@/components/services/ServiceHowItWorks";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceIndustries from "@/components/services/ServiceIndustries";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceComparison from "@/components/services/ServiceComparison";
import RelatedServices from "@/components/services/RelatedServices";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import ServiceQuickNav from "@/components/services/ServiceQuickNav";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import ServiceProjects from "@/components/services/ServiceProjects";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

interface MetadataProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metaTitle,

    description: service.metaDescription,

    keywords: service.keywords,

    openGraph: {
      title: service.metaTitle,

      description: service.metaDescription,

      images: [
        {
          url: service.heroImage,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white">

      <ServiceBreadcrumb
  title={service.title}
/>


      <ServiceHero service={service} />

      <ServiceQuickNav />

      <ServiceOverview service={service} />

      <ServiceHowItWorks
  steps={service.howItWorks}
/>

      <ServiceFeatures
  features={service.features}
/>

      <ServiceBenefits benefits={service.benefits} />

      <ServiceApplications
        applications={service.applications}
      />

      <ServiceIndustries
  industries={service.industries}
/>

      <ServiceProjects
  serviceSlug={service.slug}
/>

      <WhyChooseUs />

      <ServiceComparison comparison={service.comparison} />

<ServiceFAQ
  faqs={service.faqs ?? []}
/>

<RelatedServices
  currentSlug={service.slug}
  relatedServices={service.relatedServices ?? []}
/>


      <ServiceCTA />

    </main>
  );
}