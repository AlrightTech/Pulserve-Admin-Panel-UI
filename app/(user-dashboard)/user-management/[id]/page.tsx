"use client";
import React from 'react';
import WelcomeHeader from '../../components/dashboard/WelcomeHeader';
import UsageOverview from '../../components/dashboard/UsageOverview';

// Params ka type update karein kyunki ye ab Promise hai
export default function ClientDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // params ko unwrap karne ke liye React.use() ka istemal
  const resolvedParams = React.use(params);
  const id = resolvedParams.id;

  const clientName = id.split('@')[0]; 

  return (
    <div className="flex flex-col gap-8">
      <WelcomeHeader 
        title={clientName} 
        subtitle="Detailed client information and usage metrics"
        showSecondaryBtn={false}
        primaryBtnText="Back to List"
      />

      {/* User Overview Section */}
      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm font-sans">
        <h3 className="text-lg font-bold mb-6 text-gray-800">User Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
          <div>
            <p className="text-[11px] text-gray-400 uppercase font-bold tracking-wider">Primary Contact</p>
            <p className="text-sm font-semibold mt-1 text-gray-700">Emily Davis</p>
          </div>
          <div>
            <p className="text-[11px] text-gray-400 uppercase font-bold tracking-wider">Contact Email</p>
            <p className="text-sm font-semibold mt-1 text-gray-700">{id}</p>
          </div>
          <div>
            <p className="text-[11px] text-gray-400 uppercase font-bold tracking-wider">Subscription Plan</p>
            <p className="text-sm font-semibold mt-1 text-gray-700">Professional</p>
          </div>
          <div>
            <p className="text-[11px] text-gray-400 uppercase font-bold tracking-wider">Subscription Expiry</p>
            <p className="text-sm font-semibold mt-1 text-gray-700">August 10, 2024</p>
          </div>
          <div>
            <p className="text-[11px] text-gray-400 uppercase font-bold tracking-wider">Account Status</p>
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700 mt-1">
              Active
            </span>
          </div>
          <div>
            <p className="text-[11px] text-gray-400 uppercase font-bold tracking-wider">Subscription Status</p>
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-orange-100 text-orange-600 mt-1">
              Suspended
            </span>
          </div>
        </div>
      </div>

      {/* Usage Summary Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-800">Usage Summary</h3>
        <UsageOverview /> 
      </div>
    </div>
  );
}