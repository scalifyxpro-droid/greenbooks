import React from "react";
import Link from "next/link";
import {
  Code,
  Calculator,
  FileText,
  ShieldCheck,
  Landmark,
  ClipboardCheck,
  Briefcase,
  Award,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    title: "Software Solutions",
    description: "Custom accounting software & automated compliance tools tailored to your business needs.",
    href: "/services/aml-diligence",
    icon: Code,
  },
  {
    title: "Accounting Services",
    description: "Comprehensive IFRS-compliant bookkeeping, reporting, and outsourced CFO solutions.",
    href: "/accounting/accounting-bookkeeping",
    icon: Calculator,
  },
  {
    title: "Tax Advisory",
    description: "Expert Corporate Tax & VAT advice to ensure total compliance and minimize liability.",
    href: "/taxation/corporate-tax-uae",
    icon: FileText,
  },
  {
    title: "Compliance Services",
    description: "Ensuring regulatory AML, ESR, and UBO compliance for your business operations.",
    href: "/services/aml",
    icon: ShieldCheck,
  },
  {
    title: "Bank Account Opening",
    description: "Hassle-free corporate bank account opening assistance with premier UAE financial institutions.",
    href: "/accounting/bank-reconciliation",
    icon: Landmark,
  },
  {
    title: "Audit & Assurance",
    description: "Statutory audit and internal assurance services for transparent and accurate financial reporting.",
    href: "/assurance/external-audit",
    icon: ClipboardCheck,
  },
  {
    title: "Business Setup",
    description: "Seamless company formation in Dubai Free Zones and UAE Mainland with 100% foreign ownership.",
    href: "/business-setup/freezone-overview",
    icon: Briefcase,
  },
  {
    title: "Golden Visa",
    description: "Secure your 10-year UAE Golden Visa for investors, entrepreneurs, and executives.",
    href: "/services/golden-visa-uae",
    icon: Award,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 sm:px-12 md:px-16 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00A82B]">
            Comprehensive Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-[#2E3880]">
            <span className="border-b-4 border-[#00A82B] pb-2">Our Services</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base font-light">
            End-to-end accounting, corporate tax, statutory audit, and business advisory services engineered for modern enterprises by Green Books.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative h-[270px] flex flex-col justify-end bg-gradient-to-br from-[#2E3880] to-[#1C235A] hover:from-[#00A82B] hover:to-[#008A22] p-6 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 text-white"
              >
                {/* Background Accent Pill */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-24 h-24 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="p-3 bg-white/10 group-hover:bg-white w-fit mb-4 rounded-xl shadow-md text-[#00A82B] group-hover:text-[#008A22] transition-all duration-300">
                    <Icon className="w-6 h-6 text-white group-hover:text-[#00A82B] transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm mt-2 text-gray-200 group-hover:text-white/95 font-light leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Floating Action Arrow */}
                <div className="absolute right-5 bottom-5 translate-y-16 group-hover:translate-y-0 transition-transform duration-300 bg-white p-2.5 rounded-full text-[#00A82B] shadow-lg">
                  <ArrowUpRight className="w-5 h-5 font-bold" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
