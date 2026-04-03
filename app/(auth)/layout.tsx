import React from 'react';
import LeftSection from './components/LeftSection';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    // 'h-screen' zaroori hai taake layout browser ki height ke barabar ho
    <div className="flex h-screen w-full overflow-hidden bg-white">
      
      {/* Left Side: Fixed Image Area */}
      <div className="hidden lg:block lg:w-[50%] h-full relative">
        <LeftSection />
      </div>

      {/* Right Side: Form Area (Scrollable if needed) */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 overflow-y-auto bg-white">
        <div className="w-full max-w-[420px] py-10">
          {children}
        </div>
      </div>
      
    </div>
  );
}