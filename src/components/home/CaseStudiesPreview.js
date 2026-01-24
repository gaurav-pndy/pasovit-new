import { caseStudies } from "@/data/mock";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CaseStudiesPreview = () => {
  return (
    <section className="py-16">
      <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-[#b80101] text-sm font-semibold tracking-wider uppercase mb-4">
              Case Studies
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight">
              Recent work
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[#00488b] font-medium hover:gap-4 transition-all duration-300"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.slice(0, 3).map((study) => (
            <Link
              key={study.id}
              href={`/case-studies/${study.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden aspect-4/3 mb-4 rounded-xl">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-[#b80101] text-white text-xs font-medium rounded-md">
                    {study.category}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#222222] mb-2 group-hover:text-[#00488b] transition-colors duration-300">
                {study.title}
              </h3>
              <p className="text-[#555555] text-sm line-clamp-2">
                {study.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
