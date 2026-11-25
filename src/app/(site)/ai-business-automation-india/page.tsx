import AIBusinessAutomationContent from "./AIBusinessAutomationContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Business Automation Company in India | Vanurtech Media",
  description:
    "Automate follow-ups, lead handling, and repetitive office work with AI software from Vanurtech Media, built for Indian sales and operations teams.",
  path: "/ai-business-automation-india",
  keywords: ["AI business automation India", "sales automation software", "AI CRM India"],
});

export default function AIAutomationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Business Automation",
    description: "AI-powered automation for follow-ups, lead handling, and repetitive operations built for Indian sales and business teams.",
    url: "https://vanurmedia.com/ai-business-automation-india",
    serviceType: "AI Business Automation",
    areaServed: { "@type": "Country", name: "India" },
    provider: {
      "@type": "Organization",
      name: "Vanurtech Media Pvt. Ltd.",
      url: "https://vanurmedia.com"
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AIBusinessAutomationContent />
    </>
  );
}
