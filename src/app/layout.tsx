import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Green Books Accounting And Tax Services | UAE",
  description:
    "Green Books Accounting And Tax Services: Expert chartered accountants in Dubai UAE offering corporate tax, VAT, audit, bookkeeping, and company setup at Acico Business Park, Port Saeed, Deira, Dubai.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/green-books-icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Green Books Accounting And Tax Services Dubai",
    description:
      "Expert chartered accountants and licensed tax consultants in Dubai UAE offering statutory audit, corporate tax, VAT, and business formation.",
    url: "https://greenbooks.ae/",
    siteName: "Green Books Accounting And Tax Services",
    images: [
      {
        url: "/green-books-logo-transparent.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "Green Books Accounting And Tax Services",
  "image": "https://greenbooks.ae/green-books-logo-transparent.png",
  "description": "Expert chartered accountants in Dubai UAE offering corporate tax, VAT, audit, bookkeeping, and company setup.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office no. 102-36, Acico Business Park, Port Saeed, Deira",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.2532,
    "longitude": 55.3372
  },
  "url": "https://greenbooks.ae/",
  "telephone": "+971565568571",
  "email": "info@greenbooks.ae",
  "priceRange": "$$",
  "founder": {
    "@type": "Person",
    "name": "Ramiz Izrar",
    "jobTitle": "Managing Director"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "128"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-[#1F2937] bg-white selection:bg-[#00A82B] selection:text-white">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
