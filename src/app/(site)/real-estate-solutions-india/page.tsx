import RealEstateServiceContent from "./RealEstateServiceContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Real Estate CRM & Lead Software in India | Vanurtech Media",
  description:
    "Property tracking, lead follow-ups, and agent dashboards for real estate teams. Vanurtech builds CRM software for property businesses in India.",
  path: "/real-estate-solutions-india",
  keywords: ["real estate CRM India", "property lead management software", "real estate software"],
});

export default function RealEstatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Real Estate CRM & Lead Management Software",
    "description": "Property tracking, lead follow-ups, and agent dashboards for real estate teams in India.",
    "url": "https://vanurmedia.com/real-estate-solutions-india",
    "serviceType": "Real Estate Software Development",
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
      <RealEstateServiceContent />
    </>
  );
}
