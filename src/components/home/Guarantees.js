import { guarantees } from "@/data/mock";
import { Clock, Layers, Shield } from "lucide-react";
import React from "react";

const Guarantees = () => {
  return (
    <section className="py-16">
      <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#b80101] text-sm font-semibold tracking-wider uppercase mb-4">
            Our Promise
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight">
            Risk-free guarantees
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guarantees.map((guarantee, index) => {
            const icons = [Shield, Clock, Layers];
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="p-7 bg-white/70 backdrop-blur-sm border border-white/80 hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-400 group rounded-xl text-center"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-[#00488b]/10 mx-auto mb-5 group-hover:bg-[#00488b] transition-all duration-300 rounded-xl">
                  <Icon
                    size={24}
                    className="text-[#00488b] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#222222] mb-2">
                  {guarantee.name}
                </h3>
                <p className="text-[#555555] text-sm leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
