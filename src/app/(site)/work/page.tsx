import WorkHero from "@/components/Work/WorkHero";
import ProjectGrid from "@/components/Work/ProjectsGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio & Case Studies | Vanurtech Media India",
  description:
    "Vanurtech Media portfolio: websites, CRM, SaaS, and custom software delivered for Indian businesses since 2015. View selected client projects.",
  path: "/work",
  keywords: [
    "software portfolio India",
    "web development case studies",
    "Vanurtech projects",
    "CRM portfolio",
    "software company work India",
  ],
});

export default function WorkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Vanurtech Software Portfolio",
    "description": "Selected websites, CRM systems, and custom software projects delivered by Vanurtech Media for Indian businesses.",
    "url": "https://vanurmedia.com/work",
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
      <WorkHero />
      <ProjectGrid />
    </>
  );
}
