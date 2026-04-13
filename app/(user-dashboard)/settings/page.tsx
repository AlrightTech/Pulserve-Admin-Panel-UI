"use client";
import React, { useState } from 'react';
import { User, Lock, Bell } from 'lucide-react';
import ProfileSettings from './components/ProfileSettings';
import ChangePassword from './components/ChangePassword';
import NotificationPreferences from './components/NotificationPreferences';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'password', label: 'Change Password', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-0">
      <h1 className="main-heading-db">Settings</h1>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-64 bg-custom-white rounded-xl border border-t border-[#E0E0E0] p-2 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] flex md:flex-col gap-1 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-custom-dark-blue text-custom-white shadow-md'
                  : 'text-custom-dim-gray hover:bg-gray-50'
              }`}
            >
              <tab.icon size={18} className={activeTab === tab.id ? 'text-custom-white' : 'text-custom-dim-gray'} />
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Container */}
        <div className="flex-1 w-full bg-custom-white rounded-xl border border-t border-[#E0E0E0] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] p-4 sm:p-8">
          {activeTab === 'profile' && <ProfileSettings />}
          {activeTab === 'password' && <ChangePassword />}
          {activeTab === 'notifications' && <NotificationPreferences />}
        </div>
      </div>
    </div>
  );
}