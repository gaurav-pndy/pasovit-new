import { whatWeBuild } from "@/data/mock";
import React from "react";

const WhatWeBuild = () => {
  return (
    <section className="py-16 bg-[#222222]">
      <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-red text-sm font-semibold tracking-wider uppercase mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            What we can build for you
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {whatWeBuild.map((item, index) => (
            <div
              key={index}
              className="px-4 py-3 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-md"
            >
              <span className="text-white text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
