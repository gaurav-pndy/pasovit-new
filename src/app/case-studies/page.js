"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, Filter } from "lucide-react";
import { caseStudies } from "@/data/mock";

const CaseStudiesPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    ...new Set(caseStudies.map((study) => study.category)),
  ];

  const filteredStudies = caseStudies.filter((study) => {
    const matchesCategory =
      activeFilter === "All" || study.category === activeFilter;
    const matchesSearch =
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24  bg-white border-b border-black/10">
        <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
          <div className="max-w-4xl">
            <p className="text-red text-sm font-semibold tracking-wider uppercase mb-4">
              Our Work
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-[1.1] tracking-tight text-[#222222] mb-6">
              Case Studies
            </h1>
            <p className="text-lg md:text-xl text-[#555555] max-w-2xl leading-relaxed">
              Explore how we've helped companies ship faster, scale smarter, and
              build products their users love.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-6 border-b border-black/10 sticky top-20 bg-white/95 backdrop-blur-sm z-20">
        <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Category Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={16} className="text-[#888888] mr-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md ${
                    activeFilter === category
                      ? "bg-blue text-white"
                      : "bg-[#f8f9fa] text-[#555555] hover:bg-blue/10 hover:text-blue"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888888]"
              />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 pl-12 pr-4 py-3 bg-[#f8f9fa] border border-black/10 text-[#222222] placeholder-[#888888] focus:outline-none focus:border-blue transition-colors duration-300 rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16  bg-[#f8f9fa]">
        <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
          {filteredStudies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#888888] text-lg">
                No case studies found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study, index) => (
                <Link
                  key={study.id}
                  href={`/case-studies/${study.id}`}
                  className="group block"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <article className="h-full border border-black/10 bg-white hover:border-blue/30 hover:shadow-xl transition-all duration-400 overflow-hidden rounded-lg">
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-16/10">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-red text-white text-xs font-medium rounded">
                          {study.category}
                        </span>
                      </div>

                      {/* Duration Badge */}
                      {/* <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 text-[#222222] text-xs font-medium rounded">
                          {study.duration}
                        </span>
                      </div> */}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-[#888888] text-sm mb-2">
                        {study.client}
                      </p>
                      <h3 className="text-xl font-semibold text-[#222222] mb-3 group-hover:text-blue transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-[#555555] text-sm leading-relaxed line-clamp-3 mb-4">
                        {study.summary}
                      </p>

                      {/* Results Preview */}
                      {/* <div className="flex items-center gap-4 pt-4 border-t border-black/10">
                        <span className="text-red text-sm font-semibold">
                          {study.results[0]}
                        </span>
                      </div> */}

                      {/* View Link */}
                      <div className="flex items-center gap-2 mt-4 text-blue group-hover:text-[#003366] transition-colors duration-300">
                        <span className="text-sm font-medium">
                          View Case Study
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#222222]">
        <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "99.9%", label: "Client Satisfaction" },
              { value: "24h", label: "Avg Response Time" },
              { value: "30d", label: "Post-Launch Warranty" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-red mb-2">
                  {stat.value}
                </p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
          <div className="relative p-12 md:p-20 bg-[#f8f9fa] border border-black/10 text-center rounded-xl">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-6">
                Ready to be our next success story?
              </h2>
              <p className="text-[#555555] text-lg mb-8">
                Let's discuss how we can help you build something incredible.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue text-white font-medium text-lg transition-all duration-400 hover:bg-[#003366] rounded-md"
              >
                View Our Plans
                <ArrowUpRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
