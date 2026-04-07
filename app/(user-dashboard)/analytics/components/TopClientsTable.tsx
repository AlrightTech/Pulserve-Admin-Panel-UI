"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { MoreVertical } from 'lucide-react';

const clients = [
  { name: "Darlene", surveys: 42, responses: 1340, plan: "Premium", lastActive: "2 hours ago" },
  { name: "Arlene", surveys: 28, responses: 820, plan: "Standard", lastActive: "5 hours ago" },
  { name: "Victoria", surveys: 35, responses: 950, plan: "Premium", lastActive: "1 day ago" },
];

export default function TopClientsTable() {
  const router = useRouter();

  return (
    <table className="w-full text-left mt-4">
      <thead className="bg-gray-50/50 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
        <tr>
          <th className="px-6 py-4">Client Name</th>
          <th className="px-6 py-4 text-center">Active Surveys</th>
          <th className="px-6 py-4 text-center">Responses</th>
          <th className="px-6 py-4 text-center">Subscription Plan</th>
          <th className="px-6 py-4 text-center">Last Active</th>
          <th className="px-6 py-4 text-center">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-50">
        {clients.map((client, i) => (
          <tr 
            key={i} 
            onClick={() => router.push(`/analytics/client/${client.name.toLowerCase()}`)}
            className="hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <td className="px-6 py-4 text-sm font-bold text-gray-800">{client.name}</td>
            <td className="px-6 py-4 text-sm text-center text-gray-500">{client.surveys}</td>
            <td className="px-6 py-4 text-sm text-center text-gray-500">{client.responses}</td>
            <td className="px-6 py-4 text-center">
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                client.plan === "Premium" ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"
              }`}>
                {client.plan}
              </span>
            </td>
            <td className="px-6 py-4 text-sm text-center text-gray-400">{client.lastActive}</td>
            <td className="px-6 py-4 text-center">
              <button className="p-1 hover:bg-gray-100 rounded text-gray-400"><MoreVertical size={14}/></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}