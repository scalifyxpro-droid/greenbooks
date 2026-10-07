import React from "react";
import { notFound } from "next/navigation";
import { SERVICES_DATABASE } from "@/data/servicesData";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATABASE)
    .filter((k) => ["Services", "Advisory", "Certification", "Software"].includes(SERVICES_DATABASE[k].category))
    .map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATABASE[slug];
  if (!service) return { title: "Advisory Services | Green Books" };
  return {
    title: `${service.title} | Green Books Chartered Accountants UAE`,
    description: service.subtitle,
  };
}

export default async function GeneralServicesPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATABASE[slug] || SERVICES_DATABASE["compliance-services"];

  if (!service) {
    notFound();
  }

  return <ServiceDetailTemplate service={service} />;
}
