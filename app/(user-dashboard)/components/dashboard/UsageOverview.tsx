"use client";

import React, { useState, useEffect } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { FileText, MessageSquare, BarChart2, ArrowUpRight } from 'lucide-react';

// Mock Data
const data = [
  { name: 'Jan 1', active: 2600, responses: 2500 },
  { name: 'Jan 8', active: 2800, responses: 2700 },
  { name: 'Jan 15', active: 3000, responses: 2900 },
  { name: 'Jan 22', active: 3200, responses: 3100 },
  { name: 'Jan 29', active: 3300, responses: 3200 },
  { name: 'Feb 5', active: 3400, responses: 3350 },
  { name: 'Feb 12', active: 3450, responses: 3400 },
  { name: 'Feb 19', active: 3500, responses: 3450 },
];

const UsageOverview = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Yeh check karta hai ke component browser par load ho chuka hai
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Agar server par render ho raha ho, toh khali div dikhao (Build error fix)
  if (!isMounted) {
    return <div className="h-[400px] w-full bg-white border border-custom-border rounded-2xl animate-pulse" />;
  }

  return (
    <div className="bg-white border border-custom-border rounded-2xl p-6 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-custom-charcoal font-dm-sans">Platform Usage Overview</h2>
          <p className="text-custom-medium-gray text-sm">Monitor survey creation and response collection trends</p>
        </div>
        
        <div className="flex bg-gray-50 p-1 rounded-lg border border-gray-100">
          {['Last 30 Days', 'Last Quarter', 'Last Year'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                tab === 'Last 30 Days' 
                ? 'bg-blue-50 text-blue-900 shadow-sm' 
                : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Blue Card */}
        <div className="bg-blue-50/40 border border-blue-100 p-5 rounded-2xl space-y-3">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-white rounded-lg text-blue-900 shadow-sm border border-blue-50">
              <FileText size={20} />
            </div>
            <span className="text-green-600 text-sm font-bold">+8.2%</span>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-custom-charcoal">3,402</h4>
            <p className="text-custom-medium-gray text-xs font-medium">Active Surveys</p>
            <p className="text-gray-400 text-[10px] mt-1 flex items-center">
               <ArrowUpRight size={12} className="mr-1" /> +258 from last period
            </p>
          </div>
        </div>

        {/* Peach Card */}
        <div className="bg-orange-50/40 border border-orange-100 p-5 rounded-2xl space-y-3">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-white rounded-lg text-orange-500 shadow-sm border border-orange-50">
              <MessageSquare size={20} />
            </div>
            <span className="text-green-600 text-sm font-bold">+24.1%</span>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-custom-charcoal">142.5k</h4>
            <p className="text-custom-medium-gray text-xs font-medium">Total Responses</p>
            <p className="text-gray-400 text-[10px] mt-1 flex items-center">
               <ArrowUpRight size={12} className="mr-1" /> +27.6k from last period
            </p>
          </div>
        </div>

        {/* Purple Card */}
        <div className="bg-purple-50/40 border border-purple-100 p-5 rounded-2xl space-y-3">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-white rounded-lg text-purple-600 shadow-sm border border-purple-50">
              <BarChart2 size={20} />
            </div>
            <span className="text-green-600 text-sm font-bold">+12.5%</span>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-custom-charcoal">41.9</h4>
            <p className="text-custom-medium-gray text-xs font-medium">Avg. Responses/Survey</p>
            <p className="text-gray-400 text-[10px] mt-1 flex items-center">
               <ArrowUpRight size={12} className="mr-1" /> +4.6 from last period
            </p>
          </div>
        </div>
      </div>

      {/* Chart Legend */}
      <div className="flex gap-6 text-xs font-medium px-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-900"></span>
          <span className="text-custom-charcoal">Active Surveys</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
          <span className="text-custom-charcoal">Total Responses</span>
        </div>
      </div>

      {/* Fixed Chart Area */}
      <div className="h-[320px] w-full min-h-0 min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1E3A8A" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#1E3A8A" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#9CA3AF', fontSize: 11}} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#9CA3AF', fontSize: 11}} 
            />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
            />
            <Area 
              type="monotone" 
              dataKey="active" 
              stroke="#1E3A8A" 
              strokeWidth={2.5}
              fillOpacity={1} 
              fill="url(#colorActive)" 
            />
            <Area 
              type="monotone" 
              dataKey="responses" 
              stroke="#F97316" 
              strokeWidth={2.5}
              fill="transparent"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UsageOverview;