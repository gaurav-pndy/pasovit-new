import { Check, Clock, Code, Layers, Send } from "lucide-react";
import React from "react";

const Process = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-350 mx-auto px-5 md:px-[7.6923%]">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[#b80101] text-sm font-semibold tracking-wider uppercase mb-4">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight mb-6">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00488b]/10 text-[#00488b] text-sm font-semibold rounded-md">
                <Layers size={16} />
                <span>CLIENT PORTAL</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#222222]">
                Your Project Command Center
              </h3>
              <p className="text-[#555555] text-lg leading-relaxed">
                Every client gets exclusive access to our in-house Client Portal
                — a powerful project management platform where all
                communications happen, tasks are tracked, and progress is
                visible in real-time.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time task tracking & progress updates",
                  "Centralized communication thread",
                  "File sharing & asset management",
                  "Milestone tracking & delivery timelines",
                  "Direct access to your dedicated team",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-md bg-[#00488b]/10 flex items-center justify-center">
                      <Check size={12} className="text-[#00488b]" />
                    </div>
                    <span className="text-[#555555]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-[#1a1a2e] rounded-xl p-5 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#b80101]"></div>
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
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-[#00488b]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-[#00488b]/20 rounded-md flex items-center justify-center">
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
                    <div className="h-full w-2/3 bg-linear-to-r from-[#00488b] to-[#60a5fa] rounded-md"></div>
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
                <div className="p-6 bg-white/60 backdrop-blur-sm border border-white/80 rounded-xl hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-400 h-full">
                  <div className="w-14 h-14 flex items-center justify-center bg-linear-to-br from-[#00488b] to-[#003366] text-white mb-5 transition-all duration-400 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#00488b]/20 rounded-xl">
                    <IconComponent size={24} />
                  </div>
                  <span className="text-xs font-semibold text-[#00488b] mb-2 block">
                    STEP {item.step}
                  </span>
                  <h3 className="text-lg font-semibold text-[#222222] mb-2">
                    {item.title}
                  </h3>
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
