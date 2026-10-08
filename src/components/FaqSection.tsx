"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "What services does Green Books offer?",
    answer:
      "Green Books offers a comprehensive range of professional financial services including corporate tax registration and filing, VAT advisory, statutory auditing, bookkeeping, outsourced CFO, and business setup across UAE free zones and mainland.",
  },
  {
    question: "How can Green Books help my business grow?",
    answer:
      "Our expert chartered accountants provide strategic financial modeling, tax planning, cash flow forecasting, and regulatory compliance to identify growth opportunities, eliminate financial leakages, and optimize operations in the dynamic UAE market.",
  },
  {
    question: "What makes Green Books different from other consultancy firms?",
    answer:
      "Green Books stands out for its deep local expertise in UAE tax laws, personalized dedicated account managers, transparent upfront pricing without hidden charges, and end-to-end concierge support with UAE government authorities.",
  },
  {
    question: "Can Green Books assist with international business expansion?",
    answer:
      "Yes, we specialize in cross-border tax structuring, international Double Taxation Avoidance Agreement (DTAA) treaty benefits, foreign tax credits, and establishing compliant UAE holding entities for overseas groups.",
  },
  {
    question: "Can Green Books handle complex corporate tax and VAT filing?",
    answer:
      "Yes, our registered tax agents possess deep knowledge of UAE Corporate Tax Law (Decree-Law No. 47) and VAT regulations, ensuring accurate, audited, and optimized tax submissions on the EmaraTax portal.",
  },
  {
    question: "What accounting services does Green Books provide?",
    answer:
      "We provide end-to-end cloud bookkeeping (Zoho Books, Xero, QuickBooks), bank reconciliation, payroll processing, management reporting, IFRS adoption, and backlog accounts cleanup.",
  },
  {
    question: "Does Green Books offer audit and assurance services?",
    answer:
      "Yes, we provide independent statutory external audits, internal risk reviews, forensic audits, inventory verification, and fixed asset inspections recognized by all UAE free zones and banking institutions.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-16 md:py-24 px-6 sm:px-12 md:px-16 flex flex-col items-center bg-gradient-to-b from-[#F0F5FA] via-[#F5F9FD] to-[#EDF3F9] border-t border-blue-100/60">
      <div className="max-w-4xl w-full">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00A82B]">
            Support &amp; Answers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-[#2E3880]">
            <span className="border-b-4 border-[#00A82B] pb-2">FAQs</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base font-light">
            Find answers to frequently asked questions about our UAE tax, accounting, and business consultancy services.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-200 bg-[#F4F9F5]/40 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-green-50/50"
                >
                  <span className="font-semibold text-base sm:text-lg text-[#2E3880] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`rounded-full p-2 bg-[#00A82B] text-white shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-gray-700 font-light leading-relaxed border-t border-green-100/60 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
