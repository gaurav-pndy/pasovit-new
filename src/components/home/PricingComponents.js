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
        className={`relative pb-4 rounded-2xl shadow-xl shadow-black/5 overflow-hidden  border-2 transition-all duration-300 ${
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
        <td key={idx} className={`px-6  py-3 text-center relative  `}>
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
                        ? "text-blue font-semibold text-xs xl:text-sm"
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
const SLAComparisonRow = ({ label, includes, values, severity, alternate }) => {
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
      className={`transition-all ${
        alternate ? "bg-gray-50/50" : "bg-white"
      } border-b border-gray-100 hover:bg-blue-50/30`}
    >
      {/* Severity */}
      <td className="px-6 py-4 min-w-40 xl:min-w-42">
        <div
          className={`inline-flex items-center gap-2 px-3 xl:px-4 py-2 rounded-lg bg-linear-to-r ${config.bg} shadow-sm`}
        >
          <div
            className={`w-2 xl:w-2.5 h-2 xl:h-2.5 rounded-lg ${config.dot}`}
          />
          <span className={`${config.text} font-semibold text-xs xl:text-sm`}>
            {label}
          </span>
        </div>
      </td>

      {/* What it Includes */}
      <td className="px-6 py-4 text-gray-800 text-sm leading-relaxed w-72 xl:w-80">
        {includes}
      </td>

      {/* Time Column */}
      {values.map((value, idx) => (
        <td key={idx} className={`px-6  py-3 text-center`}>
          <div className="space-y-1.5">
            {value.response && (
              <div className="text-gray-500 text-[10px] xl:text-xs uppercase tracking-wider font-medium">
                Response:{" "}
                <span
                  className={`${idx === 1 ? "text-blue font-semibold" : "text-gray-900 font-semibold"}`}
                >
                  {value.response}
                </span>
              </div>
            )}
            <div className="text-gray-500 text-[10px] xl:text-xs uppercase tracking-wider font-medium">
              Fix:{" "}
              <span
                className={`${idx === 1 ? "text-red font-semibold" : "text-emerald-600 font-semibold"}`}
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

export { MobilePricingCard, ComparisonRow, SLAComparisonRow };
