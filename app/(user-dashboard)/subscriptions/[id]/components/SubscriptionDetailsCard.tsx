import React from "react";
import { User, Mail, Calendar, CreditCard } from "lucide-react";
import DetailRow from "./DetailRow";

interface User {
  name: string;
  email: string;
  startDate: string;
  lastPayment: string;
}

interface SubscriptionDetailsCardProps {
  user: User;
}

export default function SubscriptionDetailsCard({ user }: SubscriptionDetailsCardProps) {
  return (
    <div className="bg-custom-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
      <h3 className="text-xl font-semibold text-custom-charcoal">Subscription Details</h3>

      <div className="space-y-4">
        <DetailRow icon={<User size={14} />}       label="User Name"    value={user.name}        />
        <DetailRow icon={<Mail size={14} />}        label="Email"        value={user.email}       />
        <DetailRow icon={<Calendar size={14} />}    label="Start Date"   value={user.startDate}   />
        <DetailRow icon={<CreditCard size={14} />}  label="Last Payment" value={user.lastPayment} />
      </div>

      <div className="pt-6 border-t border-gray-50">
        <h4 className="text-base font-semibold text-custom-charcoal mb-4">Plan Features</h4>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-custom-dim-gray font-normal">
            <span>Storage</span>
            <span className="font-medium text-custom-charcoal">500 GB</span>
          </div>
          <div className="flex justify-between text-custom-dim-gray font-normal">
            <span>API Calls</span>
            <span className="font-medium text-custom-charcoal">Unlimited</span>
          </div>
          <div className="flex justify-between text-custom-dim-gray font-normal">
            <span>Support</span>
            <span className="font-medium text-custom-charcoal">Email Only</span>
          </div>
        </div>
      </div>
    </div>
  );
}