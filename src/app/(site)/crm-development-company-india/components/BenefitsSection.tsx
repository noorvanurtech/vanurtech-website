"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, Search, UserCheck, ShieldCheck, Sparkles } from "lucide-react";

const benefits = [
  { title: "Close More Deals Faster", icon: <TrendingUp className="w-6 h-6" /> },
  { title: "Never Miss a Follow-Up", icon: <UserCheck className="w-6 h-6" /> },
  { title: "Understand Your Customers Better", icon: <Lightbulb className="w-6 h-6" /> },
  { title: "Boost Sales Team Productivity", icon: <Search className="w-6 h-6" /> },
  { title: "Increase Revenue & Retention", icon: <ShieldCheck className="w-6 h-6" /> }
];

export function BenefitsSection() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-[#0A0014]">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">

          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8 mx-auto lg:mx-0">
              <Sparkles size={16} className="text-purple-400" />
              <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide mb-0.5">
                Business Benefits
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-5 sm:mb-8 text-white leading-[1.1] tracking-tight">
              How Our CRM{" "}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
                Grows Your Business
              </span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-10 max-w-xl">
              Custom CRM software aligned to your sales stages, follow-up rules, and reporting needs — so leads do not slip through and your team works from one source of truth.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-6 border-t border-purple-500/10">
              <div className="text-sm text-center lg:text-left">
                <p className="text-white font-semibold text-base">CRM for Indian sales teams</p>
                <p className="text-gray-400">Real estate, healthcare, solar and more</p>
              </div>
            </div>
          </motion.div>

          {/* Right Benefits Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 relative"
          >
            {/* Connecting line decoration */}
            <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-linear-to-b from-purple-500/0 via-purple-500/20 to-purple-500/0 hidden sm:block" />

            <div className="space-y-4 sm:space-y-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative group sm:pl-16 cursor-default"
                >
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#120524] border border-purple-500/20 text-purple-400 hidden sm:flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] z-10">
                    {/* Auto-pulsing Desktop Icon Background */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] z-0"
                      animate={{ opacity: [0, 1, 0], scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
                    />
                    <motion.span
                      animate={{ color: ['#c084fc', '#ffffff', '#c084fc'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
                      className="relative z-10"
                    >
                      {benefit.icon}
                    </motion.span>
                  </div>

                  <div className="flex items-center p-4 sm:p-6 rounded-4xl border border-purple-500/10 bg-white/2 hover:bg-white/5 backdrop-blur-xl group-hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden">

                    {/* Inner Hover Glow (Manual) */}
                    <div className="absolute inset-0 bg-linear-to-r from-purple-600/0 via-purple-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

                    {/* Automatic Pulsing Glow */}
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-purple-600/0 via-purple-600/15 to-purple-600/0 blur-xl pointer-events-none"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
                    />

                    {/* Automatic Pulsing Border */}
                    <motion.div
                      className="absolute inset-0 border border-purple-500/40 rounded-4xl pointer-events-none"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
                    />

                    <div className="flex items-center gap-5 sm:gap-0 relative z-10">
                      {/* Mobile icon */}
                      <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 border border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.1)] sm:hidden relative overflow-hidden flex items-center justify-center">
                        <motion.div
                          className="absolute inset-0 bg-purple-500 z-0"
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
                        />
                        <motion.span
                          animate={{ color: ['#c084fc', '#ffffff', '#c084fc'] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
                          className="relative z-10"
                        >
                          {benefit.icon}
                        </motion.span>
                      </div>

                      <motion.span
                        animate={{ color: ['#d1d5db', '#ffffff', '#d1d5db'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
                        className="text-gray-300 text-sm sm:text-base font-semibold group-hover:text-white transition-colors tracking-wide"
                      >
                        {benefit.title}
                      </motion.span>
                    </div>


                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
