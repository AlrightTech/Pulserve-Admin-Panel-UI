"use client";
import React from 'react';
import { useParams } from 'next/navigation';

export default function SubscriptionDetailPage() {
  const { id } = useParams();
  
  // Real app mein ye data props ya API se ayega
  const user = {
    name: id === '1' ? "Guy" : id === '2' ? "Bernard" : "Calvin",
    status: id === '3' ? "Trial" : id === '4' ? "Cancelled" : "Active",
    plan: id === '1' ? "Premium" : "Standard"
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-xs text-gray-400">Subscription ID: #A{id}</p>
          <span className={`mt-2 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold ${
            user.status === "Active" ? "bg-green-50 text-green-600" : 
            user.status === "Trial" ? "bg-blue-50 text-blue-600" : "bg-red-50 text-red-600"
          }`}>
            ● {user.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Plan', value: user.plan, sub: 'Monthly' },
          { label: 'Monthly Cost', value: '$99', sub: 'per month' },
          { label: 'Expiry Date', value: '15 Apr 2026', sub: 'in 10 days' },
          { label: 'Active Users', value: '10', sub: 'total users' },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">{item.label}</p>
            <p className="text-lg font-bold text-gray-800">{item.value}</p>
            <p className="text-[10px] text-gray-400">{item.sub}</p>
          </div>
        ))}
      </div>
      
      {/* Analytics aur Table components yahan add karein */}
    </div>
  );
}