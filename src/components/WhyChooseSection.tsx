import React from "react";
import Link from "next/link";
import { Zap, TrendingUp, ThumbsUp } from "lucide-react";

interface WhyChooseProps {
  onOpenEnquire?: () => void;
}

export default function WhyChooseSection({ onOpenEnquire }: WhyChooseProps) {
  return (
    <section className="w-full bg-[#2E3880] text-white px-6 sm:px-12 md:px-16 lg:px-20 py-16 sm:py-24 md:py-28 flex flex-col items-center text-center">
      <div className="max-w-5xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00A82B] mb-2 block">
          The Green Books Advantage
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
          Why Choose Green Books?
        </h2>

        <p className="max-w-4xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-12">
          At Green Books, we provide premier business consultancy and accounting services tailored to the unique needs of the UAE market. Our commitment to excellence and deep local expertise empowers your business to navigate challenges and seize opportunities for growth and success. Trust Green Books for unparalleled professional support in your business journey.
        </p>

        {/* 3 Key Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 my-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 text-[#00A82B]">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Quick Response
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xs">
              Dedicated advisors ensuring rapid turnaround for your critical tax, VAT, and licensing requirements.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 text-[#00A82B]">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Value Addition
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xs">
              Strategic fiscal planning that streamlines operational costs and maximizes your business bottom line.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 text-[#00A82B]">
              <ThumbsUp className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              100% Client Satisfaction
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xs">
              Uncompromising professional ethics, transparency, and tailored client support from start to finish.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-5 justify-center items-center mt-10">
          <Link
            href="/contact"
            onClick={onOpenEnquire ? (e) => { e.preventDefault(); onOpenEnquire(); } : undefined}
            className="bg-[#00A82B] hover:bg-[#008A22] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Get a free quote
          </Link>
          <a
            href="#services"
            className="text-white hover:text-[#00A82B] underline text-sm sm:text-base font-medium transition-colors"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
