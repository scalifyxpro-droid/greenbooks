import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ShieldCheck, ArrowRight, Phone, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Green Books Chartered Accountants UAE",
  description: "Learn more about Green Books Chartered Accountants & Tax Consultants. Dedicated to providing higher level financial and setup advisory services without higher costs.",
};

const BENEFITS = [
  {
    step: "01",
    title: "A higher level of service without the higher costs",
    description:
      "Green Books is known in the market to provide a higher standard of company setup guidance – without higher costs.",
    details:
      "We deliver bespoke solutions that match international accounting firms with accessible and transparent commercial pricing.",
  },
  {
    step: "02",
    title: "A one-stop-shop service",
    description:
      "We offer a concierge service with dedicated account managers. They are available to answer all of your questions and provide full transparency while liaising with UAE government authorities on your behalf.",
    details:
      "From company licensing, bank account opening, VAT, corporate tax, to bookkeeping and annual audit — all under one unified roof.",
  },
  {
    step: "03",
    title: "Better time and cost management",
    description:
      "Your time-investment throughout the setup process? As little as just a few hours. For those looking to check off all the legal boxes of corporate ownership in the UAE while maintaining flexibility when it comes to managing costs, Green Books is your partner.",
    details:
      "We streamline paperwork and compliance so you can focus 100% of your energy on growing your core business operations.",
  },
];

const GALLERY = [
  "/stock-images/01-corporate-tax-uae.jpg",
  "/stock-images/02-accounting-bookkeeping.jpg",
  "/stock-images/03-audit-assurance.jpg",
  "/stock-images/09-trade-license-dubai.jpg",
  "/stock-images/10-golden-visa-uae.jpg",
  "/stock-images/11-software-cloud-accounting.jpg",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#F8FAFD]">
      {/* Hero Banner */}
      <section className="relative w-full py-24 md:py-32 bg-[#2E3880] text-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <Image
            src="/stock-images/14-dubai-difc-architecture.jpg"
            alt="About Green Books Dubai Headquarters"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-[#00A82B]">
            Chartered Accountants &amp; Tax Advisors
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mt-3 tracking-tight">
            About Green Books
          </h1>
          <p className="mt-6 text-lg sm:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
            Our mission is to provide value addition while you can focus 100% on running your business.
          </p>
        </div>
      </section>

      {/* Intro Split Section */}
      <section className="py-20 px-6 sm:px-12 md:px-16 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="border-l-4 border-[#00A82B] pl-4 mb-6">
              <span className="text-xs uppercase tracking-widest font-bold text-[#00A82B]">
                Why UAE Businesses Trust Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E3880] mt-1">
                Setting Up a Company With No Regrets
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed font-light text-base mb-6">
              Welcome to <strong className="font-semibold text-gray-900">Green Books</strong>, your gateway to unparalleled financial excellence and business success in the vibrant landscape of Dubai. At Green Books, we don&apos;t just provide services; we craft solutions that transcend expectations.
            </p>
            <p className="text-gray-600 leading-relaxed font-light text-base mb-8">
              Whether you&apos;re navigating the complexities of corporate tax, seeking strategic audit advice, exploring business incorporation in UAE mainland or free zones, or ensuring compliance with AML and ESR regulations, our experienced team provides end-to-end guidance tailored to your ambitions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-[#F4F9F5] rounded-xl border border-green-100">
                <ShieldCheck className="w-6 h-6 text-[#00A82B] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  FTA Tax Agent Backed
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-[#F4F9F5] rounded-xl border border-green-100">
                <Award className="w-6 h-6 text-[#2E3880] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  Certified Chartered Accountants
                </span>
              </div>
            </div>
          </div>

          <div className="relative min-h-[420px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/stock-images/audit-tax-documents.jpg"
              alt="Green Books Audit and Tax Advisory Services"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Managing Director Leadership Spotlight */}
      <section className="py-12 px-6 sm:px-12 md:px-16 lg:px-20 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#2E3880] to-[#181E43] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A82B]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00A82B]">
                Executive Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Ramiz Izrar
              </h2>
              <p className="text-sm font-semibold text-[#00A82B] uppercase tracking-wider">
                Managing Director — Green Books Accounting and Tax Services
              </p>
              <p className="text-gray-200 text-sm sm:text-base font-light leading-relaxed pt-2">
                &ldquo;Our vision at Green Books is to provide seamless, audit-proof financial intelligence and tax advisory to every entrepreneur, corporate entity, and international investor operating in the UAE. We combine local regulatory mastery with global accounting standards to empower your business growth without bureaucratic friction.&rdquo;
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm">
                <a
                  href="tel:+971565568571"
                  className="flex items-center gap-2 text-white hover:text-[#00A82B] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#00A82B]" />
                  <span>+971 56 556 8571</span>
                </a>
                <a
                  href="mailto:info@greenbooks.ae"
                  className="flex items-center gap-2 text-white hover:text-[#00A82B] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#00A82B]" />
                  <span>info@greenbooks.ae</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <Link
                href="/contact"
                className="bg-[#00A82B] hover:bg-[#008A22] text-white font-bold px-8 py-4 rounded-2xl shadow-xl transition-all duration-200 text-sm flex items-center gap-2"
              >
                <span>Connect With Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Value Pillars */}
      <section className="py-20 bg-[#F4F9F5] px-6 sm:px-12 md:px-16 lg:px-20 border-y border-green-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2E3880]">
              <span className="border-b-4 border-[#00A82B] pb-2">
                Our Core Commitments
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base font-light">
              Experience the difference of working with a premier financial consulting firm in the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map((item) => (
              <div
                key={item.step}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <span className="text-5xl font-black text-[#2E3880]/15 group-hover:text-[#00A82B] transition-colors duration-300 block mb-4">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-[#2E3880] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
                    {item.description}
                  </p>
                </div>
                <p className="text-xs text-gray-500 italic border-t pt-3 font-light">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-6 sm:px-12 md:px-16 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2E3880]">
            Our Presence in the UAE
          </h2>
          <p className="text-sm text-gray-600 mt-2 font-light">
            Empowering hundreds of multinational corporations, SMEs, and ambitious founders.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY.map((imgSrc, i) => (
            <div
              key={i}
              className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-md group"
            >
              <Image
                src={imgSrc}
                alt={`Green Books Milestone ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#2E3880]/10 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="bg-[#2E3880] text-white py-16 px-6 sm:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Contact Us for Hassle-Free Company Setup &amp; Advisory
          </h2>
          <p className="text-gray-200 text-sm sm:text-base font-light max-w-2xl mx-auto">
            We provide a free initial consultation that will help answer every question you may have about setting up a company or filing taxes in the UAE.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#00A82B] hover:bg-[#008A22] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
