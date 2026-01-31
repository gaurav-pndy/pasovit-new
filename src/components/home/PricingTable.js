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

const PricingTable = () => {
  return (
    <section className="relative py-12 overflow-hidden ">
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
            <div className="relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl shadow-xl shadow-black/5 overflow-hidden">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 shadow-inner"></div>

              <table className="w-full relative">
                <thead>
                  <tr className="border-b-2 border-gray-100">
                    <th className="w-1/4 px-6 xl:px-8 py-4 text-left bg-linear-to-br from-gray-50 to-white">
                      <span className="text-gray-500 text-sm uppercase tracking-widest font-semibold">
                        Compare Plans
                      </span>
                    </th>

                    {/* Launch Column */}
                    <th className="w-1/4 px-6 xl:px-8 py-4 text-center relative bg-linear-to-br from-white to-gray-50/30">
                      <div className="relative z-10">
                        <div className="text-gray-700 font-bold text-lg ">
                          Launch
                        </div>
                        <div className="flex items-baseline justify-center gap-1 mb-1">
                          <span className="text-gray-500 text-sm">$</span>
                          <span className="text-4xl font-bold text-gray-900 tracking-tight">
                            3,000
                          </span>{" "}
                          <span className="text-gray-400 text-sm">/ month</span>
                        </div>
                      </div>
                    </th>

                    {/* Scale Column - HIGHLIGHTED */}
                    <th className="w-1/4 px-6 xl:px-8 py-4 text-center relative">
                      {/* Column background with gradient and border */}
                      <div className="absolute inset-0 bg-linear-to-br from-[#003366] via-blue to-[#005fa3] shadow-xl"></div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent opacity-50"></div>

                      {/* Top border highlight */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-white/40 to-transparent"></div>

                      <div className="relative z-10">
                        <div className="text-white font-bold text-lg  drop-shadow-sm">
                          Scale
                        </div>
                        <div className="flex items-baseline justify-center gap-1 mb-1">
                          <span className="text-white/80 text-sm">$</span>
                          <span className="text-4xl font-bold text-white tracking-tight drop-shadow-md">
                            6,000
                          </span>{" "}
                          <span className="text-white/70 text-sm">/ month</span>
                        </div>
                      </div>
                    </th>

                    {/* Enterprise Column */}
                    <th className="w-1/4 px-6 xl:px-8 py-4 text-center relative bg-linear-to-br from-white to-gray-50/30">
                      <div className="relative z-10">
                        <div className="text-gray-700 font-bold text-lg mb-2">
                          Enterprise
                        </div>
                        <div className="flex items-baseline justify-center gap-1 mb-1">
                          <span className="text-gray-500 text-sm">$</span>
                          <span className="text-4xl font-bold text-gray-900 tracking-tight">
                            9,000
                          </span>{" "}
                          <span className="text-gray-400 text-sm">/ month</span>
                        </div>
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

                  {/* Deliverables Section Header */}
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 xl:px-8 py-4 bg-linear-to-r from-gray-50 via-white to-gray-50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-0.5 flex-1 bg-linear-to-r from-transparent via-red to-red/50"></div>
                        <div className="relative">
                          <div className="absolute inset-0 bg-red blur-lg opacity-20"></div>
                          <span className="relative text-red font-bold text-sm uppercase tracking-[0.2em] px-4">
                            Deliverables
                          </span>
                        </div>
                        <div className="h-0.5 flex-1 bg-linear-to-r from-red/50 to-transparent"></div>
                      </div>
                    </td>
                  </tr>

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

                  {/* SLA Section Header */}
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 xl:px-8 py-6 bg-linear-to-r from-gray-50 via-white to-gray-50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-0.5 flex-1 bg-linear-to-r from-transparent via-blue to-blue/50"></div>
                        <div className="relative">
                          <div className="absolute inset-0 bg-blue blur-lg opacity-20"></div>
                          <span className="relative text-blue font-bold text-sm uppercase tracking-[0.2em] px-4">
                            SLA Breakdown
                          </span>
                        </div>
                        <div className="h-0.5 flex-1 bg-linear-to-r from-blue/50 to-transparent"></div>
                      </div>
                    </td>
                  </tr>

                  <SLAComparisonRow
                    label="S1 — Critical"
                    values={[
                      { response: "4 business hrs", fix: "1 business day" },
                      { response: "2 business hrs", fix: "12 business hrs" },
                      { response: "1 business hr", fix: "4 business hrs" },
                    ]}
                    severity="critical"
                  />
                  <SLAComparisonRow
                    label="S2 — High"
                    values={[
                      { response: "1 business day", fix: "2 business days" },
                      { response: "12 business hrs", fix: "1 business day" },
                      { response: "6 business hrs", fix: "8 business hrs" },
                    ]}
                    severity="high"
                    alternate
                  />
                  <SLAComparisonRow
                    label="S3 — Medium"
                    values={[
                      { fix: "2 business days" },
                      { fix: "2 business days" },
                      { fix: "12 business hrs" },
                    ]}
                    severity="medium"
                  />
                  <SLAComparisonRow
                    label="S4 — Low"
                    values={[
                      { fix: "5 business days" },
                      { fix: "5 business days" },
                      { fix: "2 business days" },
                    ]}
                    severity="low"
                    alternate
                  />
                </tbody>
              </table>
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

// Mobile Card Component
const MobilePricingCard = ({
  name,
  price,
  bestFor,
  popular,
  features,
  sla,
}) => {
  return (
    <div className="relative group">
      {/* Glow effect for popular card */}
      {popular && (
        <div className="absolute -inset-1 bg-linear-to-r from-red via-blue to-emerald-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
      )}

      <div
        className={`relative rounded-2xl shadow-xl shadow-black/5 overflow-hidden  border-2 transition-all duration-300 ${
          popular
            ? "border-blue bg-linear-to-br from-white via-blue-50/30 to-white"
            : "border-gray-200 bg-white"
        }`}
      >
        {/* Header */}
        <div
          className={`relative p-4 overflow-hidden ${
            popular
              ? "bg-linear-to-br from-[#003366] via-blue to-[#005fa3]"
              : "bg-linear-to-br from-gray-50 to-white"
          }`}
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, ${popular ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.1)"} 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          ></div>

          <div className="relative">
            <div className="flex items-start justify-between mb-2">
              <h3
                className={`text-2xl font-bold tracking-tight ${popular ? "text-white" : "text-gray-900"}`}
              >
                {name}
              </h3>
              {popular && (
                <div className="relative">
                  <div className="absolute inset-0 bg-red blur-lg opacity-40"></div>
                  <div className="relative px-3 py-1 bg-linear-to-r from-red to-[#d90101] rounded-full shadow-lg">
                    <span className="text-white text-sm font-semibold uppercase tracking-widest">
                      Popular
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-baseline gap-1 mb-2">
              <span
                className={`text-lg ${popular ? "text-white/80" : "text-gray-500"}`}
              >
                $
              </span>
              <span
                className={`text-5xl font-bold tracking-tighter ${popular ? "text-white" : "text-gray-900"}`}
              >
                {price}
              </span>
              <span
                className={`text-sm ml-1 ${popular ? "text-white/80" : "text-gray-500"}`}
              >
                /month
              </span>
            </div>

            <p className={` ${popular ? "text-white/90" : "text-gray-600"}`}>
              {bestFor}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="px-2 md:px-4 space-y-2 mt-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px flex-1 bg-linear-to-r from-red/30 to-transparent"></div>
            <span className="text-red  font-bold uppercase tracking-widest">
              Deliverables
            </span>
            <div className="h-px flex-1 bg-linear-to-l from-red/30 to-transparent"></div>
          </div>

          <div className="space-y-1.5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex justify-between items-center p-2 md:px-3 gap-2  rounded-lg transition-all ${
                  feature.highlight === "yellow"
                    ? "bg-yellow-50 border border-yellow-200/50"
                    : feature.highlight === "green"
                      ? "bg-emerald-50 border border-emerald-200/50"
                      : "bg-gray-50/80 border border-gray-100"
                }`}
              >
                <span className="text-gray-700 leading-snug text-xs md:text-sm">
                  {feature.label}
                </span>
                <span
                  className={` font-medium text-right text-sm md:text-base leading-snug ${
                    feature.icon ? "text-emerald-600" : "text-gray-900"
                  }`}
                >
                  {feature.value}
                </span>
              </div>
            ))}
          </div>

          {/* SLA */}
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px flex-1 bg-linear-to-r from-blue/30 to-transparent"></div>
              <span className="text-blue  font-bold uppercase tracking-widest">
                SLA Breakdown
              </span>
              <div className="h-px flex-1 bg-linear-to-l from-blue/30 to-transparent"></div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {sla.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-blue-50/80 border border-blue-100"
                >
                  <div className="text-blue font-bold  mb-1.5">
                    {item.level}
                  </div>
                  <div className="">
                    {item.response && (
                      <div className="text-gray-500 ">
                        Response:{" "}
                        <span className="text-gray-900 font-semibold">
                          {item.response}
                        </span>
                      </div>
                    )}
                    <div className="text-gray-500 ">
                      Fix:{" "}
                      <span className="text-gray-900 font-semibold">
                        {item.fix}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Desktop Comparison Row
const ComparisonRow = ({
  label,
  values,
  IconComponent,
  checkmarks,
  highlight,
  italic,
  alternate,
  firstRow,
}) => {
  return (
    <tr
      className={`group transition-all duration-200 ${
        alternate ? "bg-gray-50/50" : "bg-white"
      } ${!firstRow && "border-b border-gray-100"} hover:bg-blue-50/30`}
    >
      <td
        className={`px-6 pr-4 py-3 ${italic ? "italic" : ""} ${firstRow ? "pt-6" : ""}`}
      >
        <div className="flex items-center gap-3">
          {IconComponent && (
            <div className="w-7 xl:w-9 h-7 xl:h-9 flex items-center justify-center bg-blue/10 rounded-lg">
              <IconComponent
                className="w-3 xl:w-5 h-3 xl:h-5 text-blue group-hover:scale-120 transition-all duration-300 "
                strokeWidth={2}
              />
            </div>
          )}
          <span className="text-gray-700 font-semibold text-sm xl:text-base">
            {label}
          </span>
        </div>
      </td>

      {values.map((value, idx) => (
        <td
          key={idx}
          className={`px-6  py-3 text-center relative  ${
            idx === 1
              ? "bg-linear-to-br from-[#003366] via-blue to-[#005fa3] "
              : ""
          }`}
        >
          <div
            className={`inline-flex items-center justify-center px-4 py-2 rounded-lg transition-all ${
              checkmarks
                ? "text-emerald-600 font-black text-2xl"
                : highlight === "yellow" && value.includes("Complimentary")
                  ? "bg-emerald-100 border border-emerald-300 text-emerald-700 text-xs xl:text-sm font-semibold shadow-sm"
                  : highlight === "yellow"
                    ? "bg-yellow-100 border border-yellow-300 text-yellow-700 text-xs xl:text-sm font-semibold shadow-sm"
                    : highlight === "green" && value !== "—"
                      ? "bg-emerald-100 border border-emerald-300 text-emerald-700 text-xs xl:text-sm font-semibold shadow-sm"
                      : idx === 1 && !checkmarks
                        ? "text-white font-semibold text-xs xl:text-sm bg-white/10 backdrop-blur-sm"
                        : "text-gray-700 text-xs xl:text-sm font-medium"
            }`}
          >
            {value}
          </div>
        </td>
      ))}
    </tr>
  );
};

// SLA Comparison Row
const SLAComparisonRow = ({ label, values, severity, alternate }) => {
  const severityConfig = {
    critical: {
      bg: "from-red-50 to-red-100",
      dot: "bg-red-500",
      text: "text-red-700",
    },
    high: {
      bg: "from-orange-50 to-orange-100",
      dot: "bg-orange-500",
      text: "text-orange-700",
    },
    medium: {
      bg: "from-yellow-50 to-yellow-100",
      dot: "bg-yellow-500",
      text: "text-yellow-700",
    },
    low: {
      bg: "from-blue-50 to-blue-100",
      dot: "bg-blue-500",
      text: "text-blue-700",
    },
  };

  const config = severityConfig[severity];

  return (
    <tr
      className={`group transition-all border-b border-gray-100 ${
        alternate ? "bg-gray-50/50" : "bg-white"
      } hover:bg-blue-50/30`}
    >
      <td className="px-6  py-3">
        <div
          className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-linear-to-r ${config.bg} shadow-sm`}
        >
          <div
            className={`w-2.5 h-2.5 rounded-full ${config.dot} shadow-lg`}
          ></div>
          <span className={`${config.text} font-semibold text-sm xl:text-base`}>
            {label}
          </span>
        </div>
      </td>
      {values.map((value, idx) => (
        <td
          key={idx}
          className={`px-6  py-3 text-center ${
            idx === 1
              ? "bg-linear-to-br from-[#003366] via-blue to-[#005fa3]"
              : ""
          }`}
        >
          <div className="space-y-1.5">
            {value.response && (
              <div className="text-gray-400 text-[10px] xl:text-xs uppercase tracking-wider font-medium">
                Response:{" "}
                <span
                  className={`${idx === 1 ? "text-white font-semibold" : "text-gray-900 font-semibold"}`}
                >
                  {value.response}
                </span>
              </div>
            )}
            <div className="text-gray-400 text-[10px] xl:text-xs uppercase tracking-wider font-medium">
              Fix:{" "}
              <span
                className={`${idx === 1 ? "text-white font-semibold" : "text-emerald-600 font-semibold"}`}
              >
                {value.fix}
              </span>
            </div>
          </div>
        </td>
      ))}
    </tr>
  );
};

export default PricingTable;
