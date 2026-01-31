import { guarantees } from "@/data/mock";
import { Shield } from "lucide-react";
import React from "react";

const Guarantees = () => {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-red text-sm font-semibold tracking-wider uppercase mb-4">
            Every Plan Includes
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight">
            Our guarantees
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="p-8 border border-black/10 bg-white hover:border-blue/30 hover:shadow-lg transition-all duration-400 text-center group rounded-lg"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue/10 mx-auto mb-6 group-hover:bg-blue transition-all duration-300 rounded-md">
                <Shield
                  size={28}
                  className="text-blue group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#222222] mb-3">
                {guarantee.name}
              </h3>
              <p className="text-[#555555] leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
