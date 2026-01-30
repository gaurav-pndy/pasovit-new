import { painPoints } from "@/data/mock";
import React from "react";

const PainPoints = () => {
  return (
    <section className="py-16">
      <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
        <div className="max-w-3xl mb-16">
          <p className="text-[#b80101] text-sm font-semibold tracking-wider uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight">
            Sound familiar?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 bg-white/70 backdrop-blur-sm border border-white/80 hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-400 group rounded-xl"
            >
              {/* Number */}
              <div className="flex gap-4  mb-4 min-h-13">
                <div className="w-8 h-8 flex items-center justify-center bg-[#b80101] text-white text-sm font-medium  group-hover:bg-[#00488b] transition-all duration-300 rounded-md shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Heading */}
                <h3 className="text-lg font-semibold text-[#222222]  leading-snug  flex items-start">
                  {point.title}
                </h3>
              </div>
              {/* Description */}
              <p className="text-[#555555] text-base leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
