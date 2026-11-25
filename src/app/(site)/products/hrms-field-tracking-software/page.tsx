import HRMSContent from "./HRMSContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "HRMS & GPS Field Tracking Software in India | Vanurtech Media",
  description:
    "Track field staff on GPS, mark attendance, and run payroll from one HRMS. Vanurtech's workforce software is built for teams working across India.",
  path: "/products/hrms-field-tracking-software",
  keywords: ["HRMS software India", "GPS field tracking", "attendance and payroll software"],
});

export default function HRMSPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HRMS & Field Tracking Software",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description: "GPS field staff tracking, attendance management, and payroll software for teams working across India.",
    url: "https://vanurmedia.com/products/hrms-field-tracking-software",
    provider: {
      "@type": "Organization",
      name: "Vanurtech Media Pvt. Ltd.",
      url: "https://vanurmedia.com",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HRMSContent />
    </>
  );
}
