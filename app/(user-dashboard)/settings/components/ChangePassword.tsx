"use client";
import React from 'react';

export default function ChangePassword() {
  return (
    <div className="max-w-2xl space-y-8 animate-in fade-in duration-300">
      <h3 className="text-lg font-bold text-gray-800">Change Password</h3>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-800">Current Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full p-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-custom-dark-blue"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-800">New Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full p-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-custom-dark-blue"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-800">Confirm New Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full p-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-custom-dark-blue"
          />
          <p className="text-[10px] text-gray-400 mt-1">Password must be at least 8 characters.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-gray-50">
        <button className="btn1-text-size px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button className="btn1-text-size px-6 py-2.5 rounded-lg bg-custom-dark-blue text-white hover:bg-opacity-90 transition-all shadow-sm">
          Update Password
        </button>
      </div>
    </div>
  );
}