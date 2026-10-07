import React from "react";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Valuation & Advisory | Green Books UAE",
  description: "Independent business valuation services for M&A, investor buyouts, and financial reporting in Dubai UAE.",
};

const service = {
  slug: "trade-license",
  category: "Business Strategy",
  categoryHref: "/trade-license",
  title: "Business Valuation",
  heroHeading: "Independent Business Valuation Services in UAE",
  subtitle: "Determine the true fair market value of your enterprise with certified financial valuators.",
  overview: "Whether preparing for equity fundraising, shareholder restructuring, mergers & acquisitions, or partnership dispute resolution, Green Books delivers objective, methodology-driven business valuations aligned with International Valuation Standards (IVS).",
  features: [
    { title: "DCF & Market Multiples", description: "Discounted Cash Flow, Comparable Companies, and Precedent Transactions valuation methodologies." },
    { title: "Intangible Asset Valuation", description: "Valuing trademarks, proprietary technology, client lists, and goodwill." },
    { title: "M&A Deal Support", description: "Supporting buyers and sellers in negotiation, deal structuring, and due diligence." },
  ],
  solutions: ["Shareholder Buyouts", "Equity Raising Valuations", "PPA & Purchase Price Allocation", "Tax-Related Valuations"],
};

export default function TradeLicensePage() {
  return <ServiceDetailTemplate service={service} />;
}
