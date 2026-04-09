"use client";
import React from "react";
import { Users, FileText, MessageSquare, CreditCard } from "lucide-react";

const stats = [
  {
    label: "Total Clients",
    count: "120",
    description: "Registered client accounts",
    icon: Users,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
  },
  {
    label: "Active Surveys",
    count: "340",
    description: "Currently active surveys",
    icon: FileText,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-50",
  },
  {
    label: "Total Responses",
    count: "8,450",
    description: "Survey responses collected",
    icon: MessageSquare,
    iconColor: "text-green-500",
    iconBg: "bg-green-50",
  },
  {
    label: "Active Subscriptions",
    count: "95",
    description: "Currently active plans",
    icon: CreditCard,
    iconColor: "text-pink-400",
    iconBg: "bg-pink-50",
  },
];

export default function PlatformOverview() {
  return (
    <div className="p-6 bg-[#F9FAFB]">
      {/* Heading */}
      <h2
        className="font-bold mb-5"
        style={{
          color: "#333333",
          fontSize: "20px",
          fontFamily: "var(--font-dm-sans, sans-serif)",
        }}
      >
        Platform Overview
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 flex flex-col gap-4"
            style={{
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.05)",
            }}
          >
            {/* Top row: label + icon */}
            <div className="flex items-start justify-between">
              <p
                className="uppercase font-semibold tracking-widest leading-none"
                style={{
                  color: "#999999",
                  fontSize: "9.5px",
                  fontFamily: "var(--font-dm-sans, sans-serif)",
                }}
              >
                {stat.label}
              </p>
              <div
                className={`${stat.iconBg} ${stat.iconColor} rounded-xl flex items-center justify-center`}
                style={{ width: 38, height: 38 }}
              >
                <stat.icon size={18} strokeWidth={1.8} />
              </div>
            </div>

            {/* Count */}
            <div>
              <p
                className="font-bold leading-none"
                style={{
                  color: "#1F2937",
                  fontSize: "32px",
                  fontFamily: "var(--font-dm-sans, sans-serif)",
                }}
              >
                {stat.count}
              </p>
            </div>

            {/* Description */}
            <p
              className="leading-none"
              style={{
                color: "#666666",
                fontSize: "12px",
                fontFamily: "var(--font-dm-sans, sans-serif)",
              }}
            >
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}