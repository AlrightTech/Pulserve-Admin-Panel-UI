"use client";
import React from "react";
import WelcomeHeader from "../../components/dashboard/WelcomeHeader";
import UsageOverview from "../../components/dashboard/UsageOverview";
import Button from "@/app/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link"; 
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { FileText, TrendingUp, BarChart3 } from "lucide-react";

const data = [
  { name: "Sep", value: 220 },
  { name: "Oct", value: 240 },
  { name: "Nov", value: 210 },
  { name: "Dec", value: 180 },
  { name: "Jan", value: 190 },
  { name: "Feb", value: 195 },
];

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
        // primaryButton={null}

        primaryButton={
          <Link href="/user-management" passHref>
    <Button
      variant="soft"
      icon={ArrowLeft}
      className="border-gray-200"
    >
      Back to List
    </Button>
  </Link>
        }
      />

      <div className="bg-custom-white px-6 py-8 rounded-xl shadow-sm font-sans">
        <h3 className="text-xl font-semibold mb-6 text-custom-charcoal">
          User Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
          <div>
            <p className="text-xs text-custom-dim-gray font-normal">
              Primary Contact
            </p>
            <p className="text-base font-medium mt-1 text-custom-charcoal">
              {client ? client.name : "N/A"}
            </p>
          </div>
          <div>
            <p className="text-xs text-custom-dim-gray font-normal">
              Contact Email
            </p>
            <p className="text-base font-medium mt-1 text-custom-charcoal">
              {id}
            </p>
          </div>
          <div>
            <p className="text-xs text-custom-dim-gray font-normal">
              Subscription Plan
            </p>
            <p className="text-base font-medium mt-1 text-custom-charcoal">
              {client?.plan || "Professional"}
            </p>
          </div>
          {/* Status Indicators */}
          <div>
            <p className="text-xs text-custom-dim-gray font-normal">
              Account Status
            </p>
            <span
              className={`inline-block px-3 py-1 rounded-lg text-xs font-medium mt-1 ${
                client?.accountStatus === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {client?.accountStatus || "Active"}
            </span>
          </div>
          <div>
            <p className="text-xs text-custom-dim-gray font-normal">
              Subscription Status
            </p>
            <span
              className={`inline-block px-3 py-1 rounded-lg text-xs font-medium mt-1 ${
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

      <div className="bg-custom-white px-6 py-8 rounded-xl shadow-sm font-sans">
        <h3 className="text-xl font-semibold mb-6 text-custom-charcoal">Usage Summary</h3>

        {/* Stats Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Active Surveys */}
          <div className="bg-[#EFF6FF] px-4 py-4 rounded-xl">
            <div className="flex items-center gap-2 text-[#3B82F6] mb-3">
              <TrendingUp  size={14} />
              <span className="text-xs font-normal text-custom-dim-gray">
                Active Surveys
              </span>
            </div>
            <h2 className="text-2xl font-sans font-bold text-custom-charcoal">5</h2>
          </div>

          {/* Total Responses */}
          <div className="bg-[#F0FDF4] px-4 py-4 rounded-xl">
            <div className="flex items-center gap-2 text-[#22C55E] mb-3">
              <TrendingUp size={14} />
              <span className="text-xs font-normal text-custom-dim-gray">
                Total Responses
              </span>
            </div>
            <h2 className="text-2xl font-sans font-bold text-custom-charcoal">1,234</h2>
          </div>

          {/* Avg per Survey */}
          <div className="bg-[#FAF5FF] px-4 py-4 rounded-xl">
            <div className="flex items-center gap-2 text-[#A855F7] mb-3">
              <TrendingUp size={14} />
              <span className="text-xs font-normal text-custom-dim-gray">
                Avg. per Survey
              </span>
            </div>
            <h2 className="text-2xl font-sans font-bold text-custom-charcoal">247</h2>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mt-8">
          <h4 className="text-base font-semibold text-custom-charcoal mb-4">
            Usage Trend (Last 6 Months)
          </h4>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
              >
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  stroke="#E5E7EB"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#666666", fontSize: 11 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#666666", fontSize: 11 }}
                  domain={[0, 240]}
                  ticks={[0, 60, 120, 180, 240]}
                />
                <Line
                  type="monotone" 
                  dataKey="value"
                  stroke="#0F172A" 
                  strokeWidth={2.5}
                  dot={{
                    r: 4,
                    fill: "#0F172A",
                    strokeWidth: 2,
                    stroke: "#0F172A",
                  }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
