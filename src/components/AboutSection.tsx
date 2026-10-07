import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="w-full flex flex-col md:flex-row justify-between items-stretch bg-[#F4F9F5]">
      {/* Content Column */}
      <div className="w-full md:w-1/2 shrink-0 px-8 sm:px-12 md:px-16 lg:px-20 py-14 sm:py-20 flex flex-col justify-center">
        <div className="border-l-4 border-[#00A82B] pl-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00A82B]">
            About Our Firm
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 text-[#2E3880]">
            Welcome to <span className="text-[#00A82B]">Green Books</span>
          </h2>
        </div>

        <p className="mt-6 tracking-normal text-[#1F2937]/80 text-sm sm:text-base font-light leading-relaxed">
          Welcome to <strong className="font-semibold text-[#1F2937]">GREEN BOOKS</strong>, your gateway to unparalleled financial excellence and business success in the vibrant landscape of Dubai. At Green Books, we don&apos;t just provide accounting services; we craft solutions that transcend expectations.
        </p>

        <p className="mt-4 tracking-normal text-[#1F2937]/80 text-sm sm:text-base font-light leading-relaxed">
          Whether you&apos;re navigating the complexities of corporate tax, seeking strategic VAT advice, exploring business incorporation in UAE mainland or free zones, or ensuring compliance with the latest regulations, you&apos;ve arrived at the right destination. Our team of seasoned professionals is dedicated to tailoring bespoke strategies that align with your unique business aspirations.
        </p>

        <p className="mt-4 tracking-normal text-[#1F2937]/80 text-sm sm:text-base font-light leading-relaxed">
          With a commitment to precision, innovation, and unwavering integrity, Green Books invites you to embark on a journey where success is not just a destination but a continuous evolution. Explore the possibilities, discover the expertise, and welcome to a realm where your business ambitions find their perfect partner.
        </p>

        <div className="mt-8 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#00A82B]" />
            <span className="text-xs sm:text-sm font-semibold text-gray-800">FTA Certified Tax Experts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#2E3880]" />
            <span className="text-xs sm:text-sm font-semibold text-gray-800">100% UAE Compliant</span>
          </div>
        </div>
      </div>

      {/* Image Column */}
      <div className="w-full md:w-1/2 shrink-0 relative min-h-[380px] md:min-h-[500px] overflow-hidden group">
        <Image
          src="/home-about.jpg"
          alt="Green Books Financial Consulting Services Dubai"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#2E3880]/15 group-hover:bg-transparent transition-colors" />
      </div>
    </section>
  );
}
