import WebDevServiceContent from "./WebDevServiceContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Website Development Company in India | Vanurtech Media",
  description:
    "Vanurtech builds fast, mobile-friendly business websites with clear pages, lead forms, and on-page SEO for companies across India.",
  path: "/website-development-company-india",
  keywords: ["website development company India", "business website design", "SEO website development"],
});

export default function WebDevPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Development",
    "description": "Custom, mobile-friendly business websites with on-page SEO, lead forms, and fast load times for companies across India.",
    "url": "https://vanurmedia.com/website-development-company-india",
    "serviceType": "Website Development",
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
      <WebDevServiceContent />
    </>
  );
}
