export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MBS Construction",
    image: "https://www.mbsconstruction.in/images/logo.png",
    url: "https://www.mbsconstruction.in",
    telephone: "+91 8147826165",
    email: "info@mbsconstruction.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: "Karnataka",    
    priceRange: "₹₹",
    description:
      "MBS Construction specializes in Pre-Engineered Buildings (PEB), Warehouse Construction, Industrial Sheds, Steel Fabrication, and Roofing Solutions.",
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
      "https://www.youtube.com/",
    ],
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