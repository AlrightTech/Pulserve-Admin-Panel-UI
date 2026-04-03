"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const LeftSection = () => {
  const pathname = usePathname();

  const getContent = () => {
    if (pathname.includes('/forgot-password')) {
      return {
        title: "Secure access matters.",
        desc: "Reset your password to continue using Pulserv safely."
      };
    }
    if (pathname.includes('/update-password')) {
      return {
        title: "Protect your account.",
        desc: "Set a new password to keep your data secure."
      };
    }
    // Default Login
    return {
      title: "Measure what matters. Act in real time.",
      desc: "AI-powered pulse surveys for teams and customers."
    };
  };

  const { title, desc } = getContent();

  return (
    <div 
      className="relative w-full h-full flex flex-col justify-between p-12 lg:p-16 text-white overflow-hidden"
      style={{
        backgroundImage: 'url("/images/leftside-authbg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 z-0 bg-custom-dark-blue/40" />

      {/* Grid Pattern Overlay Placeholder */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="h-10 z-10"></div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-6 flex-1 justify-center">
        <h1 className="text-3xl font-semibold leading-[1.2] max-w-md font-dm-sans">
          {title}
        </h1>
        <p className="text-gray-200 text-base md:text-lg max-w-sm font-light opacity-90">
          {desc}
        </p>
      </div>

      <div className="relative z-10 flex justify-center items-center">
         <Image 
            src="/images/pulserv-logo.png" 
            alt="Pulserv Logo" 
            width={160} 
            height={50} 
            className="object-contain" 
         />
      </div>
    </div>
  );
};

export default LeftSection;