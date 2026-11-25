import HealthcareServiceContent from "./HealthcareServiceContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Clinic & Hospital Management Software in India | Vanurtech Media",
  description:
    "Clinic software for appointments, patient records, billing, and day-to-day hospital workflows. Built by Vanurtech for healthcare teams in India.",
  path: "/healthcare-clinic-solutions-india",
  keywords: ["clinic management software India", "hospital software", "patient scheduling software"],
});

export default function HealthcarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Healthcare & Clinic Management Software Solutions",
    "description": "Clinic and hospital management software for appointments, patient records, billing, and day-to-day healthcare workflows.",
    "url": "https://vanurmedia.com/healthcare-clinic-solutions-india",
    "serviceType": "Healthcare Software Development",
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
      <HealthcareServiceContent />
    </>
  );
}
