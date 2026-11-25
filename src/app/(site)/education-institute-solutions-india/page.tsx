import EducationServiceContent from "./EducationServiceContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "School & Institute ERP Software in India | Vanurtech Media",
  description:
    "ERP for schools, colleges, and coaching institutes: admissions, fees, student records, and parent communication, built by Vanurtech.",
  path: "/education-institute-solutions-india",
  keywords: ["school ERP software India", "institute management system", "college management software"],
});

export default function EducationDevPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Education & Institute Management Software Solutions",
    "description": "ERP for schools, colleges, and coaching institutes covering admissions, fees, student records, and parent communication.",
    "url": "https://vanurmedia.com/education-institute-solutions-india",
    "serviceType": "Education Software Development",
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
      <EducationServiceContent />
    </>
  );
}
