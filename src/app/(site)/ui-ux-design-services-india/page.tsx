import UIUXServiceContent from "./UIUXServiceContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "UI/UX Design Services in India | Vanurtech Media",
  description:
    "Vanurtech designs clear web and mobile interfaces, prototypes, and design systems that help customers complete tasks and enquire faster.",
  path: "/ui-ux-design-services-india",
  keywords: ["UI UX design services India", "website UI design", "mobile app UX"],
});

export default function UIUXServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "UI/UX Design Services",
    "description": "Professional user experience and interface design services for digital products.",
    "provider": {
      "@type": "Organization",
      "name": "Vanurtech Media Pvt. Ltd.",
      "url": "https://vanurmedia.com"
    },
    "serviceType": "UI/UX Design",
    "url": "https://vanurmedia.com/ui-ux-design-services-india",
    "areaServed": {
      "@type": "Country",
      "name": "India"
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
      <UIUXServiceContent />
    </>
  );
}
