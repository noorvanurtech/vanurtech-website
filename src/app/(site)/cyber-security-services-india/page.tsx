import CyberSecurityContent from "./CyberSecurityContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cyber Security Services in India | Vanurtech Media",
  description:
    "Vanurtech helps businesses review application security, close common risks, and put practical monitoring in place for websites and software.",
  path: "/cyber-security-services-india",
  keywords: ["cyber security services India", "website security", "application security company"],
});

export default function CyberSecurityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cyber Security Services",
    "description": "Professional cyber security solutions including penetration testing, managed detection, and compliance.",
    "provider": {
      "@type": "Organization",
      "name": "Vanurtech Media Pvt. Ltd.",
      "url": "https://vanurmedia.com"
    },
    "serviceType": "Cyber Security",
    "url": "https://vanurmedia.com/cyber-security-services-india",
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
      <CyberSecurityContent />
    </>
  );
}
