import React from 'react';
import Button from '@/app/components/ui/Button'; 
import MainHeading from '@/app/components/ui/MainHeading'; 

interface WelcomeHeaderProps {
  title: string;
  subtitle: string;
  primaryBtnText?: string;
  PrimaryIcon?: React.ElementType;
  onPrimaryClick?: () => void;
  showSecondaryBtn?: boolean;
  primaryBtnClass?: string;
}

const WelcomeHeader = ({ 
  title, 
  subtitle, 
  primaryBtnText = "Create New",
  PrimaryIcon,
  onPrimaryClick,
  showSecondaryBtn = true,
  primaryBtnClass = ""
}: WelcomeHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 lg:gap-6">
      <div className="space-y-1 pt-2">
        <MainHeading text={title} />
        <p className="text-sm text-gray-500 font-sans">{subtitle}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        {showSecondaryBtn && (
          <Button variant="outlined" rounded="sm" className="px-4 border-custom-coral text-custom-charcoal">
            <span>Export Report</span>
          </Button>
        )}
        <Button 
          variant="filled" 
          rounded="md"
          onClick={onPrimaryClick}
          className={`px-4 shadow-md flex items-center justify-center gap-2 h-10 ${primaryBtnClass}`}
        >
          {PrimaryIcon && <PrimaryIcon size={16} />}
          <span className="whitespace-nowrap">{primaryBtnText}</span>
        </Button>
      </div>
    </div>
  );
};

export default WelcomeHeader;