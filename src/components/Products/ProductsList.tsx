"use client";

import React, { useState } from "react";
import { LayoutDashboard, ShoppingCart, Users, Package, Sparkles, BarChart3, Warehouse } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";
import Link from "next/link";

export default function ProductsList() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      category: "Customer Management",
      title: "CRM Software",
      link: "/products/crm",
      icon: Users,
      features: [
        { title: "Lead & Pipeline Management:", description: "track every lead from first contact to closed deal" },
        { title: "Automated Follow-ups:", description: "smart reminders and email sequences to never miss a prospect" },
        { title: "Customer 360° View:", description: "complete history, interactions, and insights in one place" },
        { title: "Sales Analytics & Reports:", description: "real-time dashboards to monitor team performance" },
      ],
    },
    {
      id: 2,
      category: "Enterprise Resource Planning",
      title: "ERP Software",
      link: "/products/erp",
      icon: LayoutDashboard,
      features: [
        { title: "Finance & Accounting Module:", description: "invoicing, payroll, and financial reporting in one system" },
        { title: "HR & Payroll Management:", description: "employee records, attendance, and salary automation" },
        { title: "Inventory & Supply Chain:", description: "real-time stock tracking and procurement management" },
        { title: "Multi-Branch Operations:", description: "manage multiple locations from a single dashboard" },
      ],
    },
    {
      id: 3,
      category: "Point of Sale",
      title: "POS System",
      link: "/products/pos",
      icon: ShoppingCart,
      features: [
        { title: "Fast Billing & Checkout:", description: "quick and accurate billing with barcode scanner support" },
        { title: "Inventory Sync:", description: "auto-update stock levels with every sale in real time" },
        { title: "Multi-Payment Support:", description: "cash, card, UPI, and wallet payments in one system" },
        { title: "Sales Reports & Analytics:", description: "daily, weekly, and monthly sales performance insights" },
      ],
    },
    {
      id: 4,
      category: "Stock Control",
      title: "Inventory Management",
      link: "/products/inventory",
      icon: Package,
      features: [
        { title: "Real-Time Stock Tracking:", description: "monitor stock levels across warehouses instantly" },
        { title: "Low Stock Alerts:", description: "automated notifications before you run out of items" },
        { title: "Purchase Order Management:", description: "streamline vendor orders and receiving workflows" },
        { title: "Barcode & SKU Support:", description: "fast product lookup and accurate stock counting" },
      ],
    },
    {
      id: 5,
      category: "Business Intelligence",
      title: "Analytics Dashboard",
      link: "/products/analytics",
      icon: BarChart3,
      features: [
        { title: "Real-Time Data Visualization:", description: "live charts and graphs for instant business insights" },
        { title: "Custom Report Builder:", description: "create tailored reports for any department or metric" },
        { title: "KPI Tracking:", description: "monitor key performance indicators across your business" },
        { title: "Export & Sharing:", description: "export reports to PDF, Excel, or share via link" },
      ],
    },
    {
      id: 6,
      category: "Warehouse Operations",
      title: "Warehouse Management",
      link: "/products/warehouse",
      icon: Warehouse,
      features: [
        { title: "Bin & Location Management:", description: "organize products by zone, rack, and bin for fast retrieval" },
        { title: "Inbound & Outbound Tracking:", description: "manage receiving, putaway, picking, and shipping" },
        { title: "Batch & Expiry Tracking:", description: "FIFO/FEFO management for perishable goods" },
        { title: "Mobile Warehouse App:", description: "scan and update inventory on the go with mobile devices" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 py-8 sm:py-10 md:py-12" style={{ backgroundColor: "#0A0012" }}>
      <div className="max-w-7xl w-full">
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-6">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-purple-300 text-xs sm:text-sm font-medium tracking-wide">Our Product Suite</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            Complete Business Products <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
              for Every Industry
            </span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Discover VanurTech Media&apos;s suite of ready-to-deploy software products, engineered to automate, scale, and simplify your business.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {/* Row 1: 50% - 50% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {[0, 1].map((i) => (
              <CometCard key={i} className="w-full lg:w-1/2">
                <Link href={products[i].link} className="block group h-full">
                  <div
                    className="min-h-[380px] lg:h-[480px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                    onMouseEnter={() => setHoveredCard(i + 1)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="mb-4 sm:mb-6">
                      <div className="text-purple-400 text-xs sm:text-sm mb-2">{products[i].category}</div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 group-hover:text-purple-400 transition-colors">{products[i].title}</h3>
                    </div>
                    <ul className="space-y-3 sm:space-y-4">
                      {products[i].features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <span className="text-purple-400 mt-1 text-sm">✦</span>
                          <div className="text-sm sm:text-base">
                            <span className="text-white font-semibold">{f.title}</span>
                            <span className="text-gray-400"> {f.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl" />
                  </div>
                </Link>
              </CometCard>
            ))}
          </div>

          {/* Row 2: 60% - 40% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            <CometCard className="w-full lg:w-[60%]">
              <Link href={products[2].link} className="block group h-full">
                <div
                  className="min-h-[340px] lg:h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(3)} onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">{products[2].category}</div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 group-hover:text-purple-400 transition-colors">{products[2].title}</h3>
                  </div>
                  <ul className="space-y-3 sm:space-y-4">
                    {products[2].features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-purple-400 mt-1 text-sm">✦</span>
                        <div className="text-sm sm:text-base">
                          <span className="text-white font-semibold">{f.title}</span>
                          <span className="text-gray-400"> {f.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl" />
                </div>
              </Link>
            </CometCard>

            <CometCard className="w-full lg:w-[40%]">
              <Link href={products[3].link} className="block group h-full">
                <div
                  className="min-h-[340px] lg:h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(4)} onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">{products[3].category}</div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 group-hover:text-purple-400 transition-colors">{products[3].title}</h3>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    {products[3].features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1 text-xs sm:text-sm">✦</span>
                        <div className="text-xs sm:text-sm">
                          <span className="text-white font-semibold">{f.title}</span>
                          <span className="text-gray-400"> {f.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl" />
                </div>
              </Link>
            </CometCard>
          </div>

          {/* Row 3: 40% - 60% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            <CometCard className="w-full lg:w-[40%]">
              <Link href={products[4].link} className="block group h-full">
                <div
                  className="min-h-[340px] lg:h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(5)} onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">{products[4].category}</div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 group-hover:text-purple-400 transition-colors">{products[4].title}</h3>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    {products[4].features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1 text-xs sm:text-sm">✦</span>
                        <div className="text-xs sm:text-sm">
                          <span className="text-white font-semibold">{f.title}</span>
                          <span className="text-gray-400"> {f.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl" />
                </div>
              </Link>
            </CometCard>

            <CometCard className="w-full lg:w-[60%]">
              <Link href={products[5].link} className="block group h-full">
                <div
                  className="min-h-[340px] lg:h-[400px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-6 sm:p-8 md:p-10 hover:border-purple-600 transition-all duration-500 relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(6)} onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-purple-400 text-xs sm:text-sm mb-2">{products[5].category}</div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 group-hover:text-purple-400 transition-colors">{products[5].title}</h3>
                  </div>
                  <ul className="space-y-3 sm:space-y-4">
                    {products[5].features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-purple-400 mt-1 text-sm">✦</span>
                        <div className="text-sm sm:text-base">
                          <span className="text-white font-semibold">{f.title}</span>
                          <span className="text-gray-400"> {f.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl" />
                </div>
              </Link>
            </CometCard>
          </div>
        </div>
      </div>
    </div>
  );
}
