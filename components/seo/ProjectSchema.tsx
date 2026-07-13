interface ProjectSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  location: string;
  client: string;
  year: string;
}

export default function ProjectSchema({
  name,
  description,
  image,
  url,
  location,
  client,
  year,
}: ProjectSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",

    name,

    description,

    image: `https://www.mbsconstruction.in${image}`,

    url,

    creator: {
      "@type": "Organization",
      name: "MBS Construction",
    },

    about: {
      "@type": "Thing",
      name: "Industrial Construction",
    },

    locationCreated: {
      "@type": "Place",
      name: location,
    },

    sponsor: {
      "@type": "Organization",
      name: client,
    },

    datePublished: year,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}