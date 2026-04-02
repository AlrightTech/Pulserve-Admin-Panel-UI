import React from 'react';
import { Download, Plus } from 'lucide-react';
// Path check karlein as per your project structure
import Button from '@/app/components/ui/Button'; 

const WelcomeHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 lg:gap-6 py-4 lg:py-6">
      
      {/* Left Section: Welcome Text */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-custom-charcoal leading-tight font-dm-sans">
          Welcome to Admin Dashboard
        </h1>
        <p className="text-custom-medium-gray font-medium text-[18px] leading-[179%] font-dm-sans">
          Monitor platform activity and manage client accounts
        </p>
      </div>

      {/* Right Section: Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
        
        {/* Export Report: Coral Border + Charcoal Text + Small Font */}
        <Button 
          variant="outlined" 
          rounded="sm"
          className="px-3.5 text-sm font-normal font-dm-sans"
        >
          <Download size={14} /> {/* Small icon for small text */}
          <span>Export Report</span>
        </Button>

        {/* Create New Survey: Filled variant */}
        <Button 
          variant="filled" 
          rounded="lg"
          className="px-3.5 shadow-md text-sm font-dm-sans"
        >
          <Plus size={14} />
          <span>Create New Survey</span>
        </Button>
      </div>
    </div>
  );
};

export default WelcomeHeader;