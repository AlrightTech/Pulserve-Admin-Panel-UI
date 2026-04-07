"use client";
import React from 'react';
import WelcomeHeader from '../components/dashboard/WelcomeHeader';
import PlatformOverview from './components/PlatformOverview';
import SurveyActivityChart from './components/SurveyActivityChart';
import ResponseVolumesChart from './components/ResponseVolumesChart';
import UsageTrendsChart from './components/UsageTrendsChart';
import TopClientsTable from './components/TopClientsTable';
import DataPrivacyNotice from '../subscriptions/components/DataPrivacyNotice';

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
        <p className="text-xs text-gray-400">Monitor platform usage and subscription performance</p>
      </div>

      <PlatformOverview />

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">Survey Activity</h3>
            <select className="text-xs border rounded px-2 py-1 outline-none">
              <option>Last 7 Days</option>
            </select>
          </div>
          <SurveyActivityChart />
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">Response Volumes</h3>
            <select className="text-xs border rounded px-2 py-1 outline-none">
              <option>Last 7 Days</option>
            </select>
          </div>
          <ResponseVolumesChart />
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-6">Platform Usage Trends</h3>
          <UsageTrendsChart />
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 pb-0">
            <h3 className="font-bold text-gray-800">Top Clients by Usage</h3>
          </div>
          <TopClientsTable />
        </div>
      </div>

      <DataPrivacyNotice />
    </div>
  );
}