import React from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface SubscriptionHeaderProps {
  name: string;
  id: string | string[];
  status: string;
  onBack: () => void;
}

const statusConfig = {
  Active: {
    icon: "/images/svg-icons/active-icon.svg",
    className: "bg-green-50 text-green-600",
  },
  Trial: {
    icon: "/images/svg-icons/trial-icon.svg",
    className: "bg-blue-50 text-blue-600",
  },
  Cancelled: {
    icon: "/images/svg-icons/cancelled-icon.svg",
    className: "bg-red-50 text-red-600",
  },
};

export default function SubscriptionHeader({ name, id, status, onBack }: SubscriptionHeaderProps) {
  const config = statusConfig[status as keyof typeof statusConfig] ?? statusConfig.Cancelled;

  return (
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-2xl font-bold text-custom-charcoal mb-3">{name}</h1>
        <p className="text-sm text-custom-dim-gray mb-3">Subscription ID: #A{id}</p>

        <span className={`mt-2 inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium ${config.className}`}>
          <Image
            src={config.icon}
            alt={status}
            width={14}
            height={14}
          />
          {status}
        </span>
      </div>

      <button
        onClick={onBack}
        className="flex items-center gap-2 text-custom-dim-gray cursor-pointer hover:text-custom-charcoal text-sm"
      >
        <ArrowLeft size={16} /> Back to List
      </button>
    </div>
  );
}