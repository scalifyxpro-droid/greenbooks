import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { LinkedInIcon, InstagramIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="w-full bg-[#181E43] text-white">
      {/* Top CTA Banner */}
      <div className="px-6 md:px-16 lg:px-20 py-8 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-white/10">
        <div className="border-l-4 border-[#00A82B] pl-4">
          <p className="italic text-[#00A82B] text-lg md:text-xl font-light">
            #BeYourOwnBoss
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 text-white">
            UAE&apos;s Premier Accounting &amp; Tax Firm
          </h3>
        </div>
        <div className="flex items-center md:justify-end">
          <a
            href="mailto:info@greenbooks.ae"
            className="inline-flex items-center gap-3 bg-white/10 hover:bg-[#00A82B] border border-white/20 hover:border-[#00A82B] px-6 py-3.5 rounded-xl transition-all duration-200 group text-sm md:text-base font-medium"
          >
            <Mail className="w-5 h-5 text-[#00A82B] group-hover:text-white transition-colors" />
            <span>info@greenbooks.ae</span>
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="px-6 md:px-16 lg:px-20 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="inline-block mb-2">
              <Image
                src="/green-books-logo-white.png"
                alt="Green Books Accounting And Tax Services Logo"
                width={160}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              Empowering your business journey with strategic financial solutions, corporate tax advisory, statutory audit, and company formation across the UAE under the leadership of Managing Director <strong>Ramiz Izrar</strong>.
            </p>
            <div className="space-y-3 pt-2 text-xs sm:text-sm text-gray-300">
              <a
                href="tel:+971565568571"
                className="flex items-center gap-2 hover:text-[#00A82B] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#00A82B] shrink-0" />
                <span>+971 56 556 8571</span>
              </a>
              <a
                href="mailto:info@greenbooks.ae"
                className="flex items-center gap-2 hover:text-[#00A82B] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#00A82B] shrink-0" />
                <span>info@greenbooks.ae</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00A82B] shrink-0 mt-1" />
                <span className="text-xs text-gray-300 leading-normal">
                  Office no. 102-36, Acico Business Park, Port Saeed, Deira, Dubai, UAE.
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-4">
              <a
                href="https://www.linkedin.com/company/greenbooks-uae/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0077b5] flex items-center justify-center transition-all duration-200"
              >
                <LinkedInIcon className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://wa.me/971565568571"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00A82B] flex items-center justify-center transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.instagram.com/greenbooks_uae/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E4405F] flex items-center justify-center transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Business Setup & Advisory */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#00A82B] tracking-wider uppercase">
              Business Setup &amp; Advisory
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="/business-setup/freezone-overview" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  Business Setup in Freezone
                </Link>
              </li>
              <li>
                <Link href="/business-setup/mainland-overview" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  Business Setup in UAE Mainland
                </Link>
              </li>
              <li>
                <Link href="/services/pro-services" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  Pro Services
                </Link>
              </li>
              <li>
                <Link href="/services/golden-visa-uae" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  Golden Visa
                </Link>
              </li>
              <li>
                <Link href="/services/aml" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  Anti Money Laundering (AML)
                </Link>
              </li>
              <li>
                <Link href="/services/esr" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  Economic Substance (ESR)
                </Link>
              </li>
              <li>
                <Link href="/services/ubo" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  Beneficial Ownership (UBO)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: ACCOUNTING */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#00A82B] tracking-wider uppercase">
              Accounting
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="/accounting/accounting-bookkeeping" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  Accounting &amp; Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="/accounting/outsourced-cfo" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  Outsourced CFO Service
                </Link>
              </li>
              <li>
                <Link href="/accounting/backlog-accounting" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  Backlog Accounting
                </Link>
              </li>
              <li>
                <Link href="/accounting/ifrs-implementation" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  IFRS Implementation
                </Link>
              </li>
              <li>
                <Link href="/accounting/bank-reconciliation" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  Bank Reconciliation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: ASSURANCE */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#00A82B] tracking-wider uppercase">
              Assurance
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="/assurance/external-audit" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  External Audit Service
                </Link>
              </li>
              <li>
                <Link href="/assurance/internal-audit" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  Internal Audit Service
                </Link>
              </li>
              <li>
                <Link href="/assurance/forensic-audit" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  Forensic Audit Service
                </Link>
              </li>
              <li>
                <Link href="/assurance/inventory-audit" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  Inventory Audit Service
                </Link>
              </li>
              <li>
                <Link href="/assurance/asset-verification" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  Asset Verification Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Certification & Software */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#00A82B] tracking-wider uppercase">
              Certification &amp; Software
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="/services/icv-certification" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  ICV Certification
                </Link>
              </li>
              <li>
                <Link href="/services/iso-certification" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  ISO Certification
                </Link>
              </li>
              <li>
                <Link href="/services/zoho-books" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  Zoho Books
                </Link>
              </li>
              <li>
                <Link href="/services/aml-diligence" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  AML Diligence
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/taxation/corporate-tax-uae" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  Corporate Tax in UAE
                </Link>
              </li>
              <li>
                <Link href="/taxation/vat-uae" className="hover:text-[#00A82B] transition-colors inline-block hover:translate-x-1 duration-150">
                  VAT in UAE
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            Copyright &copy; 2026 Green Books Accounting And Tax Services. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
