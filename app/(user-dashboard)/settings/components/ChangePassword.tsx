"use client";
import React, { useState } from 'react';
import Button from "@/app/components/ui/Button";
import { Eye, EyeOff } from 'lucide-react'; // Icons import kiye

export default function ChangePassword() {
  // Teeno fields ke liye alag state taake independently toggle ho sakein
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-300">
      <h3 className="text-xl font-semibold text-custom-charcoal">Change Password</h3>
      
      <div className="space-y-6">
        {/* Current Password */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-custom-charcoal">Current Password</label>
          <div className="relative">
            <input 
              type={showCurrent ? "text" : "password"} 
              placeholder="••••••••"
              className="mt-1 w-full px-3 py-3.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-custom-dark-blue"
            />
            <button
              type="button"
              onClick={() => setShowCurrent(!showCurrent)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-custom-dark-blue transition-colors"
            >
              {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-custom-charcoal">New Password</label>
          <div className="relative">
            <input 
              type={showNew ? "text" : "password"} 
              placeholder="••••••••"
              className="mt-1 w-full px-3 py-3.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-custom-dark-blue"
            />
            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-custom-dark-blue transition-colors"
            >
              {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Confirm New Password */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-custom-charcoal">Confirm New Password</label>
          <div className="relative">
            <input 
              type={showConfirm ? "text" : "password"} 
              placeholder="••••••••"
              className="mt-1 w-full px-3 py-3.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-custom-dark-blue"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-custom-dark-blue transition-colors"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <p className="text-sm text-custom-dim-gray mt-1">Password must be at least 8 characters.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-gray-50">
        <Button 
          type="button"
          variant="soft" 
          onClick={() => console.log("Password change cancelled")}
          className="px-6 !py-2.5 text-sm" 
        >
          Cancel
        </Button>
        
        <Button 
          type="button"
          variant="filled" 
          onClick={() => console.log("Updating password...")}
          className="px-6 !py-2.5 text-sm shadow-sm"
        >
          Update Password
        </Button>
      </div>
    </div>
  );
}