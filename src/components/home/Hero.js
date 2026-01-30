import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Database,
  Server,
} from "lucide-react";
import { companyInfo } from "@/data/mock";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 ">
      <div className="max-w-350 mx-auto px-5 md:px-[7.6923%] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-[58px] font-bold leading-[1.1] tracking-tight text-[#222222]">
              One Subscription. <br /> Reliable Dev Team. <br /> Real Output.
            </h1>

            <p className="text-lg md:text-xl text-[#555555] max-w-xl leading-relaxed">
              We run your product development end-to-end. No hiring, no
              turnover, no freelancers disappearing. Just consistent delivery
              from a team that knows your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-between px-6 py-4 bg-linear-to-b from-[#00488b] to-[#003b72] text-white font-medium text-lg transition-all duration-400 hover:bg-[#003366]  min-h-14 group rounded-md shadow-[inset_0_1px_0.25px_rgba(0,0,0,0.3),inset_0_2px_1px_rgba(0,0,0,0.2)] hover:-translate-y-0.5
"
              >
                Learn More
                <ArrowRight
                  size={20}
                  className="ml-3 group-hover:translate-x-1 transition-transform duration-300"
                />{" "}
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm border border-black/10 text-[#222222] font-medium text-lg transition-all duration-400 hover:bg-white  min-h-14 group rounded-md shadow-[inset_0_1px_0.25px_rgba(100,100,100,0.4),inset_0_2px_1px_rgba(100,100,100,0.2)] hover:-translate-y-0.5"
              >
                See Our Work
                <ArrowUpRight
                  size={20}
                  className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Right Content - Code Editor Visual */}
          <div className="hidden md:block relative">
            <div className="relative w-full max-w-145 mx-auto">
              <div className="relative bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 shadow-2xl shadow-black/5">
                {/* Code Editor Mockup */}
                <div className="bg-[#1a1a2e] rounded-xl overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#16162a] border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-[#b80101]"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-white/40 text-sm">
                      your-project.tsx
                    </span>
                  </div>
                  <div className="p-6 font-mono text-sm">
                    <div className="text-[#6b7280]">
                      // Your dedicated dev team
                    </div>
                    <div className="mt-2">
                      <span className="text-purple-400">const</span>
                      <span className="text-white"> project </span>
                      <span className="text-purple-400">=</span>
                      <span className="text-white"> {"{"}</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-[#60a5fa]">team</span>
                      <span className="text-white">: </span>
                      <span className="text-emerald-400">"PASOVIT"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-[#60a5fa]">delivery</span>
                      <span className="text-white">: </span>
                      <span className="text-emerald-400">"weekly"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-[#60a5fa]">quality</span>
                      <span className="text-white">: </span>
                      <span className="text-emerald-400">
                        "production-ready"
                      </span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-[#60a5fa]">stress</span>
                      <span className="text-white">: </span>
                      <span className="text-[#b80101]">null</span>
                    </div>
                    <div>
                      <span className="text-white">{"}"};</span>
                    </div>
                    <div className="mt-4">
                      <span className="text-purple-400">await</span>
                      <span className="text-white"> shipFaster(project);</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span className="text-emerald-400">Build successful</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center border border-black/5">
                  <Globe className="w-7 h-7 text-[#00488b]" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center border border-black/5">
                  <Database className="w-6 h-6 text-[#00488b]" />
                </div>
                <div className="absolute top-1/2 -right-5 w-10 h-10 bg-[#00488b] rounded-lg shadow-lg flex items-center justify-center">
                  <Server className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
