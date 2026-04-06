"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const LeftSection = () => {
  const pathname = usePathname();

  const getContent = () => {
    // 1. Signup Case
    if (pathname.includes('/signup')) {
      return {
        title: "Start listening smarter.",
        desc: "Create surveys, collect feedback, and gain AI-driven insights."
      };
    }

    // 2. Forgot Password Case
    if (pathname.includes('/forgot-password')) {
      return {
        title: "Secure access matters.",
        desc: <>Reset your password to continue using Pulserv <br /> safely.</>
      };
    }

    // 3. Update Password Case
    if (pathname.includes('/update-password')) {
      return {
        title: "Protect your account.",
        desc: "Set a new password to keep your data secure."
      };
    }

    // 4. Verify OTP Case
    if (pathname.includes('/verify-otp')) {
      return {
        title: "Verifying Your Email",
        desc: "We've sent a verification Code to your email address to confirm your account."
      };
    }

    // 5. Verify Email Case (Automatic Fetch wala page)
    if (pathname.includes('/verify-email')) {
      return {
        title: "Almost there.",
        desc: "Verify your email to keep your account protected."
      };
    }

    // 6. Reset Password Case (Agar alag route hai)
    if (pathname.includes('/reset-password')) {
      return {
        title: "Recovery in progress.",
        desc: "Follow the steps to regain access to your account."
      };
    }

    // Default: Login Page
    return {
      title: <>Measure what matters. Act in real  time.</>,    
      desc: <>AI-powered pulse surveys for teams and <br /> customers.</>,
    };
  };

  const { title, desc } = getContent();

  return (
    <div 
      className="relative w-full h-screen flex flex-col justify-between p-12 lg:p-16 text-white overflow-hidden"
      style={{
        backgroundImage: 'url("/images/leftside-authbg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 z-0 bg-[#001D35]/40" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="h-10 z-10"></div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-6 flex-1 justify-center">
        <h1 className="text-3xl lg:text-4xl font-semibold text-custom-white leading-[1.3] font-dm-sans max-w-sm">
          {title}
        </h1>
        <p className="text-lg max-w-xs font-regular text-custom-white opacity-90">
          {desc}
        </p>
      </div>

      {/* Bottom Logo */}
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