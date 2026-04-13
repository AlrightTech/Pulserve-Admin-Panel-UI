"use client";
import React from "react";
import { Check } from "lucide-react";
import Button from "@/app/components/ui/Button";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-3xl w-full text-center">
        
        {/* Success Icon */}
        <div className="w-14 h-14 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-6 mx-auto">
          <Check className="text-[#10B981] size-7" strokeWidth={3} />
        </div>
        
        {/* Title & Subtitle */}
        <h2 className="text-[24px] md:text-[28px] font-bold text-[#1F2937] mb-3">
          Subscription Activated
        </h2>
        <p className="text-[#666666] text-sm mb-8 md:mb-10">
          Your account is now active and ready to use. Welcome to Pulsurv!
        </p>

        {/* Plan Details Card - Mobile par flex-col aur Desktop par flex-row */}
        <div className="bg-white border border-[#F1F5F9] rounded-xl p-6 md:p-10 w-full flex flex-col md:flex-row items-center justify-between mb-12 shadow-[0px_2px_15px_rgba(0,0,0,0.03)] gap-8 md:gap-0">
          
          {/* Plan Name */}
          <div className="flex-1 text-center">
            <h3 className="text-[20px] md:text-[24px] font-bold text-[#0a1d37] mb-1">Professional</h3>
            <p className="text-[#999999] text-[10px] md:text-xs uppercase tracking-wider">Plan</p>
          </div>

          {/* Divider 1 - Mobile par horizontal aur Desktop par vertical */}
          <div className="h-[1px] w-12 md:h-12 md:w-[1px] bg-[#F1F5F9]"></div>

          {/* Pricing */}
          <div className="flex-1 text-center px-4">
            <h3 className="text-[20px] md:text-[24px] font-bold text-custom-coral mb-1">$49</h3>
            <p className="text-[#999999] text-[10px] md:text-xs uppercase tracking-wider">Monthly</p>
          </div>

          {/* Divider 2 - Mobile par horizontal aur Desktop par vertical */}
          <div className="h-[1px] w-12 md:h-12 md:w-[1px] bg-[#F1F5F9]"></div>

          {/* Status */}
          <div className="flex-1 text-center">
            <h3 className="text-[20px] md:text-[24px] font-bold text-[#10B981] mb-1">Active</h3>
            <p className="text-[#999999] text-[10px] md:text-xs uppercase tracking-wider">Status</p>
          </div>
          
        </div>

        {/* Action Button */}
        <div className="flex justify-center w-full">
          <Button 
            href="/" 
            variant="filled" 
            className="w-full md:w-auto px-12 !py-3.5 text-sm font-semibold rounded-lg shadow-md"
          >
            Go to Dashboard
          </Button>
        </div>

      </div>
    </div>
  );
}