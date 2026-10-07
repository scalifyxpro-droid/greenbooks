import React from "react";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Green Books Chartered Accountants Dubai",
  description: "Frequently asked questions regarding corporate tax, VAT, company formation, auditing, and accounting services in UAE by Green Books.",
};

export default function FaqPage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      {/* Banner */}
      <section className="bg-[#2E3880] text-white py-16 px-6 sm:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-[#00A82B]">
            Support &amp; Answers
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto font-light">
            Everything you need to know about UAE financial regulations, accounting standards, and business setup procedures with Green Books.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection />

      {/* Still Have Questions Banner */}
      <section className="py-16 bg-[#F4F9F5] px-6 sm:px-12 text-center border-t border-green-100">
        <div className="max-w-3xl mx-auto">
          <HelpCircle className="w-12 h-12 text-[#00A82B] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2E3880]">
            Still have questions?
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base font-light">
            Can&apos;t find the answer you&apos;re looking for? Reach out directly to our team of chartered accountants at Green Books.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#00A82B] hover:bg-[#008A22] text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all text-sm"
            >
              <span>Speak to an Advisor</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
