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

      <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-start">
        {/* Sidebar Nav - Mobile: Horizontal Scroll / Desktop: Vertical Stack */}
        <div className="w-full md:w-64 bg-white rounded-xl border border-gray-100 p-2 shadow-sm flex md:flex-col gap-1 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-custom-dark-blue text-white shadow-md'
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <tab.icon size={18} className={activeTab === tab.id ? 'text-white' : 'text-gray-400'} />
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Container */}
        <div className="flex-1 w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-8 min-h-[500px]">
          {activeTab === 'profile' && <ProfileSettings />}
          {activeTab === 'password' && <ChangePassword />}
          {activeTab === 'notifications' && <NotificationPreferences />}
        </div>
      </div>
    </div>
  );
}