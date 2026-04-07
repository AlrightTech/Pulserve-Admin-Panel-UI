"use client";
import React, { useState } from 'react';
import WelcomeHeader from '../components/dashboard/WelcomeHeader';
import SubscriptionStats from './components/SubscriptionStats';
import FilterSection from './components/FilterSection';
import SubscriptionTable from './components/SubscriptionTable';
import DataPrivacyNotice from './components/DataPrivacyNotice';
import EditSubscriptionModal from './components/EditSubscriptionModal';

const ALL_SUBS = [
  { id: '1', name: "Guy", email: "admin@acme.com", plan: "Premium Plan", cycle: "Monthly", status: "Active", expiry: "15 Apr 2026" },
  { id: '2', name: "Bernard", email: "contact@techart.com", plan: "Standard Plan", cycle: "Yearly", status: "Active", expiry: "20 Dec 2026" },
  { id: '3', name: "Calvin", email: "info@globalsolutions.com", plan: "Basic Plan", cycle: "Monthly", status: "Trial", expiry: "10 Mar 2026" },
  { id: '4', name: "Dwight", email: "hello@innovatelabs.com", plan: "Standard Plan", cycle: "Monthly", status: "Cancelled", expiry: "05 Feb 2026" },
];

export default function SubscriptionsPage() {
  const [search, setSearch] = useState("");
  const [planFilter, setPlanFilter] = useState("All Plans");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSub, setSelectedSub] = useState(null);

  const filteredData = ALL_SUBS.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                          item.email.toLowerCase().includes(search.toLowerCase());
    const matchesPlan = planFilter === "All Plans" || item.plan.includes(planFilter);
    return matchesSearch && matchesPlan;
  });

  return (
    <div className="flex flex-col gap-8 pb-8">
      <WelcomeHeader 
        title="Subscriptions Management" 
        subtitle="Manage client subscription plans and account status" 
      />      
      <SubscriptionStats />
      
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-800">Client Subscriptions</h3>
        </div>
        <FilterSection onSearch={setSearch} onPlanChange={setPlanFilter} />
        <SubscriptionTable 
          data={filteredData} 
          onEdit={(sub: any) => { setSelectedSub(sub); setIsModalOpen(true); }} 
        />
      </section>

      <DataPrivacyNotice />

      <EditSubscriptionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        data={selectedSub} 
      />
    </div>
  );
}