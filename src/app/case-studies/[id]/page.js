import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock, Users, Check } from "lucide-react";
import { caseStudies } from "@/data/mock";

export default async function CaseStudyDetailPage({ params }) {
  const { id } = await params;

  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    notFound();
  }

  // Get related case studies (same category, excluding current)
  const relatedStudies = caseStudies
    .filter((s) => s.category === study.category && s.id !== study.id)
    .slice(0, 2);

  // If no same-category studies, get random ones
  const displayRelated =
    relatedStudies.length > 0
      ? relatedStudies
      : caseStudies.filter((s) => s.id !== study.id).slice(0, 2);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative ">
        {/* Back Button */}
        <div className="absolute top-8 left-5 md:left-[7.6923%] z-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-black/10 text-[#222222] hover:bg-blue hover:text-white hover:border-blue transition-all duration-300 rounded-md"
          >
            <ArrowLeft size={16} />
            <span className="text-sm font-medium">Back to Case Studies</span>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#222222] via-[#222222]/50 to-transparent" />

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-350 mx-auto px-5 md:px-[7.6923%] pb-12 md:pb-16">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-red text-white text-sm font-medium rounded">
                  {study.category}
                </span>
                <span className="flex items-center gap-2 text-white/80 text-sm">
                  <Clock size={14} />
                  {study.duration}
                </span>
                <span className="flex items-center gap-2 text-white/80 text-sm">
                  <Users size={14} />
                  {study.client}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {study.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16  bg-white">
        <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Summary */}
              <div>
                <p className="text-xl md:text-2xl text-[#555555] leading-relaxed">
                  {study.summary}
                </p>
              </div>

              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-bold text-[#222222] mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue text-white text-sm font-medium rounded">
                    01
                  </span>
                  The Challenge
                </h2>
                <p className="text-[#555555] text-lg leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold text-[#222222] mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue text-white text-sm font-medium rounded">
                    02
                  </span>
                  Our Solution
                </h2>
                <p className="text-[#555555] text-lg leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-2xl font-bold text-[#222222] mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-red text-white text-sm font-medium rounded">
                    03
                  </span>
                  The Results
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.results.map((result, index) => (
                    <div
                      key={index}
                      className="p-6 border border-black/10 bg-[#f8f9fa] hover:border-blue/30 hover:shadow-md transition-all duration-300 rounded-lg"
                    >
                      <div className="flex items-start gap-3">
                        <Check
                          size={20}
                          className="text-blue mt-0.5 shrink-0"
                        />
                        <span className="text-[#222222] font-medium">
                          {result}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                {/* Tech Stack */}
                <div className="p-6 border border-black/10 bg-[#f8f9fa] rounded-lg">
                  <h3 className="text-lg font-semibold text-[#222222] mb-4">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white border border-black/10 text-[#555555] text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 border border-black/10 bg-[#f8f9fa] rounded-lg">
                  <h3 className="text-lg font-semibold text-[#222222] mb-4">
                    Project Details
                  </h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-[#888888] text-sm">Client</dt>
                      <dd className="text-[#222222] mt-1 font-medium">
                        {study.client}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#888888] text-sm">Duration</dt>
                      <dd className="text-[#222222] mt-1 font-medium">
                        {study.duration}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#888888] text-sm">Category</dt>
                      <dd className="text-[#222222] mt-1 font-medium">
                        {study.category}
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* CTA */}
                <div className="p-6 border-2 border-blue bg-white rounded-lg">
                  <h3 className="text-lg font-semibold text-[#222222] mb-3">
                    Want similar results?
                  </h3>
                  <p className="text-[#555555] text-sm mb-4">
                    Let's discuss how we can help you build something
                    incredible.
                  </p>
                  <Link
                    href="/services"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue text-white font-medium transition-all duration-400 hover:bg-[#003366] rounded-md"
                  >
                    Get Started
                    <ArrowUpRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {displayRelated.length > 0 && (
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-red text-sm font-semibold tracking-wider uppercase mb-2">
                  Continue Exploring
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#222222]">
                  Related Case Studies
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="hidden md:inline-flex items-center gap-2 text-blue hover:text-[#003366] font-medium transition-colors duration-300"
              >
                View All
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {displayRelated.map((relatedStudy) => (
                <Link
                  key={relatedStudy.id}
                  href={`/case-studies/${relatedStudy.id}`}
                  className="group block"
                >
                  <article className="border border-black/10 bg-white hover:border-blue/30 hover:shadow-xl transition-all duration-400 overflow-hidden rounded-lg">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={relatedStudy.image}
                        alt={relatedStudy.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-red text-white text-xs font-medium rounded">
                          {relatedStudy.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-[#888888] text-sm mb-2">
                        {relatedStudy.client}
                      </p>
                      <h3 className="text-xl font-semibold text-[#222222] mb-2 group-hover:text-blue transition-colors duration-300">
                        {relatedStudy.title}
                      </h3>
                      <p className="text-[#555555] text-sm line-clamp-2">
                        {relatedStudy.summary}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
