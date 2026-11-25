import GraphicDesignServiceContent from "./GraphicDesignServiceContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Graphic Design Company in India | Vanurtech Media",
  description:
    "Logo design, brand identity, social creatives, and marketing visuals from Vanurtech Media for businesses that need a consistent look in India.",
  path: "/graphic-design-services-india",
  keywords: ["graphic design company India", "logo design", "brand identity design"],
});

export default function GraphicDesignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Graphic Design & Branding",
    "description": "Logo design, brand identity, social media creatives, and marketing visuals for businesses needing a consistent look in India.",
    "url": "https://vanurmedia.com/graphic-design-services-india",
    "serviceType": "Graphic Design",
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
      <GraphicDesignServiceContent />
    </>
  );
}
