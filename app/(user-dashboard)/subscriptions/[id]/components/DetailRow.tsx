import React from "react";

interface DetailRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export default function DetailRow({ icon, label, value }: DetailRowProps) {
  return (
    <div className="space-y-1">
      <p className="text-sm font-normal text-custom-authtext">{label}</p>
      <div className="flex items-center gap-2 text-sm font-medium text-custom-charcoal">
        <span className="text-custom-dim-gray">{icon}</span> {value}
      </div>
    </div>
  );
}