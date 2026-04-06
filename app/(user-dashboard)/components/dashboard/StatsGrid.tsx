import React from 'react';
import Image from 'next/image';

// Props mein 'iconSize' add kiya hai
interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  iconPath: string;
  iconBg: string;
  iconSize: number; // Har icon ka apna size define karne ke liye
}

const StatCard = ({ title, value, trend, iconPath, iconBg, iconSize }: StatCardProps) => (
  <div className="stats-card p-6 rounded-xl border border-[#F3F4F6] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.05)] bg-white flex flex-col gap-5 transition-all hover:scale-[1.02] hover:shadow-md">
    
    {/* Top Section: Icon and Trend */}
    <div className="flex justify-between items-start">
      <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${iconBg}`}>
        <Image 
          src={iconPath} 
          alt={title} 
          /* Yahan props wala custom size apply ho raha hai */
          width={iconSize} 
          height={iconSize} 
          className="object-contain"
        />
      </div>
      <span className={`text-sm font-semibold ${trend.startsWith('+') ? 'text-green-600' : 'text-gray-400'}`}>
        {trend}
      </span>
    </div>

    {/* Bottom Section: Data */}
    <div className="space-y-1">
      <h3 className="text-[25px] font-bold text-custom-charcoal leading-tight">
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
      iconPath: "/images/svg-icons/clients-accounts.svg",
      iconBg: "bg-blue-50",
      iconSize: 22, // Is icon ko resize karein yahan se
    },
    {
      title: "Active Subscriptions",
      value: "856",
      trend: "+5%",
      iconPath: "/images/svg-icons/active-accounts.svg",
      iconBg: "bg-orange-50",
      iconSize:15, // Agay barayein ya kam karein pixels mein
    },
    {
      title: "Active Surveys",
      value: "3,402",
      trend: "0%",
      iconPath: "/images/svg-icons/survey-icon.svg",
      iconBg: "bg-purple-50",
      iconSize: 17, 
    },
    {
      title: "Total Responses Collected",
      value: "142.5k",
      trend: "+24%",
      iconPath: "/images/svg-icons/chats-icon.svg",
      iconBg: "bg-teal-50",
      iconSize: 21, 
    },
  ];

  return (
    <div className='pt-10 pb-8'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;