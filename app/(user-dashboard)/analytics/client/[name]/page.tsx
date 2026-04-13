"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MousePointer2, Users, BarChart3 , TrendingUp } from 'lucide-react';


// Chart Data matching the visual trend in the image
const data = [
  { name: 'Sep', value: 520 },
  { name: 'Oct', value: 610 },
  { name: 'Nov', value: 680 },
  { name: 'Dec', value: 750 },
  { name: 'Jan', value: 830 },
  { name: 'Feb', value: 890 },
];

export default function ClientAnalyticsDetail() {
  const { name } = useParams();
  const formattedName = typeof name === 'string' 
    ? name.charAt(0).toUpperCase() + name.slice(1) 
    : "Darlene";

  return (
    <div className="space-y-6 pb-10 font-sans">
      {/* Header Section */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-custom-charcoal">{formattedName}</h1>
        <p className="text-sm text-custom-dim-gray font-medium">Detailed client information and usage metrics</p>
      </div>

      {/* User Overview Section */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-xl font-semibold text-custom-charcoal mb-8">User Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
          <OverviewItem label="Primary Contact" value={formattedName} />
          <OverviewItem label="Contact Email" value="john.smith@acme.com" />
          <OverviewItem label="Subscription Plan" value="Enterprise" />
          <OverviewItem label="Subscription Expiry" value="January 15, 2025" />
          
          <div className="space-y-2">
            <p className="text-xs font-normal text-custom-dim-gray">Account Status</p>
            <span className="inline-flex px-3 py-1 bg-[#E8F5E9] text-green-600 rounded-full text-[10px] font-bold">
              Active
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-normal text-custom-dim-gray">Subscription Status</p>
            <span className="inline-flex px-3 py-1 bg-[#E8F5E9] text-green-600 rounded-full text-[10px] font-bold">
              Active
            </span>
          </div>
        </div>
      </div>

      {/* Usage Summary Section */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-10">
        <h3 className="text-xl font-semibold text-custom-charcoal">Usage Summary</h3>
        
{/* Stats Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Active Surveys */}
          <div className="bg-[#EFF6FF] px-4 py-4 rounded-xl">
            <div className="flex items-center gap-2 text-[#3B82F6] mb-3">
              <TrendingUp  size={14} />
              <span className="text-xs font-normal text-custom-dim-gray">
                Active Surveys
              </span>
            </div>
            <h2 className="text-2xl font-sans font-bold text-custom-charcoal">5</h2>
          </div>

          {/* Total Responses */}
          <div className="bg-[#F0FDF4] px-4 py-4 rounded-xl">
            <div className="flex items-center gap-2 text-[#22C55E] mb-3">
              <TrendingUp size={14} />
              <span className="text-xs font-normal text-custom-dim-gray">
                Total Responses
              </span>
            </div>
            <h2 className="text-2xl font-sans font-bold text-custom-charcoal">1,234</h2>
          </div>

          {/* Avg per Survey */}
          <div className="bg-[#FAF5FF] px-4 py-4 rounded-xl">
            <div className="flex items-center gap-2 text-[#A855F7] mb-3">
              <TrendingUp size={14} />
              <span className="text-xs font-normal text-custom-dim-gray">
                Avg. per Survey
              </span>
            </div>
            <h2 className="text-2xl font-sans font-bold text-custom-charcoal">247</h2>
          </div>
        </div>

        {/* Usage Trend Chart */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold text-custom-charcoal tracking-tight">Usage Trend (Last 6 Months)</h4>
          <div className="h-[350px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#9CA3AF' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#9CA3AF' }} 
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#1E293B" 
                  strokeWidth={3} 
                  dot={{ r: 6, fill: '#1E293B', strokeWidth: 2, stroke: '#FFF' }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Components matching image style
function OverviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-normal text-custom-dim-gray">{label}</p>
      <p className="text-sm text-custom-charcoal font-medium">{value}</p>
    </div>
  );
}

function MetricCard({ label, value, bgColor, icon }: any) {
  return (
    <div className={`${bgColor} p-6 rounded-2xl border border-white shadow-sm space-y-3`}>
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-tight">{label}</p>
      </div>
      <p className="text-4xl font-bold text-custom-charcoal">{value}</p>
    </div>
  );
}