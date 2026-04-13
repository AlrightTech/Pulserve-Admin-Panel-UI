"use client";
import React, { useState, useMemo } from 'react';
import { Search, Filter, MoreVertical, ArrowRight } from 'lucide-react';

const clientsData = [
  { id: 1, name: 'Sarah Mitchell', company: 'TechCorp Inc. • #TC-8821', plan: 'Enterprise', status: 'Active', surveys: 12, responses: '8,420', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Michael Chen', company: 'Global Solutions • #GS-1092', plan: 'Professional', status: 'Active', surveys: 5, responses: '2,105', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Nina Patel', company: 'NextMove Ltd. • #NM-3341', plan: 'Starter', status: 'Pending', surveys: 1, responses: '45', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'James Wilson', company: 'Innovate Partners • #IP-5567', plan: 'Professional', status: 'Active', surveys: 8, responses: '4,230', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, name: 'David Kim', company: 'DataWorks Co. • #DW-7789', plan: 'Enterprise', status: 'Suspended', surveys: 0, responses: '0', avatar: 'https://i.pravatar.cc/150?u=5' },
];

const RecentClientsTable = () => {
  // --- States for functionality ---
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPlan, setFilterPlan] = useState("All"); // Default filter

  // --- Search & Filter Logic ---
  const filteredClients = useMemo(() => {
    return clientsData.filter((client) => {
      const matchesSearch = 
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.company.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = filterPlan === "All" || client.plan === filterPlan;

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterPlan]);

  // Filter change handler
  const toggleFilter = () => {
    const plans = ["All", "Enterprise", "Professional", "Starter"];
    const currentIndex = plans.indexOf(filterPlan);
    const nextIndex = (currentIndex + 1) % plans.length;
    setFilterPlan(plans[nextIndex]);
  };

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-custom-dark-blue placeholder-custom-medium-gray/60 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>
          <button 
            onClick={toggleFilter}
            className={`flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-sm text-xs font-normal transition-all ${filterPlan !== "All" ? "bg-blue-50 border-blue-200 text-blue-600" : "text-custom-charcoal hover:bg-gray-50"}`}
          >
            <Filter size={12} fill={filterPlan !== "All" ? "#2563eb" : "black"} className={filterPlan !== "All" ? "text-blue-600" : "text-black"}/>
            {filterPlan === "All" ? "Filter" : filterPlan}
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-50 border-y border-gray-200">
              <th className="px-6 py-4 text-xs font-normal text-custom-dim-gray tracking-wider text-left">Client</th>
              <th className="px-6 py-4 text-xs font-normal text-custom-dim-gray tracking-wider text-center">Plan</th>
              <th className="px-6 py-4 text-xs font-normal text-custom-dim-gray tracking-wider text-center">Status</th>
              <th className="px-6 py-4 text-xs font-normal text-custom-dim-gray tracking-wider text-center">Surveys</th>
              <th className="px-6 py-4 text-xs font-normal text-custom-dim-gray tracking-wider text-center">Responses</th>
              <th className="px-6 py-4 text-xs font-normal text-custom-dim-gray tracking-wider text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredClients.length > 0 ? (
              filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3.5">
                      <img src={client.avatar} alt="" className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 object-cover" />
                      <div className="flex flex-col justify-center">
                        <div className="text-sm font-medium text-custom-charcoal leading-tight">{client.name}</div>
                        <div className="text-xs font-normal text-custom-dim-gray">{client.company}</div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-normal min-w-[90px] ${
                      client.plan === 'Enterprise' ? 'bg-purple-100 text-purple-700 border border-purple-200' :
                      client.plan === 'Professional' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                      'bg-gray-100 text-gray-800 border border-gray-200'
                    }`}>
                      {client.plan}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        client.status === 'Active' ? 'bg-green-500' :
                        client.status === 'Pending' ? 'bg-amber-500' : 'bg-red-500'
                      }`}></span>
                      <span className="text-sm font-normal text-custom-charcoal">{client.status}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <span className="bg-blue-50 text-custom-dark-blue w-10 h-10 flex items-center justify-center rounded-lg text-sm font-normal">
                        {client.surveys}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-center text-sm font-normal text-custom-charcoal">
                    {client.responses.toLocaleString()}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors inline-block">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-custom-dim-gray text-sm">
                  No clients found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="p-4 bg-gray-50/30 border-t border-gray-100 flex justify-between items-center">
        <span className="text-sm font-normal text-custom-dim-gray">
          Showing {filteredClients.length} of {clientsData.length} client accounts
        </span>
        <button className="flex items-center gap-1 text-sm font-normal text-custom-dark-blue hover:underline cursor-pointer">
          View All Clients <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default RecentClientsTable;