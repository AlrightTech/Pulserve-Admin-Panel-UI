// @ use karne se path hamesha sahi rehta hai
import React from "react";

import WelcomeHeader from "@/app/(user-dashboard)/components/dashboard/WelcomeHeader";
import StatsGrid from "@/app/(user-dashboard)/components/dashboard/StatsGrid";
import UsageOverview from "@/app/(user-dashboard)/components/dashboard/UsageOverview";
import RecentClientsTable from "@/app/(user-dashboard)/components/dashboard/RecentClientsTable";
import PrivacyNotice from "./components/dashboard/PrivacyNotice";

export default function DashboardHome() {
  return (
    <div className="bg-custom-white border border-custom-border rounded-lg p-4 lg:py-6 lg:px-8">
      
      {/* Yahan humne title aur subtitle pass kar diye hain */}
      <WelcomeHeader 
        title="Welcome to Admin Dashboard" 
        subtitle="Monitor platform activity and manage client accounts" 
      />
      
      <div className="flex flex-col gap-8 mt-6">
        <StatsGrid />
        <UsageOverview />
        <PrivacyNotice />
        <RecentClientsTable />
      </div>
    </div>
  );
}