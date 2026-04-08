import React from 'react';
import { ShieldCheck } from 'lucide-react';

const PrivacyNotice = () => {
  return (
    <div className="border border-blue-200 bg-blue-100/50 rounded-xl p-4 flex gap-3 items-start">
      <div className="text-blue-900 mt-0.5">
        {/* <ShieldCheck size={20} /> */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_343_738)">
            <path d="M9.99999 18.3332C14.6024 18.3332 18.3333 14.6022 18.3333 9.99984C18.3333 5.39746 14.6024 1.6665 9.99999 1.6665C5.39762 1.6665 1.66666 5.39746 1.66666 9.99984C1.66666 14.6022 5.39762 18.3332 9.99999 18.3332Z" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 13.3333V10" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 6.6665H10.0083" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_343_738">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
            </svg>
      </div>
      <div className="space-y-1">
        <h4 className="text-xl font-semibold text-custom-charcoal font-dm-sans">Data Privacy Notice</h4>
        <p className="text-[12px] text-custom-dim-gray">
          Admins can access aggregated survey response data and qualitative response content. Personal identifiable information (PII) of respondents is not accessible.
        </p>
      </div>
    </div>
  );
};

export default PrivacyNotice;