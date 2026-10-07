"use client";

import React, { useState } from "react";
import { X, CheckCircle, Send } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function EnquiryModal({ isOpen, onClose, defaultService = "General Inquiry" }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: defaultService,
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 md:p-8 border-t-8 border-t-[#00A82B]">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <CheckCircle className="w-16 h-16 text-[#00A82B] mx-auto animate-bounce" />
            <h3 className="text-2xl font-bold text-[#2E3880]">Thank You!</h3>
            <p className="text-gray-600 text-sm">
              Your inquiry has been received. A Green Books certified financial consultant will contact you shortly.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest font-bold text-[#00A82B]">
                Green Books Advisory
              </span>
              <h3 className="text-2xl font-bold text-[#2E3880] mt-1">
                Book a Consultation
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Speak with our chartered accountants in Dubai for tailored financial and tax solutions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="First name"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A82B] focus:outline-none bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Last name"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A82B] focus:outline-none bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A82B] focus:outline-none bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Phone Number (with Country Code) *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+971 50 000 0000"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A82B] focus:outline-none bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Service Interested In
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A82B] focus:outline-none bg-gray-50"
                >
                  <option value="Corporate Tax">Corporate Tax &amp; VAT</option>
                  <option value="Accounting & Bookkeeping">Accounting &amp; Bookkeeping</option>
                  <option value="Audit & Assurance">Audit &amp; Assurance</option>
                  <option value="Business Setup in UAE">Business Setup in UAE (Freezone / Mainland)</option>
                  <option value="Golden Visa">Golden Visa &amp; PRO Services</option>
                  <option value="Compliance & AML">Compliance &amp; AML Diligence</option>
                  <option value="General Inquiry">General Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your company and requirements..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A82B] focus:outline-none bg-gray-50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00A82B] hover:bg-[#008A22] text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
