"use client";
import React from 'react';
import Button from "@/app/components/ui/Button";


export default function ChangePassword() {
  return (
    <div className="w-full space-y-8 animate-in fade-in duration-300">
      <h3 className="text-xl font-semibold text-custom-charcoal">Change Password</h3>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-custom-charcoal">Current Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="mt-1 w-full px-3 py-3.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-custom-dark-blue"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-custom-charcoal">New Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="mt-1 w-full px-3 py-3.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-custom-dark-blue"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-custom-charcoal">Confirm New Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="mt-1 w-full px-3 py-3.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-custom-dark-blue"
          />
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