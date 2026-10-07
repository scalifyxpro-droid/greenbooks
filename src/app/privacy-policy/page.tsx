import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Green Books Chartered Accountants UAE",
  description: "Privacy Policy of Green Books Chartered Accountants regarding client financial data and confidentiality.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      <section className="bg-[#003462] text-white py-16 px-6 sm:px-12 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-gray-200 text-sm sm:text-base font-light">
          Last updated: August 2026
        </p>
      </section>

      <section className="py-16 px-6 sm:px-12 md:px-16 max-w-4xl mx-auto prose prose-slate">
        <h2 className="text-2xl font-bold text-[#003462]">1. Introduction</h2>
        <p className="text-gray-700 leading-relaxed font-light">
          Green Books Chartered Accountants (&quot;Green Books&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to safeguarding the privacy and confidentiality of personal and corporate financial data shared by our clients, website visitors, and prospective partners.
        </p>

        <h2 className="text-2xl font-bold text-[#003462] mt-8">2. Information We Collect</h2>
        <p className="text-gray-700 leading-relaxed font-light">
          We collect information necessary to provide statutory auditing, tax compliance, bookkeeping, and company incorporation services. This includes company incorporation documents, shareholder identification, financial records, transaction statements, and contact details submitted via consultation inquiry forms.
        </p>

        <h2 className="text-2xl font-bold text-[#003462] mt-8">3. Confidentiality and Professional Ethics</h2>
        <p className="text-gray-700 leading-relaxed font-light">
          All client information is managed with the utmost confidentiality in compliance with UAE Federal Law and International Standards on Auditing. We do not sell or monetize client records to third parties under any circumstances.
        </p>

        <h2 className="text-2xl font-bold text-[#003462] mt-8">4. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed font-light">
          If you have questions regarding this Privacy Policy or wish to request data updates, please contact us at{" "}
          <a href="mailto:info@greenbooks.ae" className="text-[#003462] font-semibold underline">
            info@greenbooks.ae
          </a>
          .
        </p>
      </section>
    </main>
  );
}
