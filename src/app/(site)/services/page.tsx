import ServicesClient from "./ServicesClient";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software Development Services in India | Vanurtech Media",
  description:
    "Website, mobile app, CRM, ERP, SaaS, AI automation, SEO, UI/UX, graphic design, and cyber security — one team in Delhi and Bhubaneswar serving businesses across India.",
  path: "/services",
  keywords: [
    "software services India",
    "CRM development",
    "SaaS development",
    "website development India",
    "mobile app development",
    "AI automation India",
  ],
});

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Full-Stack Digital Services",
    "description": "Website development, mobile apps, CRM, ERP, SaaS, AI automation, UI/UX, graphic design and cyber security for Indian businesses.",
    "url": "https://vanurmedia.com/services",
    "areaServed": { "@type": "Country", "name": "India" },
    "provider": {
      "@type": "Organization",
      "name": "Vanurtech Media Pvt. Ltd.",
      "url": "https://vanurmedia.com"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vanurtech Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM & ERP Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Business Automation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cyber Security" } }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesClient />
    </>
  );
}
