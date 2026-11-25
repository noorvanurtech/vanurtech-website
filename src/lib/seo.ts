import type { Metadata } from "next";

export const SITE_URL = "https://vanurmedia.com";
export const SITE_NAME = "Vanurtech Media Pvt. Ltd.";
// TODO: Replace with a proper 1200×630 OG banner image (not just the logo)
export const OG_IMAGE = "/images/logo-1.png";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  /** Optional override for og:image. Defaults to OG_IMAGE. Use absolute URL or root-relative path. */
  ogImage?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
  ogImage,
}: PageSeoInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const image = ogImage ?? OG_IMAGE;
  const imageAbsolute = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: imageAbsolute,
          secureUrl: imageAbsolute,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageAbsolute],
    },
  };
}
