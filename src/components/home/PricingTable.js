import React from "react";
import {
  Zap,
  Calendar,
  MessageCircle,
  Wrench,
  Package,
  Link2,
  BookOpen,
  Palette,
  BarChart3,
  Flame,
  Clock,
  CheckCircle,
} from "lucide-react";
import {
  ComparisonRow,
  MobilePricingCard,
  SLAComparisonRow,
} from "./PricingComponents";

const PricingTable = () => {
  return (
    <section id="pricing" className="relative py-12 overflow-hidden ">
      <div className="max-w-350 mx-auto px-5 md:px-[7.6923%] relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-red text-sm font-semibold tracking-wider uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight">
            Simple, transparent plans
          </h2>
        </div>
        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          <MobilePricingCard
            name="Launch"
            price="3,000"
            bestFor="Lean teams that need consistent delivery without overhead"
            popular={false}
            features={[
              { label: "Active Build Slots", value: "1 (sequential)" },
              { label: "Delivery Cadence*", value: "Fortnightly" },
              {
                label: "Check-in Calls",
                value: "Monthly (With Project Manager)",
              },
              { label: "Bug Fixes & Enhancements", value: "✓", icon: true },
              { label: "Component & Module Library", value: "✓", icon: true },
              { label: "Staging/Preview Link", value: "✓", icon: true },
              { label: "Documentation & Training", value: "Documentation" },
              { label: "SLA (Response & Fix Times)*", value: "Standard SLA" },
              {
                label: "UI Design Files",
                value: "Add-on ($1,000)",
                highlight: "yellow",
              },
              { label: "Systems & Opportunity Audit", value: "—" },
            ]}
            sla={[
              { level: "S1 - Critical", response: "4 hrs", fix: "1 day" },
              { level: "S2 - High", response: "1 day", fix: "2 days" },
              { level: "S3 - Medium", fix: "2 days" },
              { level: "S4 - Low", fix: "5 days" },
            ]}
          />

          <MobilePricingCard
            name="Scale"
            price="6,000"
            bestFor="Growing teams that need faster throughput and tighter iteration"
            popular={true}
            features={[
              { label: "Active Build Slots", value: "2 (parallel)" },
              { label: "Delivery Cadence*", value: "Weekly" },
              {
                label: "Check-in Calls",
                value: "Fortnightly (With Project Manager)",
              },
              { label: "Bug Fixes & Enhancements", value: "✓", icon: true },
              { label: "Component & Module Library", value: "✓", icon: true },
              { label: "Staging/Preview Link", value: "✓", icon: true },
              {
                label: "Documentation & Training",
                value: "Documentation + Loom Videos",
              },
              { label: "SLA (Response & Fix Times)*", value: "Enhanced SLA" },
              {
                label: "UI Design Files",
                value: "Add-on ($1,000)",
                highlight: "yellow",
              },
              {
                label: "Systems & Opportunity Audit",
                value: "Bonus (Half-Yearly, worth $4,000)",
                highlight: "green",
              },
            ]}
            sla={[
              { level: "S1 - Critical", response: "2 hrs", fix: "12 hrs" },
              { level: "S2 - High", response: "12 hrs", fix: "1 day" },
              { level: "S3 - Medium", fix: "2 days" },
              { level: "S4 - Low", fix: "5 days" },
            ]}
          />

          <MobilePricingCard
            name="Enterprise"
            price="9,000"
            bestFor="Teams with complex backlogs where delays are expensive & SLA matters"
            popular={false}
            features={[
              { label: "Active Build Slots", value: "5 (Highest Throughput)" },
              { label: "Delivery Cadence*", value: "Weekly" },
              {
                label: "Check-in Calls",
                value: "Weekly (With Project Manager + CTO)",
              },
              { label: "Bug Fixes & Enhancements", value: "✓", icon: true },
              { label: "Component & Module Library", value: "✓", icon: true },
              { label: "Staging/Preview Link", value: "✓", icon: true },
              {
                label: "Documentation & Training",
                value:
                  "Documentation + Loom Videos + Live Team Training + Q&A Sessions",
              },
              { label: "SLA (Response & Fix Times)", value: "Priority SLA" },
              {
                label: "UI Design Files",
                value: "Complimentary",
                highlight: "green",
              },
              {
                label: "Systems & Opportunity Audit",
                value: "Bonus (Quarterly, worth $4,000)",
                highlight: "green",
              },
            ]}
            sla={[
              { level: "S1 - Critical", response: "1 hr", fix: "4 hrs" },
              { level: "S2 - High", response: "6 hrs", fix: "8 hrs" },
              { level: "S3 - Medium", fix: "12 hrs" },
              { level: "S4 - Low", fix: "2 days" },
            ]}
          />
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Main comparison container */}
            <div className="relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl shadow-xl shadow-black/5 ">
              {/* Scale column border overlay */}
              <div
                className="pointer-events-none absolute top-0 bottom-0 left-1/2 w-1/4
             border-3 border-blue
shadow-[2px_2px_10px_10px_rgba(0,72,139,0.25)]
 rounded-xl z-20"
                style={{ transform: "translateX(0%)" }}
              />

              {/* Subtle inner glow */}
              <div className="absolute inset-0 shadow-inner"></div>

              <table className="w-full rounded-2xl overflow-hidden relative">
                <thead>
                  <tr className="border-b border-gray-200 bg-dark-gray text-white">
                    <th className="w-1/4 px-6 xl:px-8 py-4 text-left">
                      <span className="text-gray-300 text-sm uppercase tracking-widest font-semibold">
                        Compare Plans
                      </span>
                    </th>

                    <th className="w-1/4 px-6 xl:px-8 py-4 text-center">
                      <div className="text-gray-200 font-bold text-lg">
                        Launch
                      </div>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-gray-400 text-sm">$</span>
                        <span className="text-4xl font-bold text-white tracking-tight">
                          3,000
                        </span>
                        <span className="text-gray-400 text-sm">/ month</span>
                      </div>
                    </th>

                    {/* SCALE – Border Highlight Only */}
                    <th className="w-1/4 px-6 xl:px-8 py-4 text-center relative">
                      <div className="absolute inset-0  pointer-events-none" />
                      <div className="text-white font-bold text-lg">Scale</div>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-gray-300 text-sm">$</span>
                        <span className="text-4xl xl:text-5xl font-bold text-white tracking-tight">
                          6,000
                        </span>
                        <span className="text-gray-300 text-sm">/ month</span>
                      </div>
                    </th>

                    <th className="w-1/4 px-6 xl:px-8 py-4 text-center">
                      <div className="text-gray-200 font-bold text-lg">
                        Enterprise
                      </div>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-gray-400 text-sm">$</span>
                        <span className="text-4xl font-bold text-white tracking-tight">
                          9,000
                        </span>
                        <span className="text-gray-400 text-sm">/ month</span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* Best For */}
                  <ComparisonRow
                    label="Best For"
                    values={[
                      "Lean teams that need consistent delivery without overhead",
                      "Growing teams that need faster throughput and tighter iteration",
                      "Teams with complex backlogs where delays are expensive & SLA matters",
                    ]}
                    IconComponent={Flame}
                    firstRow
                  />

                  <ComparisonRow
                    label="Active Build Slots"
                    values={[
                      "1 (Sequential)",
                      "2 (Parallel)",
                      "5 (Highest throughput)",
                    ]}
                    IconComponent={Zap}
                  />
                  <ComparisonRow
                    label="Delivery Cadence*"
                    values={["Fortnightly", "Weekly", "Weekly"]}
                    IconComponent={Calendar}
                    alternate
                  />
                  <ComparisonRow
                    label="Check-in Calls"
                    values={[
                      "Monthly (With Project Manager)",
                      "Fortnightly (With Project Manager)",
                      "Weekly (With Project Manager + CTO)",
                    ]}
                    IconComponent={MessageCircle}
                  />
                  <ComparisonRow
                    label="Bug Fixes & Enhancements"
                    values={["✓", "✓", "✓"]}
                    IconComponent={Wrench}
                    checkmarks
                    alternate
                  />
                  <ComparisonRow
                    label="Component & Module Library"
                    values={["✓", "✓", "✓"]}
                    IconComponent={Package}
                    checkmarks
                  />
                  <ComparisonRow
                    label="Staging / Preview Link"
                    values={["✓", "✓", "✓"]}
                    IconComponent={Link2}
                    checkmarks
                    alternate
                  />
                  <ComparisonRow
                    label="Documentation & Training"
                    values={[
                      "Documentation",
                      "Documentation + Loom Videos",
                      "Documentation + Loom Videos + Live Team Training + Q&A Sessions",
                    ]}
                    IconComponent={BookOpen}
                  />
                  <ComparisonRow
                    label="SLA (Response & Fix Times)*"
                    values={["Standard SLA", "Enhanced SLA", "Priority SLA"]}
                    IconComponent={Zap}
                    italic
                    alternate
                  />
                  <ComparisonRow
                    label="UI Design Files"
                    values={[
                      "Add-on ($1,000)",
                      "Add-on ($1,000)",
                      "Complimentary",
                    ]}
                    IconComponent={Palette}
                    highlight="yellow"
                  />
                  <ComparisonRow
                    label="Systems & Opportunity Audit"
                    values={[
                      "—",
                      "Bonus (Half-Yearly, worth $4,000)",
                      "Bonus (Quarterly, worth $4,000)",
                    ]}
                    IconComponent={BarChart3}
                    highlight="green"
                    alternate
                  />
                </tbody>
              </table>
            </div>
            {/* SLA TABLE */}
            <div className="mt-10">
              <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl shadow-xl shadow-black/5 relative">
               

                <table className="w-full rounded-2xl overflow-hidden">
                  <thead className="bg-dark-gray">
                    {/* Section Title */}
                    <tr>
                      <td colSpan={5} className="px-6 xl:px-8 py-4">
                        <div className="flex items-center gap-4">
                          <div className="h-0.5 flex-1 bg-linear-to-r from-transparent via-white to-white/50"></div>
                          <span className="text-white font-bold text-sm uppercase tracking-[0.2em] px-4">
                            SLA Breakdown
                          </span>
                          <div className="h-0.5 flex-1 bg-linear-to-r from-white/50 via-white to-transparent"></div>
                        </div>
                      </td>
                    </tr>

                    {/* Main Headers */}
                    <tr className="bg-dark-gray border-b border-white/10">
                      <th className="px-6 py-3 text-center text-xs uppercase tracking-widest text-gray-300">
                        Severity
                      </th>
                      <th className="px-6 py-3 text-center text-xs uppercase tracking-widest text-gray-300">
                        What it Includes
                      </th>
                      <th
                        colSpan={3}
                        className="px-6 py-3 text-center text-xs uppercase tracking-widest text-gray-300"
                      >
                        Time
                      </th>
                    </tr>

                    {/* Sub Headers */}
                    <tr className="relative bg-dark-gray border-b border-white/10">
                      <th></th>
                      <th></th>

                      <th className="px-6 py-2 text-center text-[11px] uppercase tracking-widest text-gray-400">
                        Launch
                      </th>

                      {/* Scale Highlight */}
                      <th className="px-6 py-2 text-center text-[11px] uppercase tracking-widest text-gray-400">
                        Scale
                      </th>

                      <th className="px-6 py-2 text-center text-[11px] uppercase tracking-widest text-gray-400">
                        Enterprise
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <SLAComparisonRow
                      label="S1 - Critical"
                      severity="critical"
                      includes="Production outage or critical workflow blocked; security/data loss risk; no workaround."
                      values={[
                        { response: "4 business hrs", fix: "1 business day" },
                        { response: "2 business hrs", fix: "12 business hrs" },
                        { response: "1 business hr", fix: "4 business hrs" },
                      ]}
                    />

                    <SLAComparisonRow
                      label="S2 - High"
                      severity="high"
                      alternate
                      includes="Core feature broken or severely degraded; many users or key customers affected; workaround limited."
                      values={[
                        { response: "4 business hrs", fix: "1 business day" },
                        { response: "2 business hrs", fix: "12 business hrs" },
                        { response: "1 business hr", fix: "4 business hrs" },
                      ]}
                    />

                    <SLAComparisonRow
                      label="S3 - Medium"
                      severity="medium"
                      includes="Non-core issue or limited subset impacted; workaround available; business can continue."
                      values={[
                        { response: "4 business hrs", fix: "1 business day" },
                        { response: "2 business hrs", fix: "12 business hrs" },
                        { response: "1 business hr", fix: "4 business hrs" },
                      ]}
                    />

                    <SLAComparisonRow
                      label="S4 - Low"
                      severity="low"
                      alternate
                      includes="Cosmetic or minor bug/request; negligible impact; scheduled in backlog."
                      values={[
                        { response: "4 business hrs", fix: "1 business day" },
                        { response: "2 business hrs", fix: "12 business hrs" },
                        { response: "1 business hr", fix: "4 business hrs" },
                      ]}
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="mt-10 ">
          <div className="p-4 md:p-7 bg-white/70 backdrop-blur-sm border border-white/80 rounded-xl shadow-xl shadow-black/5">
            <div className="relative">
              {/* Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center bg-blue/10 rounded-lg">
                  <Clock className="w-4 md:w-5 h-4 md:h-5 text-blue" />
                </div>
                <h4 className="text-gray-900 font-semibold text-xl md:text-2xl tracking-tight">
                  Delivery Cadence*
                </h4>
              </div>

              {/* List */}
              <ul className="space-y-2">
                {[
                  "Work starts immediately and is delivered as soon as it’s completed.",
                  "Some tasks take few hours. Others take longer. Delivery time depends on complexity, not a schedule.",
                  "Delivery cadence defines how often we review progress and adjust priorities.",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 items-start group hover:translate-x-0.5 transition-transform duration-300 text-sm md:text-base"
                  >
                    <CheckCircle className="w-3 md:w-4 h-3 md:h-4 text-red mt-1.5 shrink-0 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200" />
                    <span className="text-gray-600 md:leading-relaxed group-hover:text-gray-900 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
