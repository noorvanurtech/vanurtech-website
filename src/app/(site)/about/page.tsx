import AboutClient from "./AboutClient";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Vanurtech Media | Software Company in India Since 2015",
  description:
    "Meet Vanurtech Media — custom CRM, ERP, SaaS, mobile apps, and AI automation from Delhi and Bhubaneswar. 300+ projects for 200+ Indian businesses since 2015.",
  path: "/about",
  keywords: [
    "about Vanurtech Media",
    "software company Bhubaneswar",
    "software company Delhi",
    "custom software development India",
    "CRM development company India",
    "IT company India",
  ],
});

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Vanurtech Media",
    "description": "Vanurtech Media is a custom software, CRM, SaaS, and AI automation company based in Delhi and Bhubaneswar, India. We have delivered 300+ projects for 200+ businesses since 2015.",
    "url": "https://vanurmedia.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Vanurtech Media Pvt. Ltd.",
      "url": "https://vanurmedia.com",
      "foundingDate": "2015",
      "foundingLocation": "Bhubaneswar, India",
      "areaServed": { "@type": "Country", "name": "India" },
      "numberOfEmployees": { "@type": "QuantitativeValue", "value": 20 }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}
