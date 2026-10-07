import React from "react";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feasibility Study & Market Advisory | Green Books UAE",
  description: "Comprehensive commercial and financial feasibility studies for enterprises in Dubai and UAE.",
};

const service = {
  slug: "guides",
  category: "Business Strategy",
  categoryHref: "/guides",
  title: "Feasibility Study",
  heroHeading: "Commercial & Financial Feasibility Study in UAE",
  subtitle: "Evaluate market viability, capital expenditure requirements, and expected return on investment.",
  overview: "Before committing significant capital to a new venture or branch expansion in the UAE, a rigorous feasibility study provides deep market insights, competitive benchmarking, financial sensitivity models, and risk mitigations.",
  features: [
    { title: "Market & Competitor Analysis", description: "Assessment of local demand, target customer segments, and competitor pricing." },
    { title: "Financial Projections & Break-Even", description: "Detailed 5-year income statements, CAPEX models, and payback periods." },
    { title: "Risk & Regulatory Assessment", description: "Navigating licensing, municipal regulations, and sector-specific compliance." },
  ],
  solutions: ["Bank-Compliant Studies", "Investor Dossiers", "Expansion Feasibility", "Operational Due Diligence"],
};

export default function GuidesPage() {
  return <ServiceDetailTemplate service={service} />;
}
