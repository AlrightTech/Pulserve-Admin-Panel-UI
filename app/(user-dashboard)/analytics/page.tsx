"use client";
import React from "react";
import WelcomeHeader from "../components/dashboard/WelcomeHeader";
import PlatformOverview from "./components/PlatformOverview";
import SurveyActivityChart from "./components/SurveyActivityChart";
import ResponseVolumesChart from "./components/ResponseVolumesChart";
import UsageTrendsChart from "./components/UsageTrendsChart";
import TopClientsTable from "./components/TopClientsTable";
import DataPrivacyNotice from "./components/DataPrivacyNotice";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col space-y-4 pb-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-custom-charcoal">Analytics</h1>
        <p className="text-sm font-normal text-custom-dim-gray">
          Monitor platform usage and subscription performance
        </p>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-custom-charcoal text-xl lg:mt-5 mb-4">
          Platform Overview
        </h3>
        <PlatformOverview />
      </div>

      <div className="flex justify-between items-center mb-6">
        {/* Chart Header */}
        <h3 className="font-semibold text-xl text-custom-charcoal">
          Survey Activity
        </h3>

        <div className="relative">
          <select className="appearance-none text-sm font-medium border border-[#E2E8F0] rounded-xl px-4 py-2.5 pr-10 outline-none bg-custom-white text-[#1A202C] cursor-pointer hover:border-gray-300 transition-colors">
            <option>Last 7 Days</option>
            <option>Last 14 Days</option>
            <option>Last 30 Days</option>
          </select>

          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              width="10"
              height="6"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#718096]"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-custom-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <SurveyActivityChart />
        </div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-xl text-custom-charcoal">Response Volumes</h3>
          <div className="relative">
          <select className="appearance-none text-sm font-medium border border-[#E2E8F0] rounded-xl px-4 py-2.5 pr-10 outline-none bg-custom-white text-[#1A202C] cursor-pointer hover:border-gray-300 transition-colors">
            <option>Last 7 Days</option>
            <option>Last 14 Days</option>
            <option>Last 30 Days</option>
          </select>

          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              width="10"
              height="6"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#718096]"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <ResponseVolumesChart />
        </div>
        <h3 className="font-semibold text-xl text-custom-charcoal mb-6">Platform Usage Trends</h3>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <UsageTrendsChart />
        </div>
        <div className="">
          <h3 className="font-semibold text-xl text-custom-charcoal ">Top Clients by Usage</h3>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <TopClientsTable />
        </div>
      </div>

      <DataPrivacyNotice />
    </div>
  );
}
