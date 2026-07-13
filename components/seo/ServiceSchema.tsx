interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export default function ServiceSchema({
  name,
  description,
  url,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",

    serviceType: name,

    name,

    description,

    provider: {
      "@type": "Organization",
      name: "MBS Construction",
      url: "https://www.mbsconstruction.in",
    },

    areaServed: {
      "@type": "State",
      name: "Karnataka",
    },

    url,
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