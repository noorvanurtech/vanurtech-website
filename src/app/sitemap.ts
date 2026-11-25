import { MetadataRoute } from "next";
import blogDataJSON from "@/data/blogData";
import { SITE_URL } from "@/lib/seo";

type ChangeFrequency = "daily" | "weekly" | "monthly" | "yearly";

const pages: { path: string; priority: number; changeFrequency: ChangeFrequency }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" },
  { path: "/work", priority: 0.8, changeFrequency: "weekly" },
  { path: "/projects", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/website-development-company-india", priority: 0.9, changeFrequency: "monthly" },
  { path: "/mobile-app-development-company-india", priority: 0.9, changeFrequency: "monthly" },
  { path: "/saas-development-company-india", priority: 0.9, changeFrequency: "monthly" },
  { path: "/crm-development-company-india", priority: 0.9, changeFrequency: "monthly" },
  { path: "/crm-erp-development-company-india", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ai-business-automation-india", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ui-ux-design-services-india", priority: 0.8, changeFrequency: "monthly" },
  { path: "/cyber-security-services-india", priority: 0.8, changeFrequency: "monthly" },
  { path: "/healthcare-clinic-solutions-india", priority: 0.8, changeFrequency: "monthly" },
  { path: "/education-institute-solutions-india", priority: 0.8, changeFrequency: "monthly" },
  { path: "/travel-hospitality-solutions-india", priority: 0.8, changeFrequency: "monthly" },
  { path: "/real-estate-solutions-india", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solar-renewable-solutions-india", priority: 0.8, changeFrequency: "monthly" },
  { path: "/small-medium-business-solutions-india", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/solar-management-software", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/finance-management-software", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/whatsapp-ai-chatbot", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/hrms-field-tracking-software", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogDataJSON.result.blogs.map((blog) => ({
    url: `${SITE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
