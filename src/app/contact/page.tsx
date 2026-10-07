import React from "react";
import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";
import { Clock, Shield, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Green Books Accounting and Tax Services Dubai",
  description: "Get in touch with Green Books Chartered Accountants & Tax Consultants in Dubai for corporate tax consultation, company formation, bookkeeping, and audit services.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      {/* Banner */}
      <section className="bg-[#2E3880] text-white py-16 px-6 sm:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-[#00A82B]">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 tracking-tight">
            Contact Green Books Accounting And Tax Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto font-light">
            Have questions about Corporate Tax, VAT, Bookkeeping, or Company Formation in Dubai? Our certified advisors are ready to help.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs sm:text-sm text-gray-200">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl">
              <Clock className="w-4 h-4 text-[#00A82B]" />
              <span>Mon - Fri: 9:00 AM - 6:00 PM GST</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl">
              <MapPin className="w-4 h-4 text-[#00A82B]" />
              <span>Office no. 102-36, Acico Business Park, Port Saeed, Deira, Dubai, UAE</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl">
              <Shield className="w-4 h-4 text-[#00A82B]" />
              <span>100% Confidential Consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <ContactSection />
    </main>
  );
}
