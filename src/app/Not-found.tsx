import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Vanurtech Media" },
  description: "This page is not on the Vanurtech Media website.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0012] text-white flex flex-col items-center justify-center px-6 text-center">
      <p className="text-purple-300 text-sm tracking-[0.2em] uppercase mb-4">404</p>
      <h1 className="text-3xl sm:text-5xl font-bold mb-4">Page not found</h1>
      <p className="text-gray-400 max-w-md mb-8">
        The page you requested is not available. Browse our services or go back to the homepage.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/" className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold">
          Home
        </Link>
        <Link href="/services" className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold">
          Services
        </Link>
      </div>
    </div>
  );
}
