import Image from "next/image"; 
import React from 'react';
import Button from '@/app/components/ui/Button'; 
import MainHeading from '@/app/components/ui/MainHeading';
import { Download, Plus } from "lucide-react";

interface WelcomeHeaderProps {
  title: string;
  subtitle?: string; 
  primaryBtnText?: string;
  PrimaryIcon?: React.ElementType; 
  onPrimaryClick?: () => void;
  showSecondaryBtn?: boolean;
  primaryBtnClass?: string;
  primaryButton?: React.ReactNode; 
}

const WelcomeHeader = ({ 
  title, 
  subtitle, 
  primaryButton, // Destructure here
  primaryBtnText = "Create New Survey", 
  onPrimaryClick,
  showSecondaryBtn = true,
  primaryBtnClass = ""
}: WelcomeHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 lg:gap-6">
      <div className="space-y-1 pt-2">
        <MainHeading text={title} />
        {subtitle && <p className="font-sans sub-heading-db">{subtitle}</p>}
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
        {showSecondaryBtn && (
          <Button 
              variant="outlined" 
              rounded="md" 
              className="px-4 rounded-lg border-custom-coral font-normal group [&_span]:gap-4 btn1-text-size border-[1.4px]">
              <Image 
                src="/images/svg-icons/download-icon.svg" 
                alt="Download" 
                width={12} 
                height={12} 
                className="transition-all duration-500 group-hover:brightness-0 group-hover:invert"
              />
              Export Report
          </Button>
        )}   

        {primaryButton ? (
          primaryButton
        ) : (
          <Button 
            variant="filled" 
            rounded="lg"
            onClick={onPrimaryClick}
            className={`px-3 py-3.5 ${primaryBtnClass}`}
          >
            <Plus size={15} strokeWidth={2.5} />
            <span className="text-sm font-medium whitespace-nowrap">
              {primaryBtnText}
            </span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default WelcomeHeader;