import React from "react";
import { Users, Briefcase, Award, Smile } from "lucide-react";

const STATS = [
  {
    icon: Users,
    value: "1000+",
    label: "Clients Served",
  },
  {
    icon: Briefcase,
    value: "1500+",
    label: "Projects Completed",
  },
  {
    icon: Award,
    value: "25+",
    label: "Certified Team",
  },
  {
    icon: Smile,
    value: "99%",
    label: "Satisfaction Rate",
  },
];

export default function StatsSection() {
  return (
    <section className="px-6 sm:px-12 md:px-16 lg:px-20 py-16 bg-[#F4F9F5] border-y border-green-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center md:items-start text-center md:text-left group"
              >
                <div className="p-3 bg-[#00A82B]/10 rounded-xl mb-3 text-[#00A82B] group-hover:bg-[#00A82B] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E3880] tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-sm sm:text-base font-light text-gray-600 mt-1">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
