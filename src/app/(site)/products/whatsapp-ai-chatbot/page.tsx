import WhatsAppChatbotContent from "./WhatsAppChatbotContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "WhatsApp AI Chatbot for Business in India | Vanurtech Media",
  description:
    "Answer WhatsApp enquiries, capture leads, and handle repeat questions with an AI chatbot built by Vanurtech for Indian businesses.",
  path: "/products/whatsapp-ai-chatbot",
  keywords: ["WhatsApp AI chatbot India", "WhatsApp business automation", "lead chatbot"],
});

export default function WhatsAppChatbotPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "WhatsApp AI Chatbot",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description: "AI-powered WhatsApp chatbot that answers enquiries, captures leads, and handles repeat questions for Indian businesses.",
    url: "https://vanurmedia.com/products/whatsapp-ai-chatbot",
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
      <WhatsAppChatbotContent />
    </>
  );
}
