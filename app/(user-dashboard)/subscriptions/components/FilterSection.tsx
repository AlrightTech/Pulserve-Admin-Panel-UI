"use client";
import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function FilterSection({ onSearch, onPlanChange, onStatusChange, onBillingChange }: any) {
  return (
    // md:flex-row desktop ke liye aur flex-col mobile ke liye, gap-4 spacing handle karega
    <div className="flex flex-col md:flex-row items-center gap-4 w-full font-sans">
      
      {/* Search Input Container */}
      {/* Mobile par w-full aur desktop par max-w-lg */}
      <div className="relative w-full md:flex-[2] md:max-w-lg">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Image src="/images/svg-icons/search-icon.svg" alt="search" width={17} height={17} className="" />
        </div>
        <input 
          type="text" 
          onChange={(e) => onSearch(e.target.value)} 
          placeholder="Search by company name or email" 
          className="w-full pl-12 pr-6 py-3.5 border border-custom-border rounded-lg text-sm placeholder:text-[#717182] focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"
        />
      </div>

      {/* Selects Container */}
      {/* flex-wrap add kiya hai taake agar screen bhot choti ho to selects niche shift ho jayein */}
      <div className="flex flex-wrap md:flex-nowrap flex-1 gap-3 w-full">
        {/* Plans */}
        <div className="relative flex-1 min-w-[120px]">
          <select onChange={(e) => onPlanChange(e.target.value)} className="w-full appearance-none bg-custom-white border border-custom-border rounded-lg px-4 py-3.5 text-sm font-medium text-custom-charcoal focus:outline-none cursor-pointer pr-10">
            <option value="All Plans">All Plans</option>
            <option value="Premium">Premium</option>
            <option value="Standard">Standard</option>
            <option value="Basic">Basic</option>
          </select>
          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-40" />
        </div>

        {/* Status */}
        <div className="relative flex-1 min-w-[120px]">
          <select onChange={(e) => onStatusChange(e.target.value)} className="w-full appearance-none bg-custom-white border border-custom-border rounded-lg px-4 py-3.5 text-sm font-medium text-custom-charcoal focus:outline-none cursor-pointer pr-10">
            <option value="All Status">All Status</option>
            <option value="Active">Active</option>
            <option value="Trial">Trial</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-40" />
        </div>

        {/* Billing */}
        <div className="relative flex-1 min-w-[120px]">
          <select onChange={(e) => onBillingChange(e.target.value)} className="w-full appearance-none bg-custom-white border border-custom-border rounded-lg px-4 py-3.5 text-sm font-medium text-custom-charcoal focus:outline-none cursor-pointer pr-10">
            <option value="All Billing">All Billing</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-40" />
        </div>
      </div>
    </div>
  );
}