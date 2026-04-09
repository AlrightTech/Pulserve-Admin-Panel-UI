"use client";
import React, { useState, useEffect, useRef } from 'react';
import { MoreVertical, Edit2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SubscriptionTable({ data, onEdit }: any) {
  const router = useRouter();
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Bahar click karne par menu band karne ke liye logic
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-50 text-green-700';
      case 'Trial': return 'bg-blue-50 text-blue-600';
      case 'Cancelled': return 'bg-red-50 text-red-600';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="bg-custom-white rounded-xl overflow-hidden shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-custom-border text-sm font-semibold text-custom-charcoal">
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
              <td className="px-6 py-4 font-semibold text-custom-charcoal text-sm">{row.name}</td>
              <td className="px-6 py-4 font-normal text-custom-dim-gray text-sm">{row.email}</td>
              <td className="px-6 py-4 text-gray-600 text-sm">{row.plan}</td>
              <td className="px-6 py-4 text-gray-600 text-sm">{row.cycle}</td>
              <td className="px-6 py-4">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusStyle(row.status)}`}>
                  {row.status}
                </span>
              </td>
              <td className="px-6 py-4 text-gray-600 text-sm">{row.expiry}</td>
              
              <td className="px-6 py-4 text-center relative">
                <button 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    setOpenMenuId(openMenuId === row.id ? null : row.id); 
                  }}
                  className="p-1 hover:bg-gray-200 rounded-md transition-colors"
                >
                  <MoreVertical size={16} className="text-gray-400" />
                </button>

                {/* Dropdown Menu */}
                {openMenuId === row.id && (
                  <div 
                    ref={menuRef}
                    className="absolute right-10 top-1/2 -translate-y-1/2 z-50 bg-white border border-gray-100 shadow-lg rounded-lg py-1 w-28"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onEdit(row);
                        setOpenMenuId(null);
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <Edit2 size={14} className="text-gray-500 cursor-pointer" />
                      Edit
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}