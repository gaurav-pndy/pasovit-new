import React from "react";

const PricingTable = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
        {/* Header */}
        {/* <div className="max-w-3xl mb-16">
          <p className="text-[#b80101] text-sm font-semibold tracking-wider uppercase mb-4">
            Pricing & SLA
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight">
            Choose the right plan for your team
          </h2>
          <p className="text-[#555555] text-lg mt-4 leading-relaxed">
            Transparent pricing with clear deliverables and service-level
            guarantees — no hidden costs, no long-term lock-ins.
          </p>
        </div> */}

        {/* Table Wrapper */}
        <div className="overflow-x-auto text-center rounded-2xl border border-black/10 shadow-lg shadow-black/5 bg-white">
          <table className="w-full border-collapse text-sm md:text-base text-center">
            {/* Header */}
            <thead>
              <tr className="bg-[#00488b] text-white ">
                <th className="px-5 py-4 font-semibold">Feature</th>
                <th className="px-5 py-4 font-semibold">Launch</th>
                <th className="px-5 py-4 font-semibold bg-[#003366] border-l-2 border-r-2 border-t-2 border-[#00488b]">
                  Scale{" "}
                  <span className="text-xs font-normal opacity-80">
                    (Most Popular)
                  </span>
                </th>
                <th className="px-5 py-4 font-semibold">Enterprise</th>
              </tr>
            </thead>

            <tbody className="text-[#222222]">
              {/* Best For */}
              <tr className="bg-white">
                <td className="px-5 py-4 font-medium">Best For</td>
                <td className="px-5 py-4 text-[#555555]">
                  Lean teams that need consistent delivery without overhead
                </td>
                <td className="px-5 py-4 bg-[#f1f6fb] border-l-2 border-r-2 border-[#00488b] text-[#555555]">
                  Growing teams that need faster throughput and tighter
                  iteration
                </td>
                <td className="px-5 py-4 text-[#555555]">
                  Teams with complex backlogs where delays are expensive & SLA
                  matters
                </td>
              </tr>

              {/* Section Divider */}
              <tr className="bg-[#b80101] text-white">
                <td
                  colSpan={4}
                  className="px-5 py-3 font-semibold text-center tracking-wide"
                >
                  Deliverables (What You Get)
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 font-medium">Active Build Slots</td>
                <td className="px-5 py-4">1 (Sequential)</td>
                <td className="px-5 py-4 bg-[#f1f6fb] border-l-2 border-r-2 border-[#00488b]">
                  2 (Parallel)
                </td>
                <td className="px-5 py-4">5 (Highest throughput)</td>
              </tr>

              <tr className="bg-black/5">
                <td className="px-5 py-4 font-medium">Delivery Cadence*</td>
                <td className="px-5 py-4">Fortnightly</td>
                <td className="px-5 py-4 bg-[#f1f6fb] border-l-2 border-r-2 border-[#00488b]">
                  Weekly
                </td>
                <td className="px-5 py-4">Weekly</td>
              </tr>

              <tr>
                <td className="px-5 py-4 font-medium">Check-in Calls</td>
                <td className="px-5 py-4">Monthly (With Project Manager)</td>
                <td className="px-5 py-4 bg-[#f1f6fb] border-l-2 border-r-2 border-[#00488b]">
                  Fortnightly (With Project Manager)
                </td>
                <td className="px-5 py-4">
                  Weekly (With Project Manager + CTO)
                </td>
              </tr>

              <tr className="bg-black/5">
                <td className="px-5 py-4 font-medium">
                  Bug Fixes & Enhancements
                </td>
                <td className="px-5 py-4">✓</td>
                <td className="px-5 py-4 bg-[#f1f6fb] border-l-2 border-r-2 border-[#00488b]">
                  ✓
                </td>
                <td className="px-5 py-4">✓</td>
              </tr>

              <tr>
                <td className="px-5 py-4 font-medium">
                  Component & Module Library
                </td>
                <td className="px-5 py-4">✓</td>
                <td className="px-5 py-4 bg-[#f1f6fb] border-l-2 border-r-2 border-[#00488b]">
                  ✓
                </td>
                <td className="px-5 py-4">✓</td>
              </tr>

              <tr className="bg-black/5">
                <td className="px-5 py-4 font-medium">
                  Staging / Preview Link
                </td>
                <td className="px-5 py-4">✓</td>
                <td className="px-5 py-4 bg-[#f1f6fb] border-l-2 border-r-2 border-[#00488b]">
                  ✓
                </td>
                <td className="px-5 py-4">✓</td>
              </tr>

              <tr>
                <td className="px-5 py-4 font-medium">
                  Documentation & Training
                </td>
                <td className="px-5 py-4">Documentation</td>
                <td className="px-5 py-4 bg-[#f1f6fb] border-l-2 border-r-2 border-[#00488b]">
                  Documentation + Loom Videos
                </td>
                <td className="px-5 py-4">
                  Documentation + Loom Videos + Live Team Training + Q&A
                  Sessions
                </td>
              </tr>

              <tr className="bg-black/5 italic  ">
                <td className="px-5 py-4 font-medium">
                  SLA (Response & Fix Times)*
                </td>
                <td className="px-5 py-4">Standard SLA</td>
                <td className="px-5 py-4 bg-[#f1f6fb] border-l-2 border-r-2 border-[#00488b]">
                  Enhanced SLA
                </td>
                <td className="px-5 py-4">Priority SLA</td>
              </tr>

              <tr className="bg-yellow-50">
                <td className="px-5 py-4 font-medium">UI Design Files</td>
                <td className="px-5 py-4">Add-on ($1,000)</td>
                <td className="px-5 py-4 bg-yellow-100 border-l-2 border-r-2 border-[#00488b]">
                  Add-on ($1,000)
                </td>
                <td className="px-5 py-4">Complimentary</td>
              </tr>

              <tr className="bg-green-50">
                <td className="px-5 py-4 font-medium">
                  Systems & Opportunity Audit
                </td>
                <td className="px-5 py-4">—</td>
                <td className="px-5 py-4 bg-green-100 border-l-2 border-r-2 border-[#00488b]">
                  Bonus (Half-Yearly, worth $4,000)
                </td>
                <td className="px-5 py-4">Bonus (Quarterly, worth $4,000)</td>
              </tr>

              <tr className="bg-emerald-100 font-semibold">
                <td className="px-5 py-5">Price</td>
                <td className="px-5 py-5">$3,000 / month</td>
                <td className="px-5 py-5 bg-emerald-200 text-[#003366] border-l-2 border-r-2 border-[#00488b]">
                  $6,000 / month
                </td>
                <td className="px-5 py-5">$9,000 / month</td>
              </tr>

              {/* SLA Divider */}
              <tr className="bg-[#00488b] text-white">
                <td
                  colSpan={4}
                  className="px-5 py-3 font-semibold text-center tracking-wide"
                >
                  SLA Breakdown
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 font-medium">S1 — Critical</td>
                <td className="px-5 py-4">
                  Response: 4 business hrs <br /> Fix: 1 business day
                </td>
                <td className="px-5 py-4 bg-[#f1f6fb] border-l-2 border-r-2 border-[#00488b]">
                  Response: 2 business hrs <br /> Fix: 12 business hrs
                </td>
                <td className="px-5 py-4">
                  Response: 1 business hr <br /> Fix: 4 business hrs
                </td>
              </tr>

              <tr className="bg-black/5">
                <td className="px-5 py-4 font-medium">S2 — High</td>
                <td className="px-5 py-4">
                  Response: 1 business day <br /> Fix: 2 business days
                </td>
                <td className="px-5 py-4 bg-[#f1f6fb] border-l-2 border-r-2 border-[#00488b]">
                  Response: 12 business hrs <br /> Fix: 1 business day
                </td>
                <td className="px-5 py-4">
                  Response: 6 business hrs <br /> Fix: 8 business hrs
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 font-medium">S3 — Medium</td>
                <td className="px-5 py-4">Fix: 2 business days</td>
                <td className="px-5 py-4 bg-[#f1f6fb] border-l-2 border-r-2 border-[#00488b]">
                  Fix: 2 business days
                </td>
                <td className="px-5 py-4">Fix: 12 business hrs</td>
              </tr>

              <tr className="bg-black/5">
                <td className="px-5 py-4 font-medium">S4 — Low</td>
                <td className="px-5 py-4">Fix: 5 business days</td>
                <td className="px-5 py-4 bg-[#f1f6fb] border-l-2 border-r-2 border-b-2 border-[#00488b]">
                  Fix: 5 business days
                </td>
                <td className="px-5 py-4">Fix: 2 business days</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="mt-12 max-w-3xl">
          <h4 className="text-[#222222] font-semibold mb-2">NOTE:</h4>

          <p className="text-[#222222] font-medium mb-2">Delivery Cadence*</p>

          <ul className="list-disc pl-5 space-y-2 text-[#555555] leading-relaxed">
            <li>
              Work starts immediately and is delivered as soon as it’s
              completed.
            </li>
            <li>
              Some tasks take few hours. Others take longer. Delivery time
              depends on complexity, not a schedule.
            </li>
            <li>
              Delivery cadence defines how often we review progress and adjust
              priorities.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
