import React from "react";

interface SummaryCardsProps {
  plan: string;
  cost?: string;
  expiry?: string;
  expiryNote?: string;
  users?: number;
}

const cards_config = [
  {
    label: "Plan",
    iconBg: "bg-blue-50",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="20" height="14" rx="3" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M2 10H22" stroke="#3b82f6" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: "Monthly Cost",
    iconBg: "bg-[#E8F5E9]",
    icon: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.3346 5.83301L11.2513 12.9163L7.08464 8.74967L1.66797 14.1663" stroke="#2E7D32" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.332 5.83301H18.332V10.833" stroke="#2E7D32" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    ),
  },
  {
    label: "Expiry Date",
    iconBg: "bg-orange-50",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="18" rx="3" stroke="#f97316" strokeWidth="2"/>
        <path d="M3 10H21" stroke="#f97316" strokeWidth="2"/>
        <path d="M8 2V6M16 2V6" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Active Users",
    iconBg: "bg-purple-50",
    icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.9987 1.66699H4.9987C4.07822 1.66699 3.33203 2.41318 3.33203 3.33366V16.667C3.33203 17.5875 4.07822 18.3337 4.9987 18.3337H14.9987C15.9192 18.3337 16.6654 17.5875 16.6654 16.667V3.33366C16.6654 2.41318 15.9192 1.66699 14.9987 1.66699Z" stroke="#6A1B9A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.5 18.3333V15H12.5V18.3333" stroke="#6A1B9A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.66797 5H6.6763" stroke="#6A1B9A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.332 5H13.3404" stroke="#6A1B9A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 5H10.0083" stroke="#6A1B9A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 8.33301H10.0083" stroke="#6A1B9A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 11.667H10.0083" stroke="#6A1B9A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.332 8.33301H13.3404" stroke="#6A1B9A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.332 11.667H13.3404" stroke="#6A1B9A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.66797 8.33301H6.6763" stroke="#6A1B9A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.66797 11.667H6.6763" stroke="#6A1B9A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    ),
  },
];

export default function SummaryCards({
  plan,
  cost = "$99",
  expiry = "15 Apr 2026",
  expiryNote = "in 10 days",
  users = 10,
}: SummaryCardsProps) {
  const values = [plan, cost, expiry, String(users)];
  const subs   = ["Monthly", "per month", expiryNote, "total users"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cards_config.map((card, i) => (
        <div key={i} className="bg-custom-white p-6 rounded-lg border border-gray-100 shadow-sm">

          {/* Icon + Label Row */}
          <div className="flex items-center gap-3 mb-4">
            <div className={`${card.iconBg} p-2.5 py-2.5 rounded-xl`}>
              {card.icon}
            </div>
            <p className="text-sm uppercase font-normal text-custom-authtext">
              {card.label}
            </p>
          </div>

          {/* Value */}
          <p className="text-xl font-bold text-custom-charcoal mb-1">
            {values[i]}
          </p>

          {/* Sub text */}
          <p className="text-sm text-custom-dim-gray font-normal">
            {subs[i]}
          </p>

        </div>
      ))}
    </div>
  );
}