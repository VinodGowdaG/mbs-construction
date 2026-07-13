export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MBS Construction",
    url: "https://www.mbsconstruction.in",
    description:
      "Leading PEB, Warehouse, Industrial Shed, Steel Fabrication and Roofing Solutions company in Karnataka.",
    publisher: {
      "@type": "Organization",
      name: "MBS Construction",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.mbsconstruction.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
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