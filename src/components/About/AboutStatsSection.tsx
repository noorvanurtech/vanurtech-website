import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Users, Clock, Smile } from 'lucide-react';
import Link from 'next/link';

export default function AboutStatsSection() {
  const [counts, setCounts] = useState({
    years: 0,
    results: 0,
    projects: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        years: Math.floor(10 * progress),
        results: Math.min(2, Math.floor(2 * progress)),
        projects: Math.floor(300 * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({ years: 10, results: 2, projects: 300 });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: <Clock size={24} />, value: `${counts.years}+`, label: 'Years in Business' },
    { icon: <Trophy size={24} />, value: `${counts.projects}+`, label: 'Projects Delivered' },
    { icon: <Users size={24} />, value: '200+', label: 'Businesses Served' },
    { icon: <Smile size={24} />, value: `${counts.results}`, label: 'India Offices' },
  ];

  return (
    <div
      className="py-14 sm:py-20 flex items-center justify-center px-4 sm:px-6 md:px-8 relative overflow-hidden"
      style={{ backgroundColor: '#07000D' }}
    >
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10">

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 mb-16 border-b border-white/5 pb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`text-center px-4 ${index !== stats.length - 1 ? 'lg:border-r border-white/10' : ''}`}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-white to-purple-400">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs md:text-sm uppercase tracking-widest font-bold opacity-70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-px bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 rounded-[2.5rem] opacity-100 blur-[1px]" />
            <div className="relative rounded-[2.4rem] overflow-hidden bg-[#0A0012]">
              <img
                src="/images/about/WhatsApp Image 2026-04-15 at 3.31.34 PM.jpeg"
                alt="Vanurtech Media team — software development company in India"
                className="w-full h-[260px] sm:h-[350px] md:h-[550px] object-cover transition-all duration-1000 hover:scale-110 shadow-2xl"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A0012] via-transparent to-transparent opacity-80" />

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-3 sm:gap-5"
              >
                <div className="h-14 w-14 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 p-2 flex items-center justify-center shrink-0">
                  <img
                    src="/images/logo-1.png"
                    alt="Vanurtech Media Pvt. Ltd. Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-white font-bold tracking-tight text-sm sm:text-base">
                    Custom Software · CRM · AI Automation
                  </div>
                  <div className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-black">
                    Vanurtech Media Pvt. Ltd.
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <div className="space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md"
              >
                <Sparkles size={16} className="text-purple-400" />
                <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
                  Who We Are
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              >
                A Team That Ships,{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
                  Not Just Plans
                </span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-light"
            >
              <p>
                We are a team of developers, designers, and business analysts based in Delhi and
                Bhubaneswar. We build custom software for businesses that have outgrown spreadsheets
                and off-the-shelf tools — CRM systems, ERP platforms, mobile apps, SaaS products,
                and AI automation.
              </p>
              <p>
                There are no account managers between you and us. The person who listens to your
                requirement is the same one deciding how to build it. That keeps projects fast,
                clear, and on target.                 Explore our{" "}
                <Link href="/services" className="text-purple-400 hover:text-purple-300 underline underline-offset-4">
                  software services
                </Link>{" "}
                or{" "}
                <Link href="/products" className="text-purple-400 hover:text-purple-300 underline underline-offset-4">
                  ready-to-deploy products
                </Link>{" "}
                to see what we deliver.
              </p>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6 pt-4">
                <div className="p-4 rounded-xl bg-white/2 border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="text-purple-400 font-bold mb-1">Direct Communication</div>
                  <div className="text-xs text-gray-500">
                    You talk to the team building your software — not a middleman.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/2 border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="text-pink-400 font-bold mb-1">Post-Launch Support</div>
                  <div className="text-xs text-gray-500">
                    We stay involved after go-live — updates, fixes, and new features.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
