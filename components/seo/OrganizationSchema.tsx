
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": "https://mbsconstructions.com/#organization",

    name: "MBS Constructions",
    url: "https://mbsconstructions.com",

    logo: {
      "@type": "ImageObject",
      url: "https://mbsconstructions.com/images/logo.png",
    },

    image: "https://mbsconstructions.com/images/logo.png",

    telephone: "+918147826165",
    email: "mbsconstructions@gmail.com",

    description:
      "MBS Constructions specializes in Pre-Engineered Buildings (PEB), warehouse construction, industrial sheds, steel fabrication, civil construction and roofing solutions in Bengaluru and across Karnataka.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },

    areaServed: {
      "@type": "State",
      name: "Karnataka",
    },

    sameAs: [
      "https://www.instagram.com/mbs_roofings_and_peb/",
      "https://www.facebook.com/profile.php?id=61581771645935",
      "https://www.linkedin.com/company/143974101/",
      "https://www.youtube.com/@MBSCONSTRUCTIONS",
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
