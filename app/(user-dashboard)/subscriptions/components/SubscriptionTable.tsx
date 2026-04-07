"use client";
import React from 'react';
import { MoreVertical } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SubscriptionTable({ data, onEdit }: any) {
  const router = useRouter();

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-50 text-green-600';
      case 'Trial': return 'bg-blue-50 text-blue-600';
      case 'Cancelled': return 'bg-red-50 text-red-600';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50/50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            <th className="px-6 py-4">Client Name</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Plan</th>
            <th className="px-6 py-4">Billing Cycle</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Expiry Date</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {data.map((row: any) => (
            <tr 
              key={row.id} 
              onClick={() => router.push(`/subscriptions/${row.id}`)}
              className="hover:bg-gray-50/80 transition-colors cursor-pointer group"
            >
              <td className="px-6 py-4 font-bold text-gray-800 text-sm">{row.name}</td>
              <td className="px-6 py-4 text-gray-500 text-sm">{row.email}</td>
              <td className="px-6 py-4 text-gray-600 text-sm">{row.plan}</td>
              <td className="px-6 py-4 text-gray-600 text-sm">{row.cycle}</td>
              <td className="px-6 py-4">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${getStatusStyle(row.status)}`}>
                  {row.status}
                </span>
              </td>
              <td className="px-6 py-4 text-gray-600 text-sm">{row.expiry}</td>
              <td className="px-6 py-4 text-center">
                <button 
                  onClick={(e) => { e.stopPropagation(); onEdit(row); }}
                  className="p-1 hover:bg-gray-200 rounded-md transition-colors"
                >
                  <MoreVertical size={16} className="text-gray-400" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}