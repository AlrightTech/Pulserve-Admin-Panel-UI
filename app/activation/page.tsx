"use client";
import React, { useState } from "react";
import { Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Button from "@/app/components/ui/Button";

export default function ActivationPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // New state for confirm field

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center py-20 px-4 font-sans">
      <div className="max-w-3xl w-full">
        <h1 className="text-2xl font-bold text-custom-charcoal mb-2">
          Activate Your Account
        </h1>
        <p className="text-custom-dim-gray text-sm font-normal lg:mb-10 mb-4">
          Complete your account setup and enter payment details to activate your
          subscription.
        </p>

        <h2 className="text-xl font-semibold mb-6 text-custom-charcoal flex items-center gap-2">
          Create Your Password
        </h2>

        <div className="bg-custom-white px-6 py-8 rounded-xl shadow-sm border border-gray-100">
          <div className="space-y-6 bg-custom-white">
            
            {/* Password Input */}
            <div>
              <label className="text-sm font-semibold mb-2 block text-custom-charcoal">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-4 text-custom-dim-gray size-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="text-sm w-full pl-10 pr-10 py-3.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-4.5 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="text-sm font-semibold mb-2 block text-custom-charcoal">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-custom-dim-gray size-5" />
                <input
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="Confirm your password"
                  className="text-sm w-full pl-10 pr-10 py-3.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-4.5 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

              <div className="flex items-center gap-2 text-xs text-custom-dim-gray font-normal">
              {/* <CheckCircle2 size={14} className="text-gray-300" /> */}
                 Password must be at least 8 characters long.
              </div>

            
            <div className="border-b border-custom-border my-3.5"></div>

            <Link href="/activation/plan" className="block w-full">
              <Button
                href="/activation/plan"
                variant="filled"
                className="w-full py-3 mt-4 text-sm rounded-lg"
              >
                Continue
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}