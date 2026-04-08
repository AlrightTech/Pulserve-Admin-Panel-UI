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
    <div className="bg-custom-white p-6 rounded-lg shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),_0px_1px_3px_0px_rgba(0,0,0,0.1)]">
      <h2 className="text-xl font-semibold text-custom-charcoal mb-4">Search & Filters</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
            <Image src="/images/svg-icons/search-icon.svg" width={14} height={14} alt="search" />
          </div>
          <input
            type="text"
            placeholder="Company name or email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-0 py-3 bg-custom-white border border-custom-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-custom-coral"
          />
        </div>

        {/* Subscription Plan Filter */}
        <select 
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
          className="w-full pl-4 pr-10 py-3 bg-custom-white border border-custom-border rounded-lg text-sm text-custom-black focus:outline-none cursor-pointer appearance-none bg-no-repeat bg-[right_1rem_center]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
            backgroundSize: '12px',
          }}
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
          className="w-full pl-4 pr-10 py-3 bg-custom-white border border-custom-border rounded-lg text-sm text-custom-black focus:outline-none cursor-pointer appearance-none bg-no-repeat bg-[right_1rem_center]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
            backgroundSize: '12px',
          }}        >
          <option value="All Statuses">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Suspended">Suspended</option>
          <option value="Expired">Expired</option>
        </select>

        <select 
        className="w-full pl-4 py-3 pr-10 bg-custom-white border border-custom-border rounded-lg text-sm text-custom-black focus:outline-none cursor-pointer appearance-none bg-no-repeat bg-[right_1rem_center]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
          backgroundSize: '12px',
        }}
        >
          <option>All Accounts</option>
        </select>
        
        <select 
        className="w-full pl-4 py-3 pr-10 bg-custom-white border border-custom-border rounded-lg text-sm text-custom-black focus:outline-none cursor-pointer appearance-none bg-no-repeat bg-[right_1rem_center]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
          backgroundSize: '12px',
        }}
        >
          <option>Created Date</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;