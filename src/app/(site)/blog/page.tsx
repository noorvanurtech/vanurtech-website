import BlogClient from "./BlogClient";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog | Software, SEO & Web Tips | Vanurtech Media",
  description:
    "Practical articles from Vanurtech Media on SEO, website speed, mobile design, automation, and choosing a software company in India.",
  path: "/blog",
  keywords: [
    "software blog India",
    "SEO articles",
    "website design tips",
    "tech blog India",
    "digital marketing blog",
  ],
});

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Vanurtech Media Blog",
    "description": "Practical articles on SEO, website speed, mobile design, automation, and software development for Indian businesses.",
    "url": "https://vanurmedia.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Vanurtech Media Pvt. Ltd.",
      "url": "https://vanurmedia.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vanurmedia.com/images/logo-1.png"
      }
    },
    "inLanguage": "en-IN"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient />
    </>
  );
}
