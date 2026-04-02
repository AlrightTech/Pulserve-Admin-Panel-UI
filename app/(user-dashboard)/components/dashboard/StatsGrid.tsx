import React from 'react';
import { Users, FileText, BarChart3, MessageCircle } from 'lucide-react';

// Reusable StatCard Component
interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

const StatCard = ({ title, value, trend, icon, iconBg, iconColor }: StatCardProps) => (
  <div className="bg-white p-6 rounded-2xl border border-custom-border shadow-sm flex flex-col gap-5 hover:shadow-md transition-shadow">
    {/* Top Section: Icon and Trend Badge */}
    <div className="flex justify-between items-start">
      <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${iconBg} ${iconColor}`}>
        {icon}
      </div>
      <span className={`text-sm font-semibold ${trend.startsWith('+') ? 'text-green-500' : 'text-gray-400'}`}>
        {trend}
      </span>
    </div>

    {/* Bottom Section: Data */}
    <div className="space-y-1">
      <h3 className="text-3xl font-bold text-custom-charcoal tracking-tight">
        {value}
      </h3>
      <p className="text-custom-medium-gray text-sm font-medium">
        {title}
      </p>
    </div>
  </div>
);

const StatsGrid = () => {
  const statsData = [
    {
      title: "Total Client Accounts",
      value: "1,248",
      trend: "+12%",
      icon: <Users size={24} />,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-900",
    },
    {
      title: "Active Subscriptions",
      value: "856",
      trend: "+5%",
      icon: <FileText size={24} />,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
    },
    {
      title: "Active Surveys",
      value: "3,402",
      trend: "0%",
      icon: <BarChart3 size={24} />,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Total Responses Collected",
      value: "142.5k",
      trend: "+24%",
      icon: <MessageCircle size={24} />,
      iconBg: "bg-teal-50",
      iconColor: "text-teal-600",
    },
  ];

  return (
    /* Grid Layout: Mobile par 1, Tablet par 2 aur Desktop par 4 columns */
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsGrid;