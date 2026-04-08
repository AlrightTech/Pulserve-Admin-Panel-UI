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
    <div className="bg-custom-white rounded-lg shadow-sm overflow-hidden min-h-[400px]">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-custom-charcoal font-sans">All Clients</h2>
      </div>
      <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <table className="w-full text-left border-collapse border-t border-custom-border">
          <thead>
            <tr className="bg-gray-50 text-custom-charcoal text-sm font-normal">
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
                onClick={() => handleRowClick(client.email)} 
                className="hover:bg-gray-50 cursor-pointer transition-colors text-sm text-custom-dim-gray"
              >
                <td className="px-6 py-4 font-normal ">{client.name}</td>
                <td className="px-6 py-4 text-gray-500">{client.email}</td>
                <td className="px-6 py-4">{client.plan}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-lg text-xs font-normal ${
                    client.subStatus === 'Active' ? 'bg-green-50 text-custom-green' : 
                    client.subStatus === 'Suspended' ? 'bg-orange-100 text-orange-700' : 
                    'bg-red-50 text-red-600'
                  }`}>
                    {client.subStatus}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">{client.activeSurveys}</td>
                <td className="px-6 py-4 text-center">{client.totalResponses}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-2 py-1 rounded-lg text-xs font-normal ${
                    client.accountStatus === 'Active' ? 'bg-green-100 text-custom-green' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {client.accountStatus}
                  </span>
                </td>
                <td className="px-6 py-4 text-right relative">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); 
                      setActiveMenu(activeMenu === index ? null : index);
                    }}
                    className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
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
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-custom-charcoal hover:bg-gray-50 shadow-md cursor-pointer transition-colors"
                        >
                          <Edit2 size={11} />
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