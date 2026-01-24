import { whatWeBuild } from "@/data/mock";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const WhatWeBuild = () => {
  return (
    <section className="py-16 my-16 relative">
      <div className="absolute inset-0 bg-[#222222]" />
      <div className="relative max-w-350 mx-auto px-5 md:px-[7.6923%]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#b80101] text-sm font-semibold tracking-wider uppercase mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            What we can build for you
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            From customer-facing web apps to internal tools that power your
            operations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {whatWeBuild.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex items-center gap-3 group rounded-lg"
            >
              <div className="w-2 h-2 bg-[#00488b] group-hover:scale-150 transition-transform duration-300 rounded-sm" />
              <span className="text-white/80 text-sm">{item}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-white font-medium hover:gap-4 transition-all duration-300"
          >
            <span className="border-b border-[#00488b] pb-1">
              View Our Case Studies
            </span>
            <ArrowRight size={18} className="text-[#00488b]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
