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
    icon: "/green-books-icon.png",
    apple: "/green-books-icon.png",
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-[#1F2937] bg-white selection:bg-[#00A82B] selection:text-white">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
