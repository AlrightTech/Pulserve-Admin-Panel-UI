"use client";
import React, { useState } from 'react';
import { MoreVertical, Edit2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface UserTableProps {
  clients: any[];
  onEdit: (client: any) => void;
}

const UserTable = ({ clients, onEdit }: UserTableProps) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const router = useRouter();

  const handleRowClick = (clientId: string) => {
    // Row par click karne se details page par navigate karega
    router.push(`/user-management/${clientId}`); 
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-bold text-gray-800 font-sans">All Clients</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-400 text-[11px] uppercase font-bold tracking-wider">
              <th className="px-6 py-4">Client Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Subscription Plan</th>
              <th className="px-6 py-4">Subscription Status</th>
              <th className="px-6 py-4 text-center text-nowrap">Active Surveys</th>
              <th className="px-6 py-4 text-center text-nowrap">Total Responses</th>
              <th className="px-6 py-4 text-center">Account Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {clients.map((client, index) => (
              <tr 
                key={index} 
                onClick={() => handleRowClick(client.email)} // Row click logic
                className="hover:bg-gray-50 cursor-pointer transition-colors text-sm text-gray-700"
              >
                <td className="px-6 py-4 font-semibold">{client.name}</td>
                <td className="px-6 py-4 text-gray-500">{client.email}</td>
                <td className="px-6 py-4">{client.plan}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                    client.subStatus === 'Active' ? 'bg-green-50 text-green-600' : 
                    client.subStatus === 'Suspended' ? 'bg-orange-50 text-orange-600' : 
                    'bg-red-50 text-red-600'
                  }`}>
                    {client.subStatus}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">{client.activeSurveys}</td>
                <td className="px-6 py-4 text-center">{client.totalResponses}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                    client.accountStatus === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {client.accountStatus}
                  </span>
                </td>
                <td className="px-6 py-4 text-right relative">
                  {/* stopPropagation yahan zaroori hai taake menu kholne par row click trigger na ho */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); 
                      setActiveMenu(activeMenu === index ? null : index);
                    }}
                    className="text-gray-400 hover:text-gray-600 p-1"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {/* Dropdown Menu */}
                  {activeMenu === index && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenu(null);
                        }}
                      ></div>
                      <div className="absolute right-6 top-10 w-32 bg-white border border-gray-100 rounded-lg shadow-xl z-20 overflow-hidden">
                        <button 
                          onClick={(e) => { 
                            e.stopPropagation();
                            onEdit(client); 
                            setActiveMenu(null); 
                          }}
                          className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                          <Edit2 size={14} />
                          <span>Edit</span>
                        </button>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;