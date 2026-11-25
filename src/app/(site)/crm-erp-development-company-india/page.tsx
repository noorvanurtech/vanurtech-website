import CRMERPServiceContent from "./CRMERPServiceContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "CRM & ERP Development Company in India | Vanurtech Media",
  description:
    "Custom CRM and ERP systems for sales, finance, HR, inventory, and operations. Vanurtech builds one platform for Indian businesses.",
  path: "/crm-erp-development-company-india",
  keywords: ["CRM ERP development India", "custom ERP software", "business management software"],
});

export default function CRMERPDevPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom CRM & ERP Development",
    description: "Integrated CRM and ERP systems for sales, finance, HR, inventory, and operations — one platform for Indian businesses.",
    url: "https://vanurmedia.com/crm-erp-development-company-india",
    serviceType: "CRM & ERP Development",
    areaServed: { "@type": "Country", name: "India" },
    provider: {
      "@type": "Organization",
      name: "Vanurtech Media Pvt. Ltd.",
      url: "https://vanurmedia.com",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CRMERPServiceContent />
    </>
  );
}
