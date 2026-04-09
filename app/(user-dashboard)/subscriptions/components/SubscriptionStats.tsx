import React from "react";
import { AlertCircle, Clock, XCircle } from "lucide-react";

const stats = [
  {
    label: "Active Subscriptions",
    count: "4",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.801 9.99999C22.2577 12.2413 21.9322 14.5714 20.8788 16.6018C19.8255 18.6322 18.1079 20.24 16.0125 21.1573C13.9171 22.0746 11.5706 22.2458 9.36428 21.6424C7.15795 21.0389 5.22517 19.6974 3.88825 17.8414C2.55134 15.9854 1.8911 13.7272 2.01764 11.4434C2.14418 9.15952 3.04986 6.98808 4.58363 5.29116C6.1174 3.59424 8.18656 2.47442 10.446 2.11844C12.7055 1.76247 15.0188 2.19185 17 3.33499" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "text-green-700",
    bg: "bg-[#E8F5E9]",
  },
  {
    label: "Expired Subscriptions",
    count: "1",
    icon: <AlertCircle size={20} />,
    color: "text-gray-400",
    bg: "bg-gray-50",
  },
  {
    label: "Trial Accounts",
    count: "2",
    icon: <Clock size={20} />,
    color: "text-blue-400",
    bg: "bg-blue-50",
  },
  {
    label: "Cancelled Plans",
    count: "1",
    icon: <XCircle size={20} />,
    color: "text-red-400",
    bg: "bg-red-50",
  },
];

const SubscriptionStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-custom-white p-6 rounded-xl border border-custom-border shadow-sm flex flex-col gap-2"
        >
          <p className="text-sm uppercase font-normal text-[#999999] font-sans">
            {stat.label}
          </p>

          <div className="flex justify-between items-center">
            <p className="text-4xl font-bold text-custom-dark-blue font-sans">
              {stat.count}
            </p>

            <div className={`${stat.bg} ${stat.color} p-2 rounded-lg`}>
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionStats;