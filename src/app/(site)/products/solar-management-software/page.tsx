import SolarManagementContent from "./SolarManagementContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solar Plant Management Software in India | Vanurtech Media",
  description:
    "Monitor solar plant output, catch faults faster, manage AMC contracts, and track customers in one solar software product from Vanurtech.",
  path: "/products/solar-management-software",
  keywords: ["solar management software India", "solar plant monitoring", "solar AMC software"],
});

export default function SolarManagementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Solar Management Software",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Android, iOS",
    "description": "Monitor solar plant output, catch faults faster, manage AMC contracts, and track customers in one platform.",
    "url": "https://vanurmedia.com/products/solar-management-software",
    "provider": {
      "@type": "Organization",
      "name": "Vanurtech Media Pvt. Ltd.",
      "url": "https://vanurmedia.com",
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SolarManagementContent />
    </>
  );
}
