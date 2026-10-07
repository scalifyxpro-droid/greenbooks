"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import StatsSection from "@/components/StatsSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import PartnersSection from "@/components/PartnersSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import EnquiryModal from "@/components/EnquiryModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col">
      <Hero onOpenEnquire={() => setModalOpen(true)} />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection onOpenEnquire={() => setModalOpen(true)} />
      <StatsSection />
      <FeatureShowcase onOpenEnquire={() => setModalOpen(true)} />
      <PartnersSection />
      <FaqSection />
      <ContactSection />
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
