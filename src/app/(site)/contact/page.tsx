import ContactClient from "./ContactClient";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Vanurtech Media | Free Software Consultation India",
  description:
    "Contact Vanurtech Media for websites, CRM, ERP, SaaS, and mobile apps. Call +91-7077004890 or email info@vanurmedia.com. Offices in Delhi and Bhubaneswar.",
  path: "/contact",
  keywords: [
    "contact Vanurtech Media",
    "software consultation India",
    "hire software company Bhubaneswar",
    "free software consultation Delhi",
    "software company contact India",
  ],
});

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Vanurtech Media",
    "description": "Get in touch with Vanurtech Media for a free consultation on custom software, CRM, SaaS, or mobile app development.",
    "url": "https://vanurmedia.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Vanurtech Media Pvt. Ltd.",
      "telephone": "+91-7077004890",
      "email": "info@vanurmedia.com",
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Bhubaneswar",
          "addressRegion": "Odisha",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Delhi",
          "addressCountry": "IN"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}