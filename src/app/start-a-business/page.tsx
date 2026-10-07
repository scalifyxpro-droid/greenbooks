import React from "react";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Business in UAE | Green Books Chartered Accountants",
  description: "End-to-end guidance for starting a business in Dubai and UAE free zones or mainland.",
};

const service = {
  slug: "start-a-business",
  category: "Business Strategy",
  categoryHref: "/start-a-business",
  title: "Business Plan & Formation Strategy",
  heroHeading: "Comprehensive Business Plan & Startup Setup in UAE",
  subtitle: "Turn your entrepreneurial vision into a thriving, legally protected UAE business.",
  overview: "Starting a business in Dubai requires meticulous strategic preparation, including feasible financial modeling, jurisdiction selection (Mainland vs Freezone), trade licensing approvals, and bank account opening.",
  features: [
    { title: "Strategic Business Plan", description: "Investor-ready business plans with 3-year cash flow and financial projections." },
    { title: "Jurisdiction & Activity Mapping", description: "Selecting the ideal licensing activity and commercial zone for lowest fees and tax efficiency." },
    { title: "Bank Account Opening", description: "Fast-tracked introductions to leading commercial banks in the UAE." },
  ],
  solutions: ["Freezone Incorporation", "Mainland DED Setup", "Investor Visas", "Corporate Banking"],
};

export default function StartABusinessPage() {
  return <ServiceDetailTemplate service={service} />;
}
