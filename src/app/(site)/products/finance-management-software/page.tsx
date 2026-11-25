import FinanceManagementContent from "./FinanceManagementContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "GST Billing & Finance Software in India | Vanurtech Media",
  description:
    "Create invoices, track expenses, and keep GST billing organised with Vanurtech finance software built for Indian businesses.",
  path: "/products/finance-management-software",
  keywords: ["GST billing software", "finance management software India", "invoicing software"],
});

export default function FinanceManagementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Finance Management Software",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Android, iOS",
    "description": "GST invoicing, expense tracking, and finance management software built for Indian businesses.",
    "url": "https://vanurmedia.com/products/finance-management-software",
    "provider": {
      "@type": "Organization",
      "name": "Vanurtech Media Pvt. Ltd.",
      "url": "https://vanurmedia.com",
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FinanceManagementContent />
    </>
  );
}
