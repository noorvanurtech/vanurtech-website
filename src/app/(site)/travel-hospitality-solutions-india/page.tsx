import TravelServiceContent from "./TravelServiceContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Travel & Hospitality Software in India | Vanurtech Media",
  description:
    "Booking, itinerary, and hotel operations software for travel agencies and hospitality businesses. Custom-built by Vanurtech in India.",
  path: "/travel-hospitality-solutions-india",
  keywords: ["travel software India", "hotel management software", "booking engine development"],
});

export default function TravelPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Travel & Hospitality Software Solutions",
    "description": "Booking, itinerary, and hotel operations software for travel agencies and hospitality businesses in India.",
    "url": "https://vanurmedia.com/travel-hospitality-solutions-india",
    "serviceType": "Travel & Hospitality Software Development",
    "areaServed": { "@type": "Country", "name": "India" },
    "provider": {
      "@type": "Organization",
      "name": "Vanurtech Media Pvt. Ltd.",
      "url": "https://vanurmedia.com"
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
      <TravelServiceContent />
    </>
  );
}
