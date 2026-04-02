// @ use karne se path hamesha sahi rehta hai
import React from "react";

import WelcomeHeader from "@/app/(user-dashboard)/components/dashboard/WelcomeHeader";
import StatsGrid from "@/app/(user-dashboard)/components/dashboard/StatsGrid";
import UsageOverview from "@/app/(user-dashboard)/components/dashboard/UsageOverview";
import RecentClientsTable from "@/app/(user-dashboard)/components/dashboard/RecentClientsTable";
import PrivacyNotice from "./components/dashboard/PrivacyNotice";

export default function DashboardHome() {
  return (
    /* Yahan 'border-custom-border' use kiya hai jo aapne globals.css mein define kiya.
       'rounded-xl' corners ko thoda round karega aur 'p-6' andar ka space manage karega.
    */
    <div className="bg-custo-white border border-custom-border rounded-lg p-4 lg:p-6 space-y-8">
      <WelcomeHeader />
      
      <div className="space-y-6">
        <StatsGrid />
        <UsageOverview />
        <PrivacyNotice />
        <RecentClientsTable />
      </div>
    </div>
  );
}