import SMBServiceContent from "./SMBServiceContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "SME Software & Automation Solutions in India | Vanurtech Media",
  description:
    "CRM, billing, and operations software sized for small and medium businesses in India. Vanurtech helps SMEs replace spreadsheets with one system.",
  path: "/small-medium-business-solutions-india",
  keywords: ["SME software India", "small business automation", "ERP for SMEs"],
});

export default function SMBDevPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SMB Digital Transformation Solutions",
    "description": "CRM, billing, and operations software sized for small and medium businesses in India — replacing spreadsheets with one integrated system.",
    "url": "https://vanurmedia.com/small-medium-business-solutions-india",
    "serviceType": "SME Software & Automation",
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
      <SMBServiceContent />
    </>
  );
}
