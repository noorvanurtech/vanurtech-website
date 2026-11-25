import { pageMetadata } from "@/lib/seo";
import SaaSDevServiceContent from "./SaaSDevServiceContent";

export const metadata = pageMetadata({
  title: "SaaS Development Company in India | Vanurtech Media",
  description:
    "Vanurtech designs and builds multi-tenant SaaS products for B2B and B2C teams, from product architecture to launch and ongoing support.",
  path: "/saas-development-company-india",
  keywords: ["SaaS development company India", "custom SaaS application", "software as a service development"],
});

export default function SaaSDevPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SaaS Development",
    "description": "Multi-tenant SaaS product design and development for B2B and B2C teams, from architecture to launch and ongoing support.",
    "url": "https://vanurmedia.com/saas-development-company-india",
    "serviceType": "SaaS Development",
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
      <SaaSDevServiceContent />
    </>
  );
}
