import type { Metadata } from "next";
import blogDataJSON from "@/data/blogData";
import { pageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";
import BlogDetailPage from "./BlogPostClient";

type BlogPost = (typeof blogDataJSON.result.blogs)[number];

function findPost(slug: string): BlogPost | undefined {
  return blogDataJSON.result.blogs.find((blog) => blog.slug === slug);
}

function plainText(html: string) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

/** Extracts the first meaningful paragraph for a cleaner meta description */
function extractDescription(html: string): string {
  // Try to get the first <p> tag content
  const match = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  if (match) {
    const text = plainText(match[1]);
    if (text.length > 60) {
      return text.slice(0, 158).trimEnd();
    }
  }
  return plainText(html).slice(0, 158).trimEnd();
}

export function generateStaticParams() {
  return blogDataJSON.result.blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    return pageMetadata({
      title: "Article Not Found | Vanurtech Media",
      description: "This article is not available on the Vanurtech Media blog.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  const description = extractDescription(post.content);

  return pageMetadata({
    title: `${post.title} | Vanurtech Media`,
    description,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
    ogImage: post.coverImage.startsWith("http") ? post.coverImage : `${SITE_URL}${post.coverImage}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = findPost(slug);

  const articleSchema = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: extractDescription(post.content),
        image: post.coverImage.startsWith("http")
          ? post.coverImage
          : `${SITE_URL}${post.coverImage}`,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/logo-1.png`,
          },
        },
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        keywords: post.tags.join(", "),
      }
    : null;

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <BlogDetailPage />
    </>
  );
}
