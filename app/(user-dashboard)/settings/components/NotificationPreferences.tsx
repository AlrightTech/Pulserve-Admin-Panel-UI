"use client";
import React from 'react';
import Button from "@/app/components/ui/Button";


const NotificationItem = ({ title, desc }: { title: string, desc: string }) => (
  <div className="flex justify-between items-start py-4">
    <div className="space-y-1">
      <p className="text-sm font-medium text-custom-charcoal">{title}</p>
      <p className="text-xs font-normal text-custom-dim-gray">{desc}</p>
    </div>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" defaultChecked />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-custom-dark-blue"></div>
    </label>
  </div>
);

export default function NotificationPreferences() {
  return (
    <div className="w-full space-y-8">
      <h3 className="text-xl font-semibold text-custom-charcoal">Notification Preferences</h3>
      
      <div className="space-y-6">
        <div>
          <p className="text-base font-semibold text-custom-charcoal mb-4">Email Notifications</p>
          <NotificationItem title="Account Updates" desc="Receive emails about account changes." />
          <NotificationItem title="Subscription Changes" desc="Receive notifications about subscription updates." />
          <NotificationItem title="System Alerts" desc="Important platform notifications." />
        </div>

        <div className="pt-4">
          <p className="text-base font-semibold text-custom-charcoal mb-4">In-App Notifications</p>
          <NotificationItem title="New Client Registrations" desc="Notify when new clients register." />
          <NotificationItem title="Subscription Updates" desc="Notify when subscriptions change." />
          <NotificationItem title="Usage Alerts" desc="Notify when usage thresholds are reached." />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-6 border-t border-gray-50">
        <Button 
          type="button"
          variant="soft" 
          className="px-6 !py-2.5 text-sm" // padding aur text size design ke mutabiq
          onClick={() => console.log("Preferences cancelled")}
        >
          Cancel
        </Button>
        
        <Button 
          type="button"
          variant="filled" 
          className="px-6 !py-2.5 text-sm"
          onClick={() => console.log("Preferences saved!")}
        >
          Save Preferences
        </Button>
      </div>
    </div>
  );
}