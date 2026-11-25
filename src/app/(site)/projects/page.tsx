import ProjectsClient from "./ProjectsClient";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Client Projects: Web, CRM & SaaS | Vanurtech Media",
  description:
    "See Vanurtech client projects in website development, CRM, SaaS, and AI automation. Real work for businesses that needed software built in India.",
  path: "/projects",
  keywords: [
    "software projects India",
    "CRM case studies",
    "website portfolio",
    "SaaS project examples",
    "custom software client work",
  ],
});

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Vanurtech Client Projects",
    "description": "Website development, CRM, SaaS, and AI automation projects delivered by Vanurtech Media for Indian businesses.",
    "url": "https://vanurmedia.com/projects",
    "publisher": {
      "@type": "Organization",
      "name": "Vanurtech Media Pvt. Ltd.",
      "url": "https://vanurmedia.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectsClient />
    </>
  );
}