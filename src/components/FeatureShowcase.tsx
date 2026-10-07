import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  FileCheck2,
  UserCheck,
  Calculator,
  Receipt,
  FileSpreadsheet,
  Landmark,
  ShieldAlert,
  Contact,
  Gift,
  Coins,
  Smile,
  ArrowRight,
} from "lucide-react";

interface FeatureShowcaseProps {
  onOpenEnquire?: () => void;
}

export default function FeatureShowcase({ onOpenEnquire }: FeatureShowcaseProps) {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Need help setting up your business? */}
      <section className="flex flex-col md:flex-row items-stretch bg-[#143526] text-white">
        <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center">
          <div className="border-l-4 border-[#00A82B] pl-4 mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Need help setting up your business?
            </h2>
          </div>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-8 font-light">
            Starting a business in the UAE can be a complex process, but our team of experts is here to make it easy. Green Books offers comprehensive solutions for setting up your business in free zones or the mainland, ensuring that you are fully compliant with local regulations.
          </p>

          <div className="space-y-6">
            <div className="flex items-start group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 bg-[#00A82B]/20 group-hover:bg-[#00A82B] text-[#00A82B] group-hover:text-white transition-all shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Company Formation and Licensing
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light mt-0.5">
                  Fast and reliable company setup services across various free zones and mainland regions.
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 bg-[#00A82B]/20 group-hover:bg-[#00A82B] text-[#00A82B] group-hover:text-white transition-all shrink-0">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  UAE Residence Visa
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light mt-0.5">
                  Guidance through the entire process of securing your UAE investor and employment residence visa.
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 bg-[#00A82B]/20 group-hover:bg-[#00A82B] text-[#00A82B] group-hover:text-white transition-all shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Business Sponsorship &amp; PRO
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light mt-0.5">
                  Connecting you with trusted local corporate sponsors and handling government approvals.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              onClick={onOpenEnquire ? (e) => { e.preventDefault(); onOpenEnquire(); } : undefined}
              className="inline-flex items-center gap-2 bg-[#00A82B] hover:bg-[#008A22] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all group"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-[500px]">
          <Image
            src="/home-bs.jpg"
            alt="Green Books Business Setup Dubai"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 2. Need help with your finances? */}
      <section className="flex flex-col md:flex-row-reverse items-stretch bg-[#2E3880] text-white">
        <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center">
          <div className="border-l-4 border-[#00A82B] pl-4 mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Need help with your finances?
            </h2>
          </div>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-8 font-light">
            Managing your finances is critical to your business&apos;s success. At Green Books, our team of tax and accounting experts provide tailored services to ensure you comply with UAE regulations and optimize your financial strategies.
          </p>

          <div className="space-y-6">
            <div className="flex items-start group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 bg-[#00A82B]/20 group-hover:bg-[#00A82B] text-[#00A82B] group-hover:text-white transition-all shrink-0">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Corporate Tax Planning
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light mt-0.5">
                  Maximize your savings with strategic tax planning and compliance support.
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 bg-[#00A82B]/20 group-hover:bg-[#00A82B] text-[#00A82B] group-hover:text-white transition-all shrink-0">
                <Receipt className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  VAT Compliance and Filing
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light mt-0.5">
                  Expert advice to navigate VAT regulations and ensure accurate filings.
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 bg-[#00A82B]/20 group-hover:bg-[#00A82B] text-[#00A82B] group-hover:text-white transition-all shrink-0">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Financial Reporting
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light mt-0.5">
                  Professional preparation of audited financial statements and management reports.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              onClick={onOpenEnquire ? (e) => { e.preventDefault(); onOpenEnquire(); } : undefined}
              className="inline-flex items-center gap-2 bg-[#00A82B] hover:bg-[#008A22] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all group"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-[500px]">
          <Image
            src="/home-bs-2.jpg"
            alt="Green Books Financial Planning and Corporate Tax"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 3. Ensure smooth operations for your business. */}
      <section className="flex flex-col md:flex-row items-stretch bg-[#143526] text-white">
        <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center">
          <div className="border-l-4 border-[#00A82B] pl-4 mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Ensure smooth operations for your business.
            </h2>
          </div>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-8 font-light">
            Running a successful business in the UAE requires more than just setting up; it involves staying compliant and managing essential services. Green Books provides all the support you need to operate efficiently and within the law.
          </p>

          <div className="space-y-6">
            <div className="flex items-start group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 bg-[#00A82B]/20 group-hover:bg-[#00A82B] text-[#00A82B] group-hover:text-white transition-all shrink-0">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Bank Account Opening
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light mt-0.5">
                  Assistance in opening business bank accounts with top UAE commercial banks.
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 bg-[#00A82B]/20 group-hover:bg-[#00A82B] text-[#00A82B] group-hover:text-white transition-all shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Compliance Services
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light mt-0.5">
                  Ensure your business complies with all AML, ESR, and statutory regulations.
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 bg-[#00A82B]/20 group-hover:bg-[#00A82B] text-[#00A82B] group-hover:text-white transition-all shrink-0">
                <Contact className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  PRO and Visa Services
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light mt-0.5">
                  Hassle-free PRO services to handle all your government-related paperwork.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              onClick={onOpenEnquire ? (e) => { e.preventDefault(); onOpenEnquire(); } : undefined}
              className="inline-flex items-center gap-2 bg-[#00A82B] hover:bg-[#008A22] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all group"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-[500px]">
          <Image
            src="/home-bs-3.jpg"
            alt="Business Banking and Compliance Green Books Dubai"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 4. Refer & Earn – Share Savings, Grow Together! */}
      <section className="flex flex-col md:flex-row-reverse items-stretch bg-[#F4F9F5] text-gray-900">
        <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center">
          <div className="border-l-4 border-[#00A82B] pl-4 mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E3880] leading-tight">
              Refer &amp; Earn – Share Savings, Grow Together!
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 font-light">
            At Green Books, we believe good financial advice is worth sharing — and now, it pays to do so! When you refer a friend, colleague, or business to our professional financial and tax services, you both enjoy exclusive rewards and discounts.
          </p>

          <div className="space-y-6">
            <div className="flex items-start group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 bg-[#00A82B]/20 group-hover:bg-[#00A82B] text-[#00A82B] group-hover:text-white transition-all shrink-0">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-[#2E3880]">
                  Refer someone to Green Books for any of our financial solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 bg-[#00A82B]/20 group-hover:bg-[#00A82B] text-[#00A82B] group-hover:text-white transition-all shrink-0">
                <Coins className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-[#2E3880]">
                  Earn rewards when your referral signs up for any of our services.
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 bg-[#00A82B]/20 group-hover:bg-[#00A82B] text-[#00A82B] group-hover:text-white transition-all shrink-0">
                <Smile className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-[#2E3880]">
                  The more you refer, the more you earn — it&apos;s that simple!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              onClick={onOpenEnquire ? (e) => { e.preventDefault(); onOpenEnquire(); } : undefined}
              className="inline-flex items-center gap-2 bg-[#00A82B] hover:bg-[#008A22] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all group"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-[500px]">
          <Image
            src="/home-bs-4.jpg"
            alt="Refer and Earn Rewards with Green Books"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}
