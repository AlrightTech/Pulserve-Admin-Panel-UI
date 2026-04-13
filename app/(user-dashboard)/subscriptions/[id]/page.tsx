"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import SubscriptionHeader     from "./components/SubscriptionHeader";
import SummaryCards           from "./components/SummaryCards";
import SubscriptionDetailsCard from "./components/SubscriptionDetailsCard";
import AnalyticsCard          from "./components/AnalyticsCard";
import PaymentHistoryTable    from "./components/PaymentHistoryTable";
import DataPrivacyNotice     from "../components/DataPrivacyNotice";

const lineData = [
  { name: "Sep", value: 20 }, { name: "Oct", value: 28 },
  { name: "Nov", value: 35 }, { name: "Dec", value: 38 },
  { name: "Jan", value: 42 }, { name: "Feb", value: 45 },
];

const barData = [
  { name: "Sep", value: 45000 }, { name: "Oct", value: 62000 },
  { name: "Nov", value: 78000 }, { name: "Dec", value: 82000 },
  { name: "Jan", value: 90000 }, { name: "Feb", value: 95000 },
];

const history = [
  { date: "15 Feb 2026", amount: "$299.00", status: "Paid", method: "Credit Card" },
  { date: "15 Jan 2026", amount: "$299.00", status: "Paid", method: "Credit Card" },
  { date: "15 Dec 2025", amount: "$299.00", status: "Paid", method: "Credit Card" },
];

export default function SubscriptionDetailPage() {
  const params = useParams();
  // TypeScript Fix: Ensuring id is always a string
  const id = typeof params?.id === 'string' ? params.id : "";
  const router = useRouter();

  const user = {
    name:      id === "1" ? "Guy" : id === "2" ? "Bernard" : "Calvin",
    email:     id === "2" ? "admin@acme.com" : "user@example.com",
    status:    id === "3" ? "Trial" : id === "4" ? "Cancelled" : "Active",
    plan:      id === "1" ? "Premium" : "Standard",
    startDate:   "15 Jan 2024",
    lastPayment: "15 Feb 2025",
  };

  return (
    <div className="space-y-8">
      <SubscriptionHeader
        name={user.name}
        id={id}
        status={user.status}
        onBack={() => router.back()}
      />
      <SummaryCards plan={user.plan} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SubscriptionDetailsCard user={user} />
        <AnalyticsCard lineData={lineData} barData={barData} />
      </div>
      <PaymentHistoryTable history={history} />
      <DataPrivacyNotice />
    </div>
  );
}