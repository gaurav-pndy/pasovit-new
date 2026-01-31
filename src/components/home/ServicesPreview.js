import { services } from "@/data/mock";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const ServicesPreview = () => {
  return (
    <section className="py-16">
      <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-red text-sm font-semibold tracking-wider uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight">
            Simple, transparent plans
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative p-7 transition-all duration-400 rounded-xl ${
                service.popular
                  ? "bg-white border-2 border-blue shadow-xl shadow-blue/10"
                  : "bg-white/70 backdrop-blur-sm border border-white/80 hover:bg-white hover:shadow-xl hover:shadow-black/5"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-7 px-3 py-1 bg-red text-white text-xs font-semibold rounded-md">
                  MOST POPULAR
                </div>
              )}

              <p className="text-[#888888] text-sm tracking-wider mb-2">
                {service.tier}
              </p>
              <h3 className="text-2xl font-bold text-[#222222] mb-3">
                {service.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-4xl font-bold text-blue">
                  {service.price}
                </span>
                <span className="text-[#888888]">{service.period}</span>
              </div>
              <p className="text-[#555555] text-sm mb-5">
                {service.description}
              </p>

              <ul className="space-y-2.5 mb-6">
                {service.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={16} className="text-blue mt-0.5 shrink-0" />
                    <span className="text-[#555555] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className={`w-full inline-flex items-center justify-center px-6 py-3.5 font-medium transition-all duration-400 rounded-md ${
                  service.popular
                    ? "bg-blue text-white hover:bg-[#003366]"
                    : "bg-[#f0f4f8] text-[#222222] hover:bg-blue hover:text-white"
                }`}
              >
                Learn More
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
