"use client";
import React from 'react';

export default function ProfileSettings() {
  return (
    <div className="max-w-2xl space-y-8 animate-in fade-in duration-300">
      <h3 className="text-lg font-bold text-gray-800">Profile Information</h3>
      
      <div className="space-y-4">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Profile Photo</p>
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-custom-dark-blue border-4 border-[#ED714D] flex items-center justify-center text-white text-xl font-bold">
            SA
          </div>
          <button className="text-custom-coral text-xs font-bold underline underline-offset-4 hover:opacity-80 transition-all">
            Edit Photo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-800">Full Name</label>
          <input 
            type="text" 
            defaultValue="System Administrator"
            className="w-full p-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-custom-dark-blue"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-800">Email Address</label>
          <input 
            type="email" 
            defaultValue="admin@pulsurv.com"
            className="w-full p-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-custom-dark-blue"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-gray-50">
        <button className="btn1-text-size px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
          Cancel
        </button>
        <button className="btn1-text-size px-6 py-2.5 rounded-lg bg-custom-dark-blue text-white hover:shadow-lg transition-all">
          Save Changes
        </button>
      </div>
    </div>
  );
}