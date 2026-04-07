"use client";
import React from 'react';

const NotificationItem = ({ title, desc }: { title: string, desc: string }) => (
  <div className="flex justify-between items-start py-4">
    <div className="space-y-1">
      <p className="text-sm font-medium text-gray-800">{title}</p>
      <p className="text-xs text-gray-400">{desc}</p>
    </div>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" defaultChecked />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-custom-dark-blue"></div>
    </label>
  </div>
);

export default function NotificationPreferences() {
  return (
    <div className="max-w-2xl space-y-8">
      <h3 className="text-lg font-bold text-gray-800">Notification Preferences</h3>
      
      <div className="space-y-6">
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase mb-4 tracking-widest">Email Notifications</p>
          <NotificationItem title="Account Updates" desc="Receive emails about account changes." />
          <NotificationItem title="Subscription Changes" desc="Receive notifications about subscription updates." />
          <NotificationItem title="System Alerts" desc="Important platform notifications." />
        </div>

        <div className="pt-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase mb-4 tracking-widest">In-App Notifications</p>
          <NotificationItem title="New Client Registrations" desc="Notify when new clients register." />
          <NotificationItem title="Subscription Updates" desc="Notify when subscriptions change." />
          <NotificationItem title="Usage Alerts" desc="Notify when usage thresholds are reached." />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-6 border-t border-gray-50">
        <button className="px-6 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-600">Cancel</button>
        <button className="px-6 py-2.5 rounded-lg bg-custom-dark-blue text-white text-sm font-medium">Save Preferences</button>
      </div>
    </div>
  );
}