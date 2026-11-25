import { pageMetadata } from "@/lib/seo";
import SolarServiceContent from "./SolarServiceContent";


export const metadata = pageMetadata({
  title: "Solar & Renewable Energy Software in India | Vanurtech Media",
  description:
    "Software for solar installers: site tracking, field teams, AMC follow-ups, and installation progress. Built by Vanurtech for renewable businesses.",
  path: "/solar-renewable-solutions-india",
  keywords: ["solar software India", "renewable energy software", "solar installation tracking"],
});

export default function SolarDevPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Solar & Renewable Energy Software Solutions",
    "description": "Software for solar installers covering site tracking, field teams, AMC follow-ups, and installation progress management.",
    "url": "https://vanurmedia.com/solar-renewable-solutions-india",
    "serviceType": "Solar & Renewable Energy Software",
    "areaServed": { "@type": "Country", "name": "India" },
    "provider": {
      "@type": "Organization",
      "name": "Vanurtech Media Pvt. Ltd.",
      "url": "https://vanurmedia.com"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SolarServiceContent />
    </>
  );
}
