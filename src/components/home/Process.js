import { Check, Clock, Code, Layers, Send } from "lucide-react";
import React from "react";

const Process = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-red text-sm font-semibold tracking-wider uppercase mb-4">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-gray leading-tight mb-6">
            How we work with our Clients
          </h2>
          <p className="text-[#555555] text-lg leading-relaxed">
            A seamless, transparent process powered by our proprietary Client
            Portal — your central hub for communication, task management, and
            real-time project visibility.
          </p>
        </div>

        {/* Client Portal Feature */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-10 bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl shadow-xl shadow-black/5">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue/10 text-blue text-sm font-semibold rounded-md">
                <Layers size={16} />
                <span>CLIENT PORTAL</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-dark-gray">
                Your Project Command Center
              </h3>
              <p className="text-[#555555] text-lg leading-relaxed">
                Every Client gets Free Exclusive Access to our In-House,
                Custom-Built Client Portal. It is a powerful platform with:
              </p>
              <ul className="space-y-2">
                {[
                  "Real-time Task tracking, Progress updates, and Delivery timelines (Project Management)",
                  "Centralized communication thread (All messages securely stored)",
                  "Unlimited users (No team member limitations unlike other SaaS tools)",
                  "File sharing & asset management (All files within our server)",
                  "Invoicing and Billing (Download all your invoices any time, and pay directly through the platform)",
                  "Contracts (Any agreement we sign, you can always download it here)",
                  "Ticketing System (To ensure we stick to the SLA mentioned in our pricing plans)",
                ].map((feature, index) => (
                  <li key={index} className="flex  gap-3">
                    <div className="w-5 shrink-0 h-5 mt-1 rounded-md bg-blue/10 flex items-center justify-center">
                      <Check size={12} className="text-blue" />
                    </div>
                    <span className="text-[#555555]">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#555555] text-lg leading-relaxed">
                You will know exactly what quality of work you can expect from
                us, when we we use software built by us to fulfill your needs.
              </p>
            </div>
            <div className="relative">
              <div className="bg-[#1a1a2e] rounded-xl p-5 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  <span className="ml-3 text-white/40 text-xs">
                    Client Portal
                  </span>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-emerald-500/20 rounded-md flex items-center justify-center">
                        <Check size={12} className="text-emerald-400" />
                      </div>
                      <span className="text-white/80 text-sm">
                        Dashboard UI Complete
                      </span>
                    </div>
                    <span className="text-emerald-400 text-xs font-medium">
                      Done
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-blue/30">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-blue/20 rounded-md flex items-center justify-center">
                        <Code size={12} className="text-[#60a5fa]" />
                      </div>
                      <span className="text-white/80 text-sm">
                        API Integration
                      </span>
                    </div>
                    <span className="text-[#60a5fa] text-xs font-medium">
                      In Progress
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-white/10 rounded-md flex items-center justify-center">
                        <Clock size={12} className="text-white/40" />
                      </div>
                      <span className="text-white/80 text-sm">
                        User Testing
                      </span>
                    </div>
                    <span className="text-white/40 text-xs font-medium">
                      Queued
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/50">Sprint Progress</span>
                    <span className="text-[#60a5fa] font-medium">67%</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-white/10 rounded-md overflow-hidden">
                    <div className="h-full w-2/3 bg-linear-to-r from-blue to-[#60a5fa] rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: 1,
              title: "Submit Your Requirements",
              description:
                "Share your project vision, goals, and success criteria through our Client Portal.",
              icon: Send,
            },
            {
              step: 2,
              title: "Task Planning",
              description:
                "Requirements are broken into actionable tasks with clear timelines and acceptance criteria.",
              icon: Layers,
            },
            {
              step: 3,
              title: "Continuous Execution",
              description:
                "Our team works through your task log systematically with weekly progress updates.",
              icon: Code,
            },
            {
              step: 4,
              title: "Review & Iterate",
              description:
                "Review deliverables on staging, provide feedback, and watch your product evolve.",
              icon: Check,
            },
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={item.step} className="relative group">
                <div className="p-4 bg-white/60 backdrop-blur-sm border border-white/80 rounded-xl hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-400 h-full">
                  <div className="flex  gap-2 mb-5">
                    <div className="w-12 h-12 flex items-center justify-center bg-linear-to-br from-blue to-[#003366] text-white  transition-all duration-400 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue/20 rounded-xl shrink-0">
                      <IconComponent size={22} />
                    </div>
                    <div>
                      <span className="text-xs mb-2 font-semibold text-blue  block">
                        STEP {item.step}
                      </span>
                      <h3 className="text-lg font-semibold text-dark-gray leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[#888888] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
