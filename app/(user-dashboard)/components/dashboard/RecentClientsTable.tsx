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
    <div className="bg-custom-white border border-custom-border rounded-2xl overflow-hidden">
      {/* Table Header */}
      <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold text-custom-charcoal font-dm-sans">Recent Client Accounts</h2>
          <p className="text-custom-dim-gray text-sm font-normal">Manage and monitor client subscriptions</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-bold text-custom-authtext" size={13} />
            <input 
              type="text" 
              placeholder="Search clients..." 
              className="w-full pl-10 pr-4 py-2 text-custom-dark-blue placeholder-custom-medium-gray/60 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-sm text-xs font-normal text-custom-charcoal hover:bg-gray-50 transition-all">
            <Filter size={12}  fill="black" className="text-black"/>
            Filter
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-50 border-y border-gray-200">
              {/* Client align left rahega text-center nahi */}
              <th className="px-6 py-4 text-xs font-normal text-custom-dim-gray tracking-wider text-left">Client</th>
              <th className="px-6 py-4 text-xs font-normal text-custom-dim-gray tracking-wider text-center">Plan</th>
              <th className="px-6 py-4 text-xs font-normal text-custom-dim-gray tracking-wider text-center">Status</th>
              <th className="px-6 py-4 text-xs font-normal text-custom-dim-gray tracking-wider text-center">Surveys</th>
              <th className="px-6 py-4 text-xs font-normal text-custom-dim-gray tracking-wider text-center">Responses</th>
              <th className="px-6 py-4 text-xs font-normal text-custom-dim-gray tracking-wider text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50/50 transition-colors">
                {/* Client Column - Left Aligned */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3.5">
                    <img src={client.avatar} alt="" className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 object-cover" />
                    <div className="flex flex-col justify-center">
                      <div className="text-sm font-medium text-custom-charcoal leading-tight">{client.name}</div>
                      <div className="text-xs font-normal text-custom-dim-gray">{client.company}</div>
                    </div>
                  </div>
                </td>

                {/* Plan Column - Centered */}
                <td className="px-6 py-4 text-center">
                  <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-normal min-w-[90px] ${
                    client.plan === 'Enterprise' ? 'bg-purple-100 text-purple-700 border border-purple-200' :
                    client.plan === 'Professional' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                    'bg-gray-100 text-gray-800 border border-gray-200'
                  }`}>
                    {client.plan}
                  </span>
                </td>

                {/* Status Column - Centered */}
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      client.status === 'Active' ? 'bg-green-500' :
                      client.status === 'Pending' ? 'bg-amber-500' : 'bg-red-500'
                    }`}></span>
                    <span className="text-sm font-normal text-custom-charcoal">{client.status}</span>
                  </div>
                </td>

                {/* Surveys Column - Centered Badge */}
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <span className="bg-blue-50 text-custom-dark-blue w-10 h-10 flex items-center justify-center rounded-lg text-sm font-normal">
                      {client.surveys}
                    </span>
                  </div>
                </td>

                {/* Responses Column - Centered Text */}
                <td className="px-6 py-4 text-center text-sm font-normal text-custom-charcoal">
                  {client.responses.toLocaleString()}
                </td>

                {/* Actions Column - Right Aligned */}
                <td className="px-6 py-4 text-center">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors inline-block">
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
        <span className="text-sm font-normal text-custom-dim-gray">Showing 5 of 1,248 client accounts</span>
        <button className="flex items-center gap-1 text-sm font-normal text-custom-dark-blue hover:underline">
          View All Clients <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default RecentClientsTable;