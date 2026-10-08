"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { LinkedInIcon, InstagramIcon, WhatsAppIcon, GoogleIcon } from "@/components/SocialIcons";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<{
    fname: string;
    lname: string;
    email: string;
    phone: string;
    message: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const getWhatsAppUrl = (data = formData) => {
    const text =
      `*New Inquiry from Green Books Website*\n\n` +
      `👤 *Name:* ${data.fname} ${data.lname}\n` +
      `✉️ *Email:* ${data.email}\n` +
      `📞 *Phone:* ${data.phone}\n` +
      `💬 *Message:* ${data.message}`;

    return `https://wa.me/971565568571?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionCopy = { ...formData };
    const waUrl = getWhatsAppUrl(submissionCopy);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionCopy),
      });
    } catch (err) {
      console.error("Failed to send email to info@greenbooks.ae:", err);
    } finally {
      setIsSubmitting(false);
      setLastSubmittedData(submissionCopy);
      setSubmitted(true);
      setFormData({ fname: "", lname: "", email: "", phone: "", message: "" });

      // Automatically launch WhatsApp in a new tab
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank");
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-12 md:px-16 lg:px-20 bg-gray-50/70 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00A82B]">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-[#2E3880]">
            <span className="border-b-4 border-[#00A82B] pb-2">
              Do You Need Expert Business Support in the UAE?
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Our qualified team of chartered accountants, registered tax agents, and corporate advisors at Green Books Accounting And Tax Services are ready to assist.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 items-stretch">
          {/* Contact Information Card */}
          <div className="w-full md:w-[45%] p-8 border border-gray-200 rounded-2xl flex flex-col bg-white shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2E3880] mb-2">
              Contact Information
            </h3>
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-lg border border-green-200 text-xs font-semibold text-[#00A82B]">
              <span>Managing Director:</span>
              <span className="text-[#2E3880] font-bold">Ramiz Izrar</span>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed font-light">
              We&apos;re here to assist you. Connect directly with our chartered advisory team led by Managing Director <strong>Ramiz Izrar</strong>.
            </p>

            <div className="space-y-4 mb-8">
              {/* Phone */}
              <div className="flex items-center p-4 bg-[#F4F9F5] rounded-xl border border-gray-100 hover:border-[#00A82B] transition-colors">
                <div className="p-3 bg-[#00A82B]/10 text-[#00A82B] rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <p className="text-xs text-gray-500 font-medium">Direct Contact</p>
                  <a
                    href="tel:+971565568571"
                    className="text-sm font-semibold text-[#2E3880] hover:text-[#00A82B] transition-colors"
                  >
                    +971 56 556 8571
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center p-4 bg-[#F4F9F5] rounded-xl border border-gray-100 hover:border-[#00A82B] transition-colors">
                <div className="p-3 bg-[#00A82B]/10 text-[#00A82B] rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <p className="text-xs text-gray-500 font-medium">Official Email</p>
                  <a
                    href="mailto:info@greenbooks.ae"
                    className="text-sm font-semibold text-[#2E3880] hover:text-[#00A82B] transition-colors"
                  >
                    info@greenbooks.ae
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center p-4 bg-[#F4F9F5] rounded-xl border border-gray-100 hover:border-[#00A82B] transition-colors">
                <div className="p-3 bg-[#00A82B]/10 text-[#00A82B] rounded-lg shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <p className="text-xs text-gray-500 font-medium">Dubai Head Office</p>
                  <p className="text-sm font-medium text-gray-800 leading-snug">
                    Office no. 102-36, Acico Business Park, Port Saeed, Deira, Dubai, UAE.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-auto pt-6 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Follow Us
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/company/greenbooks-uae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#2E3880] hover:border-[#2E3880] transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/971565568571"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#00A82B] hover:border-[#00A82B] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/greenbooks_uae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#E4405F] hover:border-[#E4405F] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://maps.google.com/?q=Acico+Business+Park+Port+Saeed+Deira+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Business"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400 bg-white hover:shadow-sm transition-all"
                >
                  <GoogleIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-[55%] p-8 rounded-2xl border border-gray-200 border-t-8 border-t-[#00A82B] bg-white shadow-sm flex flex-col justify-between"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-5">
                <CheckCircle2 className="w-16 h-16 text-[#00A82B] mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-[#2E3880]">Thank You! Message Dispatched</h3>
                <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                  Your inquiry details have been forwarded to <strong className="text-gray-800">Info@greenbooks.ae</strong> and prepared for WhatsApp (<strong className="text-gray-800">+971 56 556 8571</strong>).
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a
                    href={getWhatsAppUrl(lastSubmittedData || { fname: "", lname: "", email: "", phone: "", message: "" })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00A82B] hover:bg-[#008A22] text-white font-bold rounded-xl shadow-md transition-all text-sm"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                    <span>Open WhatsApp Chat</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold rounded-xl transition-all text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your first name"
                      name="fname"
                      value={formData.fname}
                      onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                      className="w-full h-11 px-3.5 text-sm rounded-lg border border-gray-300 bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00A82B] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your last name"
                      name="lname"
                      value={formData.lname}
                      onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                      className="w-full h-11 px-3.5 text-sm rounded-lg border border-gray-300 bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00A82B] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-3.5 text-sm rounded-lg border border-gray-300 bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00A82B] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 px-3.5 text-sm rounded-lg border border-gray-300 bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00A82B] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 text-sm rounded-lg border border-gray-300 bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00A82B] transition-colors"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#00A82B] hover:bg-[#008A22] text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group text-sm disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-[#00A82B] bg-[#00A82B]/5 hover:bg-[#00A82B] text-[#00A82B] hover:text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Send via WhatsApp (+971 56 556 8571)</span>
                  </a>
                </div>

                <p className="text-[11px] text-gray-400 text-center font-normal">
                  Inquiries are directed to <strong>Info@greenbooks.ae</strong> & WhatsApp <strong>+971 56 556 8571</strong>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
