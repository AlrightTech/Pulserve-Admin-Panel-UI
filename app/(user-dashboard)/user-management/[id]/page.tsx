"use client";
import React from "react";
import WelcomeHeader from "../../components/dashboard/WelcomeHeader";
import UsageOverview from "../../components/dashboard/UsageOverview";
import Button from "@/app/components/ui/Button";
import { ArrowLeft } from "lucide-react";

// Data ko yahan rakhein taake hum name match kar saken
const dummyClients = [
  {
    name: "Randall",
    email: "emily@innovationlabs.com",
    plan: "Professional",
    subStatus: "Suspended",
    activeSurveys: 5,
    totalResponses: "1,234",
    accountStatus: "Active",
  },
  {
    name: "Bernard",
    email: "sarah.j@techstart.io",
    plan: "Professional",
    subStatus: "Active",
    activeSurveys: 8,
    totalResponses: "2,145",
    accountStatus: "Active",
  },
  {
    name: "Floyd",
    email: "john.smith@acme.com",
    plan: "Enterprise",
    subStatus: "Active",
    activeSurveys: 12,
    totalResponses: "4,532",
    accountStatus: "Active",
  },
  {
    name: "Harold",
    email: "r.wilson@datadrive.com",
    plan: "Enterprise",
    subStatus: "Active",
    activeSurveys: 15,
    totalResponses: "6,789",
    accountStatus: "Disabled",
  },
  {
    name: "Ronald",
    email: "m.chen@globalsolutions.com",
    plan: "Basic",
    subStatus: "Expired",
    activeSurveys: 0,
    totalResponses: "856",
    accountStatus: "Active",
  },
];

export default function ClientDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = React.use(params);
  const id = decodeURIComponent(resolvedParams.id); // Email ID

  const client = dummyClients.find((c) => c.email === id);

  const displayTitle = client ? client.name : id;

  return (
    <div className="flex flex-col gap-8">
      <WelcomeHeader
        title={displayTitle}
        subtitle="Detailed client information and usage metrics"
        showSecondaryBtn={false}
        primaryButton={
          <Button
            variant="soft"
            href="/user-management"
            icon={ArrowLeft}
            className="border-gray-200"
          >
            Back to List
          </Button>
        }
      />
      {/* User Overview Section */}
      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm font-sans">
        <h3 className="text-lg font-bold mb-6 text-gray-800">User Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
          <div>
            <p className="text-[11px] text-gray-400 uppercase font-bold tracking-wider">
              Primary Contact
            </p>
            {/* Yahan bhi name show hoga */}
            <p className="text-sm font-semibold mt-1 text-gray-700">
              {client ? client.name : "N/A"}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-gray-400 uppercase font-bold tracking-wider">
              Contact Email
            </p>
            <p className="text-sm font-semibold mt-1 text-gray-700">{id}</p>
          </div>
          <div>
            <p className="text-[11px] text-gray-400 uppercase font-bold tracking-wider">
              Subscription Plan
            </p>
            <p className="text-sm font-semibold mt-1 text-gray-700">
              {client?.plan || "Professional"}
            </p>
          </div>
          {/* Status Indicators */}
          <div>
            <p className="text-[11px] text-gray-400 uppercase font-bold tracking-wider">
              Account Status
            </p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold mt-1 ${
                client?.accountStatus === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {client?.accountStatus || "Active"}
            </span>
          </div>
          <div>
            <p className="text-[11px] text-gray-400 uppercase font-bold tracking-wider">
              Subscription Status
            </p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold mt-1 ${
                client?.subStatus === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-orange-100 text-orange-600"
              }`}
            >
              {client?.subStatus || "Suspended"}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-800">Usage Summary</h3>
        <UsageOverview />
      </div>
    </div>
  );
}
