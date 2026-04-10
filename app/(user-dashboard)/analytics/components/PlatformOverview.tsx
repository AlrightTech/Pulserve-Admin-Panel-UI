"use client";
import React from 'react';
import { Users, FileText, MessageSquare, CreditCard } from 'lucide-react';

const stats = [
  { label: 'Total Clients', count: '120', icon: Users, color: 'text-blue-700', bg: 'bg-blue-50' },
  { label: 'Active Surveys', count: '340', icon: FileText, color: 'text-orange-500', bg: 'bg-orange-50' },
  { label: 'Total Responses', count: '8,450', icon: MessageSquare, color: 'text-[#2E7D32]', bg: 'bg-[#E8F5E9]' },
  { label: 'Active Subscriptions', count: '95', icon: CreditCard, color: 'text-pink-700', bg: 'bg-pink-50' },
];

export default function PlatformOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-custom-white p-6 rounded-xl border border-gray-200 flex flex-col space-y-4">
          
          <div className="flex justify-between items-center w-full mb-2">
            <p className="text-xs uppercase text-custom-authtext">{stat.label}</p>
            <div className={`${stat.bg} ${stat.color} p-2 rounded-lg`}>
              <stat.icon size={18} />
            </div>
          </div>

          {/* Bottom Section: Count and Description stacked */}
          <div className="space-y-2">
            <p className="text-3xl font-bold text-custom-dark-blue">{stat.count}</p>
            <p className="text-sm text-custom-authtext">Registered client accounts</p>
          </div>

        </div>
      ))}
    </div>
  );
}