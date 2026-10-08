"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServiceItem } from "@/data/servicesData";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Send,
  FileCheck,
  MapPin,
} from "lucide-react";

interface ServiceDetailTemplateProps {
  service: ServiceItem;
}

export default function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: service.title,
      message: formData.message,
    };

    const waText =
      `*New Service Inquiry - Green Books*\n\n` +
      `📋 *Service:* ${service.title}\n` +
      `👤 *Name:* ${formData.name}\n` +
      `✉️ *Email:* ${formData.email}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `💬 *Requirements:* ${formData.message || "Consultation requested"}`;

    const waUrl = `https://wa.me/971565568571?text=${encodeURIComponent(waText)}`;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });
    } catch (err) {
      console.error("Failed to send inquiry email:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank");
      }
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 4000);
    }
  };

  return (
    <main className="min-h-screen pt-24 bg-white">
      {/* Hero Banner */}
      <section className="bg-[#2E3880] text-white py-16 md:py-24 px-6 sm:px-12 md:px-16 lg:px-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00A82B] mb-4">
            <Link href={service.categoryHref} className="hover:underline">
              {service.category}
            </Link>
            <span>/</span>
            <span>{service.title}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            {service.heroHeading}
          </h1>

          <p className="text-base sm:text-xl text-gray-200 font-light max-w-3xl leading-relaxed mb-8">
            {service.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#inquiry"
              className="bg-[#00A82B] hover:bg-[#008A22] text-white font-bold px-7 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#overview"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-medium transition-all text-sm"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Overview & Key Highlights */}
      <section id="overview" className="py-20 px-6 sm:px-12 md:px-16 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="border-l-4 border-[#00A82B] pl-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00A82B]">
                Green Books Services
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2E3880] mt-1">
                About {service.title}
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed font-light text-base sm:text-lg mb-8">
              {service.overview}
            </p>

            {/* Core Features Grid */}
            <div className="space-y-6 mt-10">
              <h3 className="text-xl font-bold text-[#2E3880] border-b pb-3">
                Key Deliverables &amp; Scope
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#F4F9F5] border border-green-100/70 hover:border-[#00A82B] transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#2E3880] text-white flex items-center justify-center mb-4 font-bold text-sm">
                        0{idx + 1}
                      </div>
                      <h4 className="text-base font-bold text-gray-900 mb-2">
                        {feat.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions List */}
            {service.solutions && service.solutions.length > 0 && (
              <div className="mt-12 p-8 bg-green-50/50 rounded-2xl border border-green-100">
                <h3 className="text-lg font-bold text-[#2E3880] mb-4 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[#00A82B]" />
                  <span>Key Solutions Provided by Green Books</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.solutions.map((sol, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#00A82B] shrink-0" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar / Quick Inquiry Form */}
          <div id="inquiry" className="lg:col-span-1 bg-[#F4F9F5] p-8 rounded-2xl border border-green-100 sticky top-28 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00A82B]">
              Fast Response
            </span>
            <h3 className="text-xl font-bold text-[#2E3880] mt-1 mb-2">
              Book Expert Guidance
            </h3>
            <p className="text-xs text-gray-500 mb-6 font-light">
              Submit your inquiry for {service.title} and receive tailored advice from Green Books advisors.
            </p>

            {submitted ? (
              <div className="p-6 bg-white rounded-xl text-center space-y-3 border border-green-200">
                <CheckCircle2 className="w-12 h-12 text-[#00A82B] mx-auto" />
                <h4 className="font-bold text-[#2E3880]">Inquiry Submitted!</h4>
                <p className="text-xs text-gray-600">
                  Our specialist will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#00A82B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#00A82B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone (with Country Code) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#00A82B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Requirements / Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your situation..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 text-xs rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#00A82B]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00A82B] hover:bg-[#008A22] text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "Submitting Inquiry..." : "Submit & Chat on WhatsApp"}</span>
                </button>
                <p className="text-[10px] text-gray-400 text-center">
                  Sent to <strong>Info@greenbooks.ae</strong> & WhatsApp <strong>+971 56 556 8571</strong>
                </p>
              </form>
            )}

            <div className="mt-6 pt-6 border-t border-gray-200 text-xs text-gray-500 space-y-2.5">
              <a href="tel:+971565568571" className="flex items-center gap-2 hover:text-[#00A82B]">
                <Phone className="w-3.5 h-3.5 text-[#00A82B] shrink-0" /> +971 56 556 8571
              </a>
              <a href="mailto:info@greenbooks.ae" className="flex items-center gap-2 hover:text-[#00A82B]">
                <Mail className="w-3.5 h-3.5 text-[#00A82B] shrink-0" /> info@greenbooks.ae
              </a>
              <div className="flex items-start gap-2 pt-1 text-gray-500">
                <MapPin className="w-3.5 h-3.5 text-[#00A82B] shrink-0 mt-0.5" />
                <span className="leading-snug">Office no. 102-36, Acico Business Park, Port Saeed, Deira, Dubai, UAE.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[#2E3880] text-white py-14 px-6 sm:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="italic text-[#00A82B] text-lg font-light">#BeYourOwnBoss</p>
          <h3 className="text-2xl sm:text-3xl font-bold">
            UAE&apos;s Premier Accounting &amp; Tax Partner — Green Books Accounting And Tax Services
          </h3>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#00A82B] hover:bg-[#008A22] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all text-sm"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
