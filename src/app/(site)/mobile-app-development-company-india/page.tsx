import MobileAppServiceContent from "./MobileAppServiceContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Mobile App Development Company in India | Vanurtech Media",
  description:
    "Vanurtech builds custom iOS and Android apps for sales, operations, and customer service, from product scope through store launch.",
  path: "/mobile-app-development-company-india",
  keywords: ["mobile app development company India", "iOS app development", "Android app development"],
});

export default function MobileAppPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development",
    "description": "Custom iOS and Android mobile app development for sales, operations, and customer service from product scope through store launch.",
    "url": "https://vanurmedia.com/mobile-app-development-company-india",
    "serviceType": "Mobile App Development",
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
      <MobileAppServiceContent />
    </>
  );
}
