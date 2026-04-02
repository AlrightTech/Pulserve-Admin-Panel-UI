import React from 'react';
import { ShieldCheck } from 'lucide-react';

const PrivacyNotice = () => {
  return (
    <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex gap-3 items-start">
      <div className="text-blue-900 mt-0.5">
        <ShieldCheck size={20} />
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-bold text-blue-900 font-dm-sans">Data Privacy Notice</h4>
        <p className="text-xs text-blue-800/80 leading-relaxed">
          Admins can view aggregated survey response data for platform monitoring purposes. 
          Personal respondent data (PII) is strictly encrypted and not accessible in this view.
        </p>
      </div>
    </div>
  );
};

export default PrivacyNotice;