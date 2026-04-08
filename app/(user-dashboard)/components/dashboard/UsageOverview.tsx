"use client";
import Image from "next/image";
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
import { FileText, MessageSquare, BarChart2, ArrowUp } from 'lucide-react';

// Mock Data
// const data = [
//   { name: 'Jan 1', active: 2600, responses: 2500 },
//   { name: 'Jan 8', active: 2800, responses: 2700 },
//   { name: 'Jan 15', active: 3000, responses: 2900 },
//   { name: 'Jan 22', active: 3200, responses: 3100 },
//   { name: 'Jan 29', active: 3300, responses: 3200 },
//   { name: 'Feb 5', active: 3400, responses: 3350 },
//   { name: 'Feb 12', active: 3450, responses: 3400 },
//   { name: 'Feb 19', active: 3500, responses: 3450 },
// ];
const data = [
  { name: 'Jan', active: 2600, responses: 2500 },
  { name: 'Feb', active: 2800, responses: 2700 },
  { name: 'Mar', active: 3000, responses: 2900 },
  { name: 'Apr', active: 3200, responses: 3100 },
  { name: 'May', active: 3300, responses: 3200 },
  { name: 'Jun', active: 3400, responses: 3350 },
  { name: 'Jul', active: 3450, responses: 3400 },
  { name: 'Aug', active: 3500, responses: 3450 },
  { name: 'Sep', active: 3550, responses: 3500 },
  { name: 'Oct', active: 3600, responses: 3550 },
  { name: 'Nov', active: 3650, responses: 3600 },
  { name: 'Dec', active: 3700, responses: 3650 },
];

const UsageOverview = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-[400px] w-full bg-white border border-custom-border rounded-2xl animate-pulse" />;
  }

  return (
    <div className="bg-custom-white border border-custom-border rounded-2xl p-6 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold text-custom-charcoal font-dm-sans">Platform Usage Overview</h2>
          <p className="text-custom-dim-gray text-sm font-normal">Monitor survey creation and response collection trends</p>
        </div>
        
        <div className="flex lg:gap-4 gap-2">
          {['Last 30 Days', 'Last Quarter', 'Last Year'].map((tab) => (
            <button
              key={tab}
              className={`px-4.5 py-2 text-sm font-normal rounded-full transition-all ${
                tab === 'Last 30 Days' 
                ? 'bg-blue-50 text-black-100' 
                : 'text-custom-dim-gray hover:text-custom-medium-gray'
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
        <div className="border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 rounded-xl space-y-3">
          <div className="flex justify-between items-center">
            <div className="px-2 py-4 bg-custom-white rounded-lg shadow border border-gray-200">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.25 0C1.00898 0 0 1.00898 0 2.25V13.5C0 14.741 1.00898 15.75 2.25 15.75H13.5C14.741 15.75 15.75 14.741 15.75 13.5V2.25C15.75 1.00898 14.741 0 13.5 0H2.25ZM4.5 6.75C5.12227 6.75 5.625 7.25273 5.625 7.875V11.25C5.625 11.8723 5.12227 12.375 4.5 12.375C3.87773 12.375 3.375 11.8723 3.375 11.25V7.875C3.375 7.25273 3.87773 6.75 4.5 6.75ZM6.75 4.5C6.75 3.87773 7.25273 3.375 7.875 3.375C8.49727 3.375 9 3.87773 9 4.5V11.25C9 11.8723 8.49727 12.375 7.875 12.375C7.25273 12.375 6.75 11.8723 6.75 11.25V4.5ZM11.25 9C11.8723 9 12.375 9.50273 12.375 10.125V11.25C12.375 11.8723 11.8723 12.375 11.25 12.375C10.6277 12.375 10.125 11.8723 10.125 11.25V10.125C10.125 9.50273 10.6277 9 11.25 9Z" fill="#07233B"/>
              </svg>
            </div>
            <span className="text-custom-green text-sm font-medium">+8.2%</span>
          </div>
          <div>
            <h4 className="text-[25px] font-bold text-custom-charcoal leading-tight">3,402</h4>
            <p className="text-custom-dim-gray text-sm font-medium">Active Surveys</p>
            <p className="text-custom-dim-gray text-sm font-medium mt-1 flex items-center">
               <ArrowUp size={14} className="mr-0" /> 258 from last period
            </p>
          </div>
        </div>

        {/* Peach Card */}
        <div className="border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50 p-5 rounded-xl space-y-3">
          <div className="flex justify-between items-center">
            <div className="px-2.5 py-4 bg-custom-white rounded-lg text-orange-500 shadow border border-orange-50">
              {/* <MessageSquare size={20} /> */}
              <svg width="19" height="15" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.31252 12.375C11.352 12.375 14.625 9.60469 14.625 6.1875C14.625 2.77031 11.352 0 7.31252 0C3.27307 0 1.85547e-05 2.77031 1.85547e-05 6.1875C1.85547e-05 7.54453 0.516815 8.79961 1.39221 9.82266C1.26916 10.1531 1.08635 10.4449 0.892987 10.691C0.724237 10.909 0.551972 11.0777 0.425409 11.1937C0.362128 11.25 0.309394 11.2957 0.274237 11.3238C0.256659 11.3379 0.242597 11.3484 0.235565 11.352L0.228534 11.359C0.0351748 11.5031 -0.0492002 11.7562 0.0281436 11.9848C0.105487 12.2133 0.31994 12.375 0.562519 12.375C1.32892 12.375 2.10236 12.1781 2.74572 11.9355C3.06916 11.8125 3.3715 11.6754 3.63517 11.5348C4.71447 12.0691 5.96955 12.375 7.31252 12.375ZM15.75 6.1875C15.75 10.1355 12.266 13.1098 8.13869 13.4648C8.99299 16.0805 11.8266 18 15.1875 18C16.5305 18 17.7856 17.6941 18.8684 17.1598C19.132 17.3004 19.4309 17.4375 19.7543 17.5605C20.3977 17.8031 21.1711 18 21.9375 18C22.1801 18 22.3981 17.8418 22.4719 17.6098C22.5457 17.3777 22.4649 17.1246 22.268 16.9805L22.261 16.9734C22.2539 16.9664 22.2399 16.9594 22.2223 16.9453C22.1871 16.9172 22.1344 16.875 22.0711 16.8152C21.9445 16.6992 21.7723 16.5305 21.6035 16.3125C21.4102 16.0664 21.2274 15.7711 21.1043 15.4441C21.9797 14.4246 22.4965 13.1695 22.4965 11.809C22.4965 8.54648 19.5117 5.87109 15.7254 5.63906C15.7395 5.81836 15.7465 6.00117 15.7465 6.18398L15.75 6.1875Z" fill="#F3704B"/>
              </svg>
            </div>
            <span className="text-custom-green text-sm font-normal">+24.1%</span>
          </div>
          <div>
            <h4 className="text-[25px] font-bold text-custom-charcoal leading-tight">142.5k</h4>
            <p className="text-custom-dim-gray text-sm font-medium">Total Responses</p>
            <p className="text-custom-dim-gray text-sm font-medium mt-1 flex items-center">
               <ArrowUp size={14} className="mr-0" /> 27.6k from last period
            </p>
          </div>
        </div>

        {/* Purple Card */}
        <div className="border border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50 p-5 rounded-xl space-y-3">
          <div className="flex justify-between items-center">
            <div className="px-2 py-4 bg-custom-white rounded-lg text-purple-600 shadow border border-purple-50">
              {/* <BarChart2 size={20} /> */}
              <svg width="16" height="14" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.25 1.125C2.25 0.502734 1.74727 0 1.125 0C0.502734 0 0 0.502734 0 1.125V12.9375C0 14.4914 1.25859 15.75 2.8125 15.75H16.875C17.4973 15.75 18 15.2473 18 14.625C18 14.0027 17.4973 13.5 16.875 13.5H2.8125C2.50312 13.5 2.25 13.2469 2.25 12.9375V1.125ZM16.5445 4.16953C16.984 3.73008 16.984 3.01641 16.5445 2.57695C16.1051 2.1375 15.3914 2.1375 14.952 2.57695L11.25 6.28242L9.23203 4.26445C8.79258 3.825 8.07891 3.825 7.63945 4.26445L3.70195 8.20195C3.2625 8.64141 3.2625 9.35508 3.70195 9.79453C4.14141 10.234 4.85508 10.234 5.29453 9.79453L8.4375 6.65508L10.4555 8.67305C10.8949 9.1125 11.6086 9.1125 12.048 8.67305L16.548 4.17305L16.5445 4.16953Z" fill="#9333EA"/>
              </svg>
            </div>
            <span className="text-custom-green text-sm font-normal">+12.5%</span>
          </div>
          <div>
            <h4 className="text-[25px] font-bold text-custom-charcoal leading-tight">41.9</h4>
            <p className="text-custom-dim-gray text-sm font-medium">Avg. Responses/Survey</p>
            <p className="text-custom-dim-gray text-sm font-medium mt-1 flex items-center">
               <ArrowUp size={14} className="mr-0" /> 4.6 from last period
            </p>
          </div>
        </div>
      </div>

      {/* Chart Legend */}
      <div className="flex gap-6 text-xs font-medium px-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-custom-dark-blue"></span>
          <span className="font-normal text-sm text-custom-charcoal">Active Surveys</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-custom-coral"></span>
          <span className="font-normal text-sm text-custom-charcoal">Total Responses</span>
        </div>
      </div>

      {/* Horizontal Scroll Wrapper - Tailwind se scroll control */}
      <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
        {/* min-w-[700px]: Mobile par chart ko squeeze hone se bachayega.
            md:min-w-full: Desktop par scroll hatakar full width kar dega.
        */}
        <div className="h-[320px] min-w-[750px] md:min-w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart 
              data={data} 
              margin={{ top: 10, right: 30, left: -20, bottom: 0 }}
            >
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
                // Force all 12 months to show
                interval={0} 
                padding={{ left: 20, right: 20 }}
              />
              
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#9CA3AF', fontSize: 11}} 
              />
              
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: 'none', 
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' 
                }}
              />
              
              <Area 
                type="monotone" 
                dataKey="active" 
                stroke="#1E3A8A" 
                strokeWidth={2.5}
                fillOpacity={1} 
                fill="url(#colorActive)" 
                animationDuration={1500}
              />
              
              <Area 
                type="monotone" 
                dataKey="responses" 
                stroke="#F97316" 
                strokeWidth={2.5}
                fill="transparent"
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UsageOverview;