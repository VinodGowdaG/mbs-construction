
export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://mbsconstructions.com/#website",
    name: "MBS Constructions",
    url: "https://mbsconstructions.com",
    description:
      "Explore MBS Constructions' PEB buildings, warehouse construction, industrial sheds, steel fabrication and roofing solutions across Karnataka.",
    inLanguage: "en-IN",
    publisher: {
      "@id": "https://mbsconstructions.com/#organization",
    },
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
