import React from 'react';
import { Search, Filter, MoreVertical, ArrowRight } from 'lucide-react';

const clients = [
  { id: 1, name: 'Sarah Mitchell', company: 'TechCorp Inc. • #TC-8821', plan: 'Enterprise', status: 'Active', surveys: 12, responses: '8,420', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Michael Chen', company: 'Global Solutions • #GS-1092', plan: 'Professional', status: 'Active', surveys: 5, responses: '2,105', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Nina Patel', company: 'NextMove Ltd. • #NM-3341', plan: 'Starter', status: 'Pending', surveys: 1, responses: '45', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'James Wilson', company: 'Innovate Partners • #IP-5567', plan: 'Professional', status: 'Active', surveys: 8, responses: '4,230', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, name: 'David Kim', company: 'DataWorks Co. • #DW-7789', plan: 'Enterprise', status: 'Suspended', surveys: 0, responses: '0', avatar: 'https://i.pravatar.cc/150?u=5' },
];

const RecentClientsTable = () => {
  return (
    <div className="bg-white border border-custom-border rounded-2xl overflow-hidden shadow-sm">
      {/* Table Header */}
      <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-custom-charcoal font-dm-sans">Recent Client Accounts</h2>
          <p className="text-custom-medium-gray text-sm">Manage and monitor client subscriptions</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search clients..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all">
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-y border-gray-100">
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Plan</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">Surveys</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">Responses</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={client.avatar} alt="" className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200" />
                    <div>
                      <div className="text-sm font-bold text-custom-charcoal">{client.name}</div>
                      <div className="text-[11px] text-gray-400">{client.company}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                    client.plan === 'Enterprise' ? 'bg-purple-50 text-purple-600 border border-purple-100' :
                    client.plan === 'Professional' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                    'bg-gray-50 text-gray-600 border border-gray-100'
                  }`}>
                    {client.plan}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      client.status === 'Active' ? 'bg-green-500' :
                      client.status === 'Pending' ? 'bg-amber-500' : 'bg-red-500'
                    }`}></span>
                    <span className="text-sm font-medium text-gray-600">{client.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-sm font-bold">
                    {client.surveys}
                  </span>
                </td>
                <td className="px-6 py-4 text-center text-sm font-medium text-gray-600">
                  {client.responses}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreVertical size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="p-4 bg-gray-50/30 border-t border-gray-100 flex justify-between items-center">
        <span className="text-xs font-medium text-gray-500">Showing 5 of 1,248 client accounts</span>
        <button className="flex items-center gap-1 text-xs font-bold text-blue-900 hover:underline">
          View All Clients <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default RecentClientsTable;