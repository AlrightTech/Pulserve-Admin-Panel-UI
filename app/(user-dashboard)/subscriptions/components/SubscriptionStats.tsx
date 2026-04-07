import React from 'react';
import { CheckCircle2, AlertCircle, Clock, XCircle } from 'lucide-react';

const stats = [
  { label: 'Active Subscriptions', count: '4', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50' },
  { label: 'Expired Subscriptions', count: '1', icon: AlertCircle, color: 'text-gray-400', bg: 'bg-gray-50' },
  { label: 'Trial Accounts', count: '2', icon: Clock, color: 'text-blue-400', bg: 'bg-blue-50' },
  { label: 'Cancelled Plans', count: '1', icon: XCircle, color: 'text-red-400', bg: 'bg-red-50' },
];

const SubscriptionStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-800">{stat.count}</p>
          </div>
          <div className={`${stat.bg} ${stat.color} p-2 rounded-lg`}>
            <stat.icon size={24} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionStats;