import React from "react";
import { ShieldCheck, Award, Building2, Landmark, CheckCircle, Globe } from "lucide-react";

const PARTNERS = [
  { name: "FTA Authorized Tax Agent Support", icon: ShieldCheck },
  { name: "Dubai Economy & Tourism (DET)", icon: Landmark },
  { name: "DMCC Free Zone Registered", icon: Building2 },
  { name: "DIFC & ADGM Advisory", icon: Globe },
  { name: "JAFZA & RAKEZ Associated", icon: Award },
  { name: "Zoho Books Platinum Partner", icon: CheckCircle },
];

export default function PartnersSection() {
  return (
    <section className="w-full py-16 bg-[#F4F9F5] px-6 sm:px-12 md:px-16 border-t border-green-100">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E3880] mb-12">
          <span className="border-b-4 border-[#00A82B] pb-2">
            Trusted by partners worldwide
          </span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {PARTNERS.map((partner) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.name}
                className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md flex flex-col items-center justify-center text-center group hover:border-[#00A82B] transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00A82B]/10 group-hover:bg-[#00A82B] text-[#00A82B] group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-gray-700 leading-tight">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
