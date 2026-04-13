"use client";
import React from "react";
import { Check } from "lucide-react";
import Button from "@/app/components/ui/Button";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-3xl w-full text-center">
        
        {/* Success Icon */}
        <div className="w-20 h-20 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-6 mx-auto">
          <Check className="text-[#10B981] size-10" strokeWidth={3} />
        </div>
        
        {/* Title & Subtitle */}
        <h2 className="text-3xl font-bold text-custom-charcoal mb-3">
          Subscription Activated
        </h2>
        <p className="text-custom-dim-gray text-base mb-8 md:mb-10">
          Your account is now active and ready to use. Welcome to Pulsurv!
        </p>

        {/* Plan Details Card - Mobile par flex-col aur Desktop par flex-row */}
        <div className="bg-custom-white border border-[#E5E7EB] rounded-xl p-6 md:p-10 w-full flex flex-col md:flex-row items-center justify-between mb-12 gap-8 md:gap-0">
          
          {/* Plan Name */}
          <div className="flex-1 text-center">
            <h3 className="text-3xl font-bold text-custom-dark-blue mb-2">Professional</h3>
            <p className="text-custom-dim-gray text-sm font-normal">Plan</p>
          </div>

          {/* Divider 1 - Mobile par horizontal aur Desktop par vertical */}
          <div className="h-[1px] w-12 md:h-12 md:w-[1px] bg-[#F1F5F9]"></div>

          {/* Pricing */}
          <div className="flex-1 text-center">
            <h3 className="text-3xl font-bold mb-2 text-custom-coral">$49</h3>
            <p className="text-custom-dim-gray text-sm font-normal">Monthly</p>
          </div>

          {/* Divider 2 - Mobile par horizontal aur Desktop par vertical */}
          <div className="h-[1px] w-12 md:h-12 md:w-[1px] bg-[#F1F5F9]"></div>

          {/* Status */}
          <div className="flex-1 text-center">
            <h3 className="text-3xl font-bold mb-2 text-[#10B981]">Active</h3>
            <p className="text-custom-dim-gray text-sm font-normal">Status</p>
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