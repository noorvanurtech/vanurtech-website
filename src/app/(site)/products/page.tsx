import { pageMetadata } from "@/lib/seo";
import ProductsClient from "./ProductsClient";

export const metadata = pageMetadata({
  title: "Business Software Products India | Vanurtech Media",
  description:
    "Vanurtech Media products: solar plant management, GST finance software, WhatsApp AI chatbot, and HRMS with GPS field tracking for Indian businesses.",
  path: "/products",
  keywords: [
    "business software India",
    "solar management software",
    "HRMS software",
    "WhatsApp chatbot",
    "GST billing software",
    "GPS field tracking software",
  ],
});

export default function ProductsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Vanurtech Business Software Products",
    "description": "Ready-to-use software products from Vanurtech Media for Indian businesses.",
    "url": "https://vanurmedia.com/products",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Solar Plant Management Software",
        "url": "https://vanurmedia.com/products/solar-management-software"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "GST Billing & Finance Software",
        "url": "https://vanurmedia.com/products/finance-management-software"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "WhatsApp AI Chatbot",
        "url": "https://vanurmedia.com/products/whatsapp-ai-chatbot"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "HRMS & GPS Field Tracking Software",
        "url": "https://vanurmedia.com/products/hrms-field-tracking-software"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductsClient />
    </>
  );
}
