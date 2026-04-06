"use client";
import React from 'react';
import Image from 'next/image';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedPlan: string;
  setSelectedPlan: (value: string) => void;
  selectedStatus: string;
  setSelectedStatus: (value: string) => void;
}

const FilterBar = ({ 
  searchQuery, setSearchQuery, 
  selectedPlan, setSelectedPlan, 
  selectedStatus, setSelectedStatus 
}: FilterBarProps) => {

  return (
    <div className="bg-white p-6 rounded-xl border border-[#F3F4F6] shadow-sm mb-8">
      <h2 className="text-lg font-bold text-custom-charcoal mb-4">Search & Filters</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Image src="/images/svg-icons/search-icon.svg" width={16} height={16} alt="search" />
          </div>
          <input
            type="text"
            placeholder="Company name or email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-custom-coral"
          />
        </div>

        {/* Subscription Plan Filter */}
        <select 
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
          className="w-full px-4 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-sm text-gray-600 focus:outline-none cursor-pointer"
        >
          <option value="All Plans">All Plans</option>
          <option value="Basic">Basic</option>
          <option value="Professional">Professional</option>
          <option value="Enterprise">Enterprise</option>
        </select>

        {/* Subscription Status Filter */}
        <select 
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="w-full px-4 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-sm text-gray-600 focus:outline-none cursor-pointer"
        >
          <option value="All Statuses">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Suspended">Suspended</option>
          <option value="Expired">Expired</option>
        </select>

        {/* Baki placeholders (Static for now) */}
        <select className="w-full px-4 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-sm text-gray-600 focus:outline-none cursor-pointer">
          <option>All Accounts</option>
        </select>
        
        <select className="w-full px-4 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-sm text-gray-600 focus:outline-none cursor-pointer">
          <option>Created Date</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;