"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Button from '@/app/components/ui/Button';

export default function VerifyEmailPage() {
  return (
    <div className="flex flex-col w-full mx-auto px-8 lg:px-14 py-8 bg-custom-white">
      
      {/* Logo Section - Consistent with Signup */}
      <div className="flex justify-center mb-4">
        <Image 
          src="/images/pulserv-logo2.png" 
          alt="Pulserv Logo" 
          width={245} 
          height={60} 
          className="object-contain" 
        />
      </div>

      {/* Back Arrow */}
      <div>
        <Link 
          href="/signup" 
          className="text-custom-dark-blue hover:text-custom-coral inline-block"
        >
          <ArrowLeft size={21} />
        </Link>
      </div>

      {/* Heading Section - Spacing exact like previous auth pages */}
      <div className="mb-8 mt-8 lg:mt-18 text-left lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-custom-charcoal tracking-tight font-dm-sans">
          Verify OTP
        </h2>
        <p className="text-custom-dim-gray text-lg lg:text-xl mt-6 font-normal">
          The 6-digit verification code has been automatically fetched
        </p>
        
        {/* Resend Link */}
        <button 
          type="button" 
          className="text-custom-dim-gray font-normal underline mt-4 hover:opacity-80 block text-base cursor-pointer"
        >
          Resend Again
        </button>
      </div>

      {/* Button Section */}
      <div className="lg:px-12 mt-10">
        <Button 
          href="/"
          variant="filled" 
          rounded="lg" 
          className="w-full py-4 bg-[#D1D5DB] text-custom-white font-semibold text-sm cursor-not-allowed opacity-40"
          disabled
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
}