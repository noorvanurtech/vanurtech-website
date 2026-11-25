"use client";

import React, { useState } from "react";
import { ArrowUpRight, Code, Smartphone, Layers, Zap, ShieldCheck, Sparkles } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";
import Link from "next/link";

export default function ServicesList() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      category: "Web · SEO · Performance",
      title: "Website Design & Development",
      link: "/website-development-company-india",
      icon: Code,
      features: [
        {
          title: "Built for your goals, not a template:",
          description: "every page designed around what you sell and who you're selling to",
        },
        {
          title: "SEO-ready from day one:",
          description: "fast load times, proper structure, and Google-friendly architecture built in",
        },
        {
          title: "Turns visitors into leads:",
          description: "clear CTAs, trust signals, and inquiry forms placed where they actually convert",
        },
        {
          title: "Scales with your business:",
          description: "modern Next.js stack that handles traffic spikes and feature additions without rebuilding",
        },
      ],
    },
    {
      id: 2,
      category: "iOS · Android · React Native",
      title: "Mobile App Development",
      link: "/mobile-app-development-company-india",
      icon: Smartphone,
      features: [
        {
          title: "One codebase, two platforms:",
          description: "React Native apps that feel genuinely native on both iOS and Android",
        },
        {
          title: "Design approved before code starts:",
          description: "Figma prototypes reviewed and signed off so you know exactly what you're getting",
        },
        {
          title: "Real device testing before launch:",
          description: "QA across multiple devices, OS versions, and edge cases — no surprises on go-live day",
        },
        {
          title: "Same team handles support:",
          description: "bug fixes, OS updates, and new feature builds done by the people who built it",
        },
      ],
    },
    {
      id: 3,
      category: "CRM · ERP · Business Ops",
      title: "CRM & ERP Development",
      link: "/crm-erp-development-company-india",
      icon: Layers,
      features: [
        {
          title: "CRM shaped around your sales process:",
          description: "track leads, assign follow-ups, and close deals without losing a single prospect",
        },
        {
          title: "ERP that connects every department:",
          description: "finance, HR, inventory, and operations in a single dashboard — no more data islands",
        },
        {
          title: "Reports that show what matters:",
          description: "real-time revenue, pipeline health, and team performance at a glance",
        },
        {
          title: "Automates the repetitive stuff:",
          description: "reminders, task assignments, invoice generation, and status updates — all without manual input",
        },
      ],
    },
    {
      id: 7,
      category: "UI · UX · Product Design",
      title: "UI/UX Design",
      link: "/ui-ux-design-services-india",
      icon: Zap,
      features: [
        {
          title: "Research before pixels:",
          description: "we map your users' actual journey before designing a single screen",
        },
        {
          title: "Wireframes you can test early:",
          description: "interactive prototypes in Figma for feedback rounds before development begins",
        },
        {
          title: "Visual design with brand consistency:",
          description: "every screen, color, and component follows a system that scales across your product",
        },
        {
          title: "Usability-tested before handoff:",
          description: "real user testing to catch friction points that look fine on paper but fail in practice",
        },
      ],
    },
    {
      id: 8,
      category: "AI · Automation · Intelligence",
      title: "AI Business Automation",
      link: "/ai-business-automation-india",
      icon: Code,
      features: [
        {
          title: "Automates your follow-up completely:",
          description: "AI calls, WhatsApp messages, and emails sent at the right time without any manual work",
        },
        {
          title: "Saves 10–20 staff hours per week:",
          description: "intelligent workflows eliminate repetitive tasks across sales, ops, and support",
        },
        {
          title: "AI bots that work 24/7:",
          description: "answer customer queries, qualify inbound leads, and book appointments — round the clock",
        },
        {
          title: "Predictive insights from your own data:",
          description: "AI surfaces risks, opportunities, and demand patterns before your team notices them",
        },
      ],
    },
    {
      id: 9,
      category: "Security · Compliance · Risk",
      title: "Cyber Security",
      link: "/cyber-security-services-india",
      icon: ShieldCheck,
      features: [
        {
          title: "Threat protection before damage is done:",
          description: "AI-powered detection of malware, ransomware, and intrusion attempts in real time",
        },
        {
          title: "Network and app vulnerability audits:",
          description: "comprehensive scans that find weaknesses before attackers do",
        },
        {
          title: "Data encryption and privacy controls:",
          description: "protect customer data and meet compliance requirements without slowing your systems",
        },
        {
          title: "24/7 monitoring with fast response:",
          description: "continuous surveillance with an incident response plan that kicks in immediately",
        },
      ],
    },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 py-8 sm:py-10 md:py-12"
      style={{ backgroundColor: "#0A0012" }}
    >
      <div className="max-w-7xl w-full">
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-6">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
              All Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            Pick a service or let us <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              figure out what you need
            </span>
          </h2>

          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Every service below links to a full page with more details, examples, and pricing guidance. Click the one that matches your requirement.
          </p>
        </div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-4 sm:space-y-6">
          {/* Row 1: 50% - 50% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Card 1 - Website Design */}
            <CometCard className="w-full lg:w-1/2">
              <Link href={services[0].link} className="block group h-full">
                <div
                  id="website-design"
                  className="min-h-[380px] lg:h-[480px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(1)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">
                      {services[0].category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 group-hover:text-purple-400 transition-colors">
                      {services[0].title}
                    </h3>
                  </div>

                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {services[0].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-purple-400 mt-1 text-sm">✦</span>
                        <div className="text-sm sm:text-base">
                          <span className="text-white font-semibold">
                            {feature.title}
                          </span>
                          <span className="text-gray-400">
                            {" "}
                            {feature.description}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
                </div>
              </Link>
            </CometCard>

            {/* Card 2 - Mobile Application */}
            <CometCard className="w-full lg:w-1/2">
              <Link href={services[1].link} className="block group h-full">
                <div
                  id="mobile-app"
                  className="min-h-[380px] lg:h-[480px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(2)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">
                      {services[1].category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 group-hover:text-purple-400 transition-colors">
                      {services[1].title}
                    </h3>
                  </div>

                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {services[1].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-purple-400 mt-1 text-sm">✦</span>
                        <div className="text-sm sm:text-base">
                          <span className="text-white font-semibold">
                            {feature.title}
                          </span>
                          <span className="text-gray-400">
                            {" "}
                            {feature.description}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
                </div>
              </Link>
            </CometCard>
          </div>

          {/* Row 2: 60% - 40% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Card 3 - CRM Solutions (60%) */}
            <CometCard className="w-full lg:w-[60%]">
              <Link href={services[2].link} className="block group h-full">
                <div
                  id="crm-saas"
                  className="min-h-[340px] lg:h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(3)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">
                      {services[2].category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 group-hover:text-purple-400 transition-colors">
                      {services[2].title}
                    </h3>
                  </div>

                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {services[2].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-purple-400 mt-1 text-sm">✦</span>
                        <div className="text-sm sm:text-base">
                          <span className="text-white font-semibold">
                            {feature.title}
                          </span>
                          <span className="text-gray-400">
                            {" "}
                            {feature.description}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
                </div>
              </Link>
            </CometCard>

            {/* Card 4 - UI/UX (40%) */}
            <CometCard className="w-full lg:w-[40%]">
              <Link href={services[3].link} className="block group h-full">
                <div
                  id="ui-ux"
                  className="min-h-[340px] lg:h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(4)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">
                      {services[3].category}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 group-hover:text-purple-400 transition-colors">
                      {services[3].title}
                    </h3>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {services[3].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1 text-xs sm:text-sm">
                          ✦
                        </span>
                        <div className="text-xs sm:text-sm">
                          <span className="text-white font-semibold">
                            {feature.title}
                          </span>
                          <span className="text-gray-400">
                            {" "}
                            {feature.description}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
                </div>
              </Link>
            </CometCard>
          </div>

          {/* Row 3: 55% - 45% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Card 5 - AI Automation (55%) */}
            <CometCard className="w-full lg:w-[55%]">
              <Link href={services[4].link} className="block group h-full">
                <div
                  id="ai-automation"
                  className="min-h-[340px] lg:h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(5)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">
                      {services[4].category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 group-hover:text-purple-400 transition-colors">
                      {services[4].title}
                    </h3>
                  </div>

                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {services[4].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-purple-400 mt-1 text-sm">✦</span>
                        <div className="text-sm sm:text-base">
                          <span className="text-white font-semibold">
                            {feature.title}
                          </span>
                          <span className="text-gray-400">
                            {" "}
                            {feature.description}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
                </div>
              </Link>
            </CometCard>

            {/* Card 6 - Cyber Security (45%) */}
            <CometCard className="w-full lg:w-[45%]">
              <Link href={services[5].link} className="block group h-full">
                <div
                  id="cyber-security"
                  className="min-h-[340px] lg:h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(6)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">
                      {services[5].category}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 group-hover:text-purple-400 transition-colors">
                      {services[5].title}
                    </h3>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {services[5].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1 text-xs sm:text-sm">
                          ✦
                        </span>
                        <div className="text-xs sm:text-sm">
                          <span className="text-white font-semibold">
                            {feature.title}
                          </span>
                          <span className="text-gray-400">
                            {" "}
                            {feature.description}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
                </div>
              </Link>
            </CometCard>
          </div>
        </div>
      </div>
    </div>
  );
}
