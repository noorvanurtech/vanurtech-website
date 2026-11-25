import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/seo";




const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Custom Software, CRM & SaaS Company in India | Vanurtech",
    template: "%s | Vanurtech",
  },
  description:
    "Vanurtech Media builds custom software, CRM, ERP, SaaS, and mobile apps for businesses in India. Get a free consultation in Delhi and Bhubaneswar.",
  keywords: [
    "custom software development company India",
    "CRM development company India",
    "SaaS development company India",
    "website development company India",
    "AI business automation India",
    "mobile app development India",
    "ERP software India",
    "software company Delhi",
    "software company Bhubaneswar",
    "Vanurtech Media",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Custom Software, CRM & SaaS Company in India | Vanurtech",
    description:
      "Vanurtech Media builds custom software, CRM, ERP, SaaS, and mobile apps for businesses in India. Get a free consultation in Delhi and Bhubaneswar.",
    images: [
      {
        url: "/images/logo-1.png",
        width: 1200,
        height: 630,
        alt: "Vanurtech Media — custom software, CRM and SaaS company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software, CRM & SaaS Company in India | Vanurtech",
    description:
      "Vanurtech Media builds custom software, CRM, ERP, SaaS, and mobile apps for businesses in India.",
    images: ["/images/logo-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
};

// Viewport Configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0011' }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo-1.png`,
      width: 300,
      height: 100,
    },
    image: `${SITE_URL}/images/logo-1.png`,
    description:
      "Custom software, CRM, ERP, SaaS, website and mobile app development company in India.",
    email: "info@vanurmedia.com",
    telephone: "+91-7077004890",
    foundingDate: "2015",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 20 },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        postalCode: "751001",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressCountry: "IN",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7077004890",
      email: "info@vanurmedia.com",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61551081436589",
      "https://www.instagram.com/vanur_media",
      "https://www.linkedin.com/company/vanurmedia/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://vanurtech-backend-admin-2-8vsl.onrender.com" />

        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://vanurtech-backend-admin-2-8vsl.onrender.com" />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {/* ✅ UI */}
        <Navbar />

        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
