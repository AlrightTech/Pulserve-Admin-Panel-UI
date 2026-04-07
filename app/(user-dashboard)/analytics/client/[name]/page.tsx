"use client";
import React from 'react';
import { useParams } from 'next/navigation';

export default function ClientAnalyticsDetail() {
  const { name } = useParams();
  const formattedName = typeof name === 'string' ? name.charAt(0).toUpperCase() + name.slice(1) : "Client";

  return (
    <div className="space-y-8 pb-8">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-gray-800">{formattedName}</h1>
        <p className="text-xs text-gray-400">Detailed client information and usage metrics</p>
      </div>

      {/* User Overview Section */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
        <h3 className="font-bold text-gray-800">User Overview</h3>
        <div className="grid grid-cols-2 gap-y-8">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Primary Contact</p>
            <p className="text-sm text-gray-800 mt-1">{formattedName}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Contact Email</p>
            <p className="text-sm text-gray-800 mt-1">{name}@acme.com</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Subscription Plan</p>
            <p className="text-sm text-gray-800 mt-1 font-medium">Enterprise</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Subscription Expiry</p>
            <p className="text-sm text-gray-800 mt-1">January 15, 2025</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Account Status</p>
            <span className="inline-block mt-2 px-2.5 py-0.5 bg-green-50 text-green-600 rounded-full text-[10px] font-bold">Active</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Subscription Status</p>
            <span className="inline-block mt-2 px-2.5 py-0.5 bg-green-50 text-green-600 rounded-full text-[10px] font-bold">Active</span>
          </div>
        </div>
      </div>

      {/* Usage Summary Grid */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
        <h3 className="font-bold text-gray-800">Usage Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-50 space-y-2">
            <p className="text-[10px] font-bold text-gray-500 uppercase">Active Surveys</p>
            <p className="text-3xl font-bold text-gray-800">12</p>
          </div>
          <div className="bg-green-50/50 p-6 rounded-xl border border-green-50 space-y-2">
            <p className="text-[10px] font-bold text-gray-500 uppercase">Total Responses</p>
            <p className="text-3xl font-bold text-gray-800">4,532</p>
          </div>
          <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-50 space-y-2">
            <p className="text-[10px] font-bold text-gray-500 uppercase">Avg. per Survey</p>
            <p className="text-3xl font-bold text-gray-800">378</p>
          </div>
        </div>

        {/* Individual Client Chart */}
        <div className="pt-4">
           <h4 className="text-xs font-bold text-gray-800 mb-4 uppercase">Usage Trend (Last 6 Months)</h4>
           <div className="h-[300px] w-full bg-gray-50 rounded-lg flex items-center justify-center text-gray-300">
             {/* Chart Component for this specific client here */}
             [Graph Area]
           </div>
        </div>
      </div>
    </div>
  );
}