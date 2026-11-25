import SEOServiceContent from "./SEOServiceContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "SEO Services in India | Vanurtech Media",
  description:
    "Vanurtech Media handles technical SEO, page speed, titles, headings, and site structure for Indian businesses — from teams that also build your website.",
  path: "/seo-services-india",
  keywords: ["technical SEO", "on-page SEO company"],
});

export default function SEOPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services",
    "description": "Technical SEO, on-page optimisation, page titles, headings, content, and site structure improvements for Indian businesses.",
    "url": "https://vanurmedia.com/seo-services-india",
    "serviceType": "Search Engine Optimization",
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
      <SEOServiceContent />
    </>
  );
}
