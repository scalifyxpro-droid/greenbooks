import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ChevronRight } from "lucide-react";

interface HeroProps {
  onOpenEnquire?: () => void;
}

export default function Hero({ onOpenEnquire }: HeroProps) {
  return (
    <section className="relative w-full h-screen min-h-[640px] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero1.webp"
          alt="Dubai Skyline Business District"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111A35]/90 via-[#1A2342]/75 to-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24 max-w-5xl text-white pt-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium mb-6 text-[#00A82B]">
          <span className="w-2 h-2 rounded-full bg-[#00A82B] animate-ping" />
          <span className="text-white">Green Books</span> — Leading Accounting &amp; Tax Consultants in Dubai
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.18] mb-6 drop-shadow-md">
          Empowering Your Business Journey with{" "}
          <span className="text-[#00A82B]">Strategic Financial Solutions.</span>
        </h1>

        <p className="text-base sm:text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-8 max-w-3xl drop-shadow">
          Offering expert solutions for accounting, corporate tax, VAT, and business growth in Dubai and across the UAE.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            onClick={onOpenEnquire ? (e) => { e.preventDefault(); onOpenEnquire(); } : undefined}
            className="bg-[#00A82B] hover:bg-[#008A22] text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center gap-2 group"
          >
            <span>Enquire Now</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="#about"
            className="bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md px-6 py-3.5 rounded-xl font-semibold text-base transition-all duration-200"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Learn More Scroll Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center z-10">
        <a
          href="#about"
          className="text-white/80 hover:text-white text-sm flex flex-col items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span className="tracking-widest uppercase text-xs font-medium">Learn more</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#00A82B]" />
        </a>
      </div>
    </section>
  );
}
