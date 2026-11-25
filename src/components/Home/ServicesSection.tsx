"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Smartphone,
  Code,
  Zap,
  Layers,
  Sparkles,
} from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";
import Link from "next/link";


export default function ServicesSection({ onConsultClick }: { onConsultClick?: () => void }) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      category: "Creative & Responsive",
      title: "Website Design & Development",
      link: "/website-development-company-india",
      icon: Code,
      features: [
        {
          title: "Built for your business goals:",
          description:
            "not a template — every page designed around what you sell and who you sell to",
        },
        {
          title: "SEO-ready from day one:",
          description: "fast load times, proper headings, and Google-friendly structure built in",
        },
        {
          title: "Converts visitors into leads:",
          description: "clear CTAs, trust signals, and inquiry forms placed where they work best",
        },
        {
          title: "Scales as you grow:",
          description: "modern tech stack (Next.js, React) that handles traffic and feature additions",
        },
      ],
    },
    {
      id: 2,
      category: "Cross-Platform",
      title: "Mobile Application Development",
      link: "/mobile-app-development-company-india",
      icon: Smartphone,
      features: [
        {
          title: "iOS & Android from one codebase:",
          description: "React Native apps that feel native on both platforms",
        },
        {
          title: "Pixel-perfect UI/UX design:",
          description: "Figma prototypes reviewed and approved before a single line of code",
        },
        {
          title: "Thorough QA before launch:",
          description: "device, performance, and edge-case testing so it works on day one",
        },
        {
          title: "Ongoing support included:",
          description: "bug fixes, OS updates, and new features handled by the same team",
        },
      ],
    },
    {
      id: 3,
      category: "Scale & Automation",
      title: "CRM & ERP Solutions",
      link: "/crm-erp-development-company-india",
      icon: Layers,
      features: [
        {
          title: "CRM built for your sales process:",
          description: "track leads, assign follow-ups, and close deals without missing a step",
        },
        {
          title: "ERP that connects every department:",
          description: "finance, inventory, HR, and operations in a single dashboard",
        },
        {
          title: "Real-time reports that matter:",
          description: "see revenue, pipeline, and team performance at a glance",
        },
        {
          title: "Automates the repetitive work:",
          description: "reminders, assignments, invoicing, and status updates — all automatic",
        },
      ],
    },
    {
      id: 4,
      category: "Intelligence",
      title: "AI Business Automation",
      link: "/ai-business-automation-india",
      icon: Code,
      features: [
        {
          title: "Automates your follow-up:",
          description: "AI calls, WhatsApp messages, and emails sent without manual effort",
        },
        {
          title: "Eliminates repetitive tasks:",
          description: "saves 10–20 staff hours per week through intelligent workflow automation",
        },
        {
          title: "24/7 AI chat & calling bots:",
          description: "answer customer queries and qualify leads even outside business hours",
        },
        {
          title: "Predictive business insights:",
          description: "AI analyses your data to flag risks and spot growth opportunities",
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
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-6">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
              What We Build
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white tracking-tight">
            Four Core Services. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              One Team Behind All of Them.
            </span>
          </h2>

          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl leading-relaxed">
            From your first website to a fully automated CRM — we design, build, and support everything your business needs to run and grow online.
          </p>
        </div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-4 sm:space-y-6">
          {/* Row 1: 50% - 50% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Card 1 - Website Design */}
            <CometCard className="w-full lg:w-1/2">
              <Link href={services[0].link} className="block group">
                <div
                  className="min-h-[380px] sm:min-h-[420px] lg:h-[480px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-4 sm:p-6 md:p-8 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(1)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">
                      {services[0].category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 group-hover:text-purple-400 transition-colors">
                      {services[0].title}
                    </h3>
                  </div>

                  <ul className="space-y-2 sm:space-y-3">
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
              <Link href={services[1].link} className="block group">
                <div
                  className="min-h-[380px] sm:min-h-[420px] lg:h-[480px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-4 sm:p-6 md:p-8 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(2)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">
                      {services[1].category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 group-hover:text-purple-400 transition-colors">
                      {services[1].title}
                    </h3>
                  </div>

                  <ul className="space-y-2 sm:space-y-3">
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
            {/* Card 3 - CRM Solutions */}
            <CometCard className="w-full lg:w-[60%]">
              <Link href={services[2].link} className="block group">
                <div
                  className="min-h-[320px] sm:min-h-[360px] lg:h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-4 sm:p-6 md:p-8 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(3)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">
                      {services[2].category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 group-hover:text-purple-400 transition-colors">
                      {services[2].title}
                    </h3>

                  </div>

                  <ul className="space-y-2 sm:space-y-3">
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

            {/* Card 4 - AI Automation */}
            <CometCard className="w-full lg:w-[40%]">
              <Link href={services[3].link} className="block group">
                <div
                  className="min-h-[320px] sm:min-h-[360px] lg:h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-4 sm:p-6 md:p-8 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
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

                  <ul className="space-y-2 sm:space-y-3">
                    {services[3].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-purple-400 mt-1 text-sm">✦</span>
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

          {/* CTA Card - Full Width */}
          <CometCard className="w-full">
            <div
              className="min-h-[160px] sm:h-[200px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-4 sm:p-6 md:p-8 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden flex flex-col items-center justify-center text-center"
              onMouseEnter={() => setHoveredCard(7)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                Not Sure Where to Start? Let's Figure It Out Together.
              </h4>

              <button
                onClick={onConsultClick}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-purple-600 text-white hover:bg-purple-500 transition-all duration-300 group-hover:scale-105 font-semibold text-sm sm:text-base"
              >
                <span>Book a Free 20-Min Call</span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:rotate-45 transition-transform duration-300"
                />
              </button>

              <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
            </div>
          </CometCard>
        </div>
      </div>
    </div>
  );
}
