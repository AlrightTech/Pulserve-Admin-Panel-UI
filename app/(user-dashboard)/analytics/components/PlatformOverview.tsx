"use client";
import React from 'react';
import { Users, FileText, MessageSquare, CreditCard } from 'lucide-react';

const stats = [
  { label: 'Total Clients', count: '120', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'Active Surveys', count: '340', icon: FileText, color: 'text-orange-500', bg: 'bg-orange-50' },
  { label: 'Total Responses', count: '8,450', icon: MessageSquare, color: 'text-green-500', bg: 'bg-green-50' },
  { label: 'Active Subscriptions', count: '95', icon: CreditCard, color: 'text-pink-500', bg: 'bg-pink-50' },
];

export default function PlatformOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-start">
          <div className="space-y-2">
            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-800">{stat.count}</p>
            <p className="text-[10px] text-gray-400">Registered client accounts</p>
          </div>
          <div className={`${stat.bg} ${stat.color} p-2 rounded-lg`}>
            <stat.icon size={20} />
          </div>
        </div>
      ))}
    </div>
  );
}