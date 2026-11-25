import HomeClient from "./HomeClient";
import { pageMetadata, SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Custom Software, CRM & SaaS Company in India | Vanurtech Media",
  description:
    "Vanurtech Media designs custom software, CRM, ERP, SaaS platforms, and mobile apps for Indian businesses. Talk to our team in Delhi and Bhubaneswar.",
  path: "/",
  keywords: [
    "software development company India",
    "CRM development India",
    "SaaS development company",
    "Vanurtech Media",
    "custom software company Delhi",
    "web development company Bhubaneswar",
  ],
});

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Vanurtech Media offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vanurtech Media builds custom software, CRM, ERP, SaaS platforms, mobile apps, websites, and provides SEO, UI/UX design, graphic design, and AI business automation services for Indian businesses."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Vanurtech Media located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vanurtech Media has offices in Delhi and Bhubaneswar, Odisha, and serves businesses across India."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Vanurtech for a free consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach Vanurtech Media at +91-7077004890 or info@vanurmedia.com for a free software consultation."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}
