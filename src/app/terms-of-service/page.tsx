import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Green Books Chartered Accountants UAE",
  description: "Terms and conditions of engagement for services provided by Green Books Chartered Accountants in Dubai UAE.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      <section className="bg-[#003462] text-white py-16 px-6 sm:px-12 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold">Terms of Service</h1>
        <p className="mt-2 text-gray-200 text-sm sm:text-base font-light">
          Last updated: August 2026
        </p>
      </section>

      <section className="py-16 px-6 sm:px-12 md:px-16 max-w-4xl mx-auto prose prose-slate">
        <h2 className="text-2xl font-bold text-[#003462]">1. Acceptance of Terms</h2>
        <p className="text-gray-700 leading-relaxed font-light">
          By accessing this website or engaging Green Books Chartered Accountants for accounting, corporate tax, audit, or business setup services, you agree to comply with and be bound by these Terms of Service.
        </p>

        <h2 className="text-2xl font-bold text-[#003462] mt-8">2. Professional Scope of Work</h2>
        <p className="text-gray-700 leading-relaxed font-light">
          Specific scope, timelines, fees, and deliverables for auditing, taxation, or advisory assignments are governed by individualized Engagement Letters executed between the client and Green Books.
        </p>

        <h2 className="text-2xl font-bold text-[#003462] mt-8">3. Client Responsibilities</h2>
        <p className="text-gray-700 leading-relaxed font-light">
          Clients are responsible for providing complete, truthful, and timely financial documentation, trade licenses, and transaction records required to prepare statutory declarations before the Federal Tax Authority and licensing registries.
        </p>

        <h2 className="text-2xl font-bold text-[#003462] mt-8">4. Governing Law and Jurisdiction</h2>
        <p className="text-gray-700 leading-relaxed font-light">
          These terms and all professional engagements are governed by the applicable laws of the Emirate of Dubai and the Federal Laws of the United Arab Emirates.
        </p>
      </section>
    </main>
  );
}
