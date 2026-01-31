import { companyInfo, services } from "@/data/mock";
import { ArrowRight, Check, Code, Users, Zap } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative p-8 border transition-all duration-400 rounded-lg ${
                service.popular
                  ? "border-blue bg-white shadow-xl lg:scale-100 z-10"
                  : "border-black/10 bg-white lg:scale-95 hover:border-blue/30 hover:shadow-lg"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-8 px-4 py-1 bg-red text-white text-xs font-semibold rounded">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <p className="text-[#888888] text-sm tracking-wider mb-2">
                  {service.tier}
                </p>
                <h3 className="text-3xl font-bold text-[#222222] mb-4">
                  {service.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-bold text-blue">
                    {service.price}
                  </span>
                  <span className="text-[#888888] text-lg">
                    {service.period}
                  </span>
                </div>
                <p className="text-[#555555]">{service.description}</p>
              </div>

              {/* Key Metrics */}
              <div className="flex items-center gap-4 py-4 mb-6 border-y border-black/10">
                <div className="flex items-center gap-2">
                  <Code size={16} className="text-blue" />
                  <span className="text-[#222222] text-sm font-medium">
                    {service.buildSlots} Build Slot
                    {service.buildSlots > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="w-px h-4 bg-black/10" />
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-blue" />
                  <span className="text-[#222222] text-sm font-medium">
                    {service.strategyCalls}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <p className="text-[#888888] text-xs tracking-wider uppercase mb-4">
                  What's Included
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="text-blue mt-0.5 shrink-0"
                      />
                      <span className="text-[#555555] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bonuses */}
              <div className="mb-8">
                <p className="text-[#888888] text-xs tracking-wider uppercase mb-4">
                  Bonuses
                </p>
                <ul className="space-y-3">
                  {service.bonuses.map((bonus, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Zap
                        size={18}
                        className="text-red mt-0.5 shrink-0"
                      />
                      <span className="text-[#555555] text-sm">{bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`mailto:${companyInfo.email}?subject=Interested in ${service.name} Plan`}
                className={`w-full inline-flex items-center justify-center px-6 py-4 font-medium text-lg transition-all duration-400 rounded-md ${
                  service.popular
                    ? "bg-blue text-white hover:bg-[#003366]"
                    : "bg-[#f8f9fa] text-[#222222] border border-black/10 hover:bg-blue hover:text-white hover:border-blue"
                }`}
              >
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
