"use client";
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Button from '@/app/components/ui/Button';

export default function VerifyOTPPage() {
  // 6 digits ke liye state aur refs
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false; // Sirf numbers allow hain

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Agly input par focus shift karna
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Backspace dabane par pichly input par jana
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col w-full mx-auto px-8 lg:px-14 py-8 bg-custom-white">
      
      {/* Logo Section */}
      <div className="flex justify-center mb-4">
        <Image src="/images/pulserv-logo2.png" alt="Pulserv Logo" width={245} height={60} className="object-contain" />
      </div>

      {/* Back Arrow */}
      <div>
        <Link href="/signup" className="text-custom-dark-blue hover:text-custom-coral inline-block">
          <ArrowLeft size={21} />
        </Link>
      </div>

      {/* Heading Section */}
      <div className="mb-8 mt-8 lg:mt-18 text-left lg:px-12">
        <h2 className="text-4xl font-bold text-custom-charcoal font-dm-sans">
          Verify OTP
        </h2>
        <p className="text-custom-dim-gray text-lg lg:text-xl mt-6 font-normal">
          We've sent a 6-digit verification code to your email.
        </p>
      </div>

      <div className="space-y-6 lg:px-12">
        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          
          {/* OTP Inputs - Now Functional */}
          <div className="flex justify-start gap-8 lg:gap-12">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                ref={(el) => { inputRefs.current[index] = el; }}                
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                placeholder="-"
                className="w-11 h-14 lg:w-12 lg:h-12 text-center text-xl font-medium bg-[#F7FAFC] border border-custom-border rounded-sm focus:outline-none focus:border-custom-coral placeholder:text-custom-coral transition-all"
              />
            ))}
          </div>

          {/* Resend & Timer Row */}
          <div className="flex justify-between items-center text-base lg:text-base">
            <p className="text-custom-dim-gray lg:text-base">
              Didn't receive?{' '}
              <button type="button" className="text-custom-coral font-normal underline hover:opacity-80">
                Resend it
              </button>
            </p>
            <span className="text-custom-charcoal font-normal">120 s</span>
          </div>

          <Button 
            href="/"
            variant="filled" 
            rounded="lg" 
            className="w-full py-4 bg-custom-dark-blue hover:bg-[#001D35] font-semibold text-custom-white text-sm mt-4"
          >
            Go to Dashboard
          </Button>
        </form>
      </div>
    </div>
  );
}