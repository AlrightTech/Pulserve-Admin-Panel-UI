import React from 'react';
import { ShieldCheck } from 'lucide-react';

const PrivacyNotice = () => {
  return (
    <div className="border border-blue-200 bg-blue-100/50 rounded-xl p-4 flex gap-3 items-start">
      <div className="text-blue-900 mt-0.5">
        {/* <ShieldCheck size={20} /> */}
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.50001 0C7.64376 0 7.78751 0.03125 7.91876 0.090625L13.8031 2.5875C14.4906 2.87813 15.0031 3.55625 15 4.375C14.9844 7.475 13.7094 13.1469 8.32501 15.725C7.80314 15.975 7.19689 15.975 6.67501 15.725C1.29064 13.1469 0.0156392 7.475 1.4214e-05 4.375C-0.00311079 3.55625 0.509389 2.87813 1.19689 2.5875L7.08439 0.090625C7.21251 0.03125 7.35626 0 7.50001 0ZM7.50001 2.0875V13.9C11.8125 11.8125 12.9719 7.19062 13 4.41875L7.50001 2.0875Z" fill="#07233B"/>
        </svg>
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-normal text-custom-dark-blue font-dm-sans">Data Privacy Notice</h4>
        <p className="text-[12px] text-custom-dim-gray">
          Admins can view aggregated survey response data for platform monitoring purposes. 
          Personal respondent data (PII) is strictly encrypted and not accessible in this view.
        </p>
      </div>
    </div>
  );
};

export default PrivacyNotice;