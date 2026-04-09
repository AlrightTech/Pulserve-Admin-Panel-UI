"use client";
import React, { useState, useMemo } from "react";
import WelcomeHeader from "../components/dashboard/WelcomeHeader";
import SubscriptionStats from "./components/SubscriptionStats";
import FilterSection from "./components/FilterSection";
import SubscriptionTable from "./components/SubscriptionTable";
import DataPrivacyNotice from "./components/DataPrivacyNotice";
import EditSubscriptionModal from "./components/EditSubscriptionModal";

const ALL_SUBS = [
  {
    id: "1",
    name: "Guy",
    email: "admin@acme.com",
    plan: "Premium Plan",
    cycle: "Monthly",
    status: "Active",
    expiry: "15 Apr 2026",
  },
  {
    id: "2",
    name: "Bernard",
    email: "contact@techart.com",
    plan: "Standard Plan",
    cycle: "Yearly",
    status: "Active",
    expiry: "20 Dec 2026",
  },
  {
    id: "3",
    name: "Calvin",
    email: "info@globalsolutions.com",
    plan: "Basic Plan",
    cycle: "Monthly",
    status: "Trial",
    expiry: "10 Mar 2026",
  },
  {
    id: "4",
    name: "Dwight",
    email: "hello@innovatelabs.com",
    plan: "Standard Plan",
    cycle: "Monthly",
    status: "Cancelled",
    expiry: "05 Feb 2026",
  },
];

export default function SubscriptionsPage() {
  // Filters State
  const [search, setSearch] = useState("");
  const [planFilter, setPlanFilter] = useState("All Plans");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [billingFilter, setBillingFilter] = useState("All Billing");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSub, setSelectedSub] = useState(null);

  // Functional Filtering Logic
  const filteredData = useMemo(() => {
    return ALL_SUBS.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase());

      // Plan match logic (using .includes for "Premium Plan" vs "Premium")
      const matchesPlan =
        planFilter === "All Plans" || item.plan.includes(planFilter);

      const matchesStatus =
        statusFilter === "All Status" || item.status === statusFilter;

      const matchesBilling =
        billingFilter === "All Billing" || item.cycle === billingFilter;

      return matchesSearch && matchesPlan && matchesStatus && matchesBilling;
    });
  }, [search, planFilter, statusFilter, billingFilter]);

  return (
    <div className="flex flex-col gap-8 pb-8">
      <WelcomeHeader
        title="Subscriptions Management"
        subtitle="Manage client subscription plans and account status"
        showSecondaryBtn={false}
        primaryButton={<></>}
      />

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-custom-charcoal">
          Subscription Overview
        </h3>
        <SubscriptionStats />
      </section>

      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-custom-charcoal">
            Client Subscriptions
          </h3>
        </div>

        <FilterSection
          onSearch={setSearch}
          onPlanChange={setPlanFilter}
          onStatusChange={setStatusFilter}
          onBillingChange={setBillingFilter}
        />

        <SubscriptionTable
          data={filteredData}
          onEdit={(sub: any) => {
            setSelectedSub(sub);
            setIsModalOpen(true);
          }}
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
