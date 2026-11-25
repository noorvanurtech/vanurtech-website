import CRMDevServiceContent from "./CRMDevServiceContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Custom CRM Development Company in India | Vanurtech Media",
  description:
    "Vanurtech builds custom CRM software with lead tracking, sales pipelines, follow-ups, and reporting for SMEs across India.",
  path: "/crm-development-company-india",
  keywords: ["CRM development company India", "custom CRM software", "lead management software"],
});

export default function CRMDevPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom CRM Development",
    "description": "Custom CRM software with lead tracking, sales pipelines, follow-ups, and reporting for SMEs across India.",
    "url": "https://vanurmedia.com/crm-development-company-india",
    "serviceType": "CRM Development",
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
      <CRMDevServiceContent />
    </>
  );
}
