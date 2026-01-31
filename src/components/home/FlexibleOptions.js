import { agencyPartner, companyInfo, projectBased } from "@/data/mock";
import { ArrowUpRight, Check, Code, Settings } from "lucide-react";
import React from "react";

const FlexibleOptions = () => {
  return (
    <section className="py-16">
      <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-red text-sm font-semibold tracking-wider uppercase mb-4">
            Flexible Options
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight">
            Not ready for a subscription?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Project Based */}
          <div className="p-7 bg-white/70 backdrop-blur-sm border border-white/80 rounded-xl hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 flex items-center justify-center bg-blue/10 rounded-lg">
                <Code className="w-5 h-5 text-blue" />
              </div>
              <h3 className="text-xl font-bold text-[#222222]">
                {projectBased.name}
              </h3>
            </div>
            <p className="text-[#555555] text-sm mb-5">
              {projectBased.description}
            </p>
            <ul className="space-y-2.5 mb-5">
              {projectBased.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check size={16} className="text-blue mt-0.5 shrink-0" />
                  <span className="text-[#555555] text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${companyInfo.email}?subject=Project Based Inquiry`}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-blue text-white font-medium text-sm transition-all duration-400 hover:bg-[#003366] rounded-md"
            >
              Discuss Your Project
              <ArrowUpRight size={14} className="ml-2" />
            </a>
          </div>

          {/* Agency Partner */}
          <div className="p-7 bg-white border-2 border-blue rounded-xl hover:shadow-xl hover:shadow-blue/10 transition-all duration-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 flex items-center justify-center bg-red/10 rounded-lg">
                <Settings className="w-5 h-5 text-red" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#222222]">
                  {agencyPartner.name}
                </h3>
                <span className="text-xs font-semibold text-red">
                  FOR AGENCIES
                </span>
              </div>
            </div>
            <p className="text-[#555555] text-sm mb-5">
              {agencyPartner.description}
            </p>
            <ul className="space-y-2.5 mb-5">
              {agencyPartner.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check size={16} className="text-red mt-0.5 shrink-0" />
                  <span className="text-[#555555] text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${companyInfo.email}?subject=Agency Partnership Inquiry`}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#222222] text-white font-medium text-sm transition-all duration-400 hover:bg-[#333333] rounded-md"
            >
              Partner With Us
              <ArrowUpRight size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexibleOptions;
