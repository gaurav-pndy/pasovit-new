import { agencyPartner, companyInfo, projectBased } from "@/data/mock";
import { ArrowUpRight, Check, Code, Settings } from "lucide-react";
import React from "react";

const FlexibleOptions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#b80101] text-sm font-semibold tracking-wider uppercase mb-4">
            Flexible Options
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight">
            Alternative engagement models
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Based */}
          <div className="p-8 border border-black/10 bg-[#f8f9fa] rounded-lg hover:shadow-lg transition-all duration-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#00488b]/10 rounded-md">
                <Code className="w-6 h-6 text-[#00488b]" />
              </div>
              <h3 className="text-2xl font-bold text-[#222222]">
                {projectBased.name}
              </h3>
            </div>
            <p className="text-[#555555] mb-6">{projectBased.description}</p>
            <ul className="space-y-3 mb-6">
              {projectBased.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check size={18} className="text-[#00488b] mt-0.5 shrink-0" />
                  <span className="text-[#555555] text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${companyInfo.email}?subject=Project Based Inquiry`}
              className="inline-flex items-center justify-center px-6 py-3 bg-[#00488b] text-white font-medium transition-all duration-400 hover:bg-[#003366] rounded-md"
            >
              Discuss Your Project
              <ArrowUpRight size={16} className="ml-2" />
            </a>
          </div>

          {/* Agency Tech Partner */}
          <div className="p-8 border-2 border-[#00488b] bg-white rounded-lg hover:shadow-lg transition-all duration-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#b80101]/10 rounded-md">
                <Settings className="w-6 h-6 text-[#b80101]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#222222]">
                  {agencyPartner.name}
                </h3>
                <span className="text-xs font-semibold text-[#b80101]">
                  FOR AGENCIES
                </span>
              </div>
            </div>
            <p className="text-[#555555] mb-6">{agencyPartner.description}</p>
            <ul className="space-y-3 mb-6">
              {agencyPartner.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check size={18} className="text-[#b80101] mt-0.5 shrink-0" />
                  <span className="text-[#555555] text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${companyInfo.email}?subject=Agency Partnership Inquiry`}
              className="inline-flex items-center justify-center px-6 py-3 bg-[#222222] text-white font-medium transition-all duration-400 hover:bg-[#333333] rounded-md"
            >
              Partner With Us
              <ArrowUpRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexibleOptions;
