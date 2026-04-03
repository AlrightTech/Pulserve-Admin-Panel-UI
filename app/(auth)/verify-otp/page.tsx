"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Button from '@/app/components/ui/Button';

export default function VerifyOTPPage() {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto px-10 py-10 bg-custom-white">
      
      {/* Logo - Left Aligned */}
      <div className="flex justify-center mb-16">
        <Image src="/images/pulserv-logo2.png" alt="Pulserv Logo" width={180} height={50} className="object-contain" />
      </div>

      {/* Back Arrow */}
      <div className="mb-8">
        <Link href="/forgot-password" title="Go back" className="inline-block text-custom-dark-blue hover:text-custom-coral">
          <ArrowLeft size={20} />
        </Link>
      </div>

      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-custom-dark-gray font-dm-sans mb-2">Verify OTP</h2>
        <p className="text-custom-medium-gray text-sm font-medium">
          We've sent a 6-digit verification code to your email.
        </p>
      </div>

      <form className="space-y-8">
        
        {/* OTP Inputs - Left Aligned with fixed gap */}
        <div className="flex justify-start gap-3">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              placeholder="-"
              className="w-12 h-14 text-center text-xl font-semibold bg-custom-bg-light border border-custom-border rounded-lg focus:border-custom-coral focus:outline-none placeholder:text-custom-coral"
            />
          ))}
        </div>

        {/* Resend & Timer Row */}
        <div className="flex justify-between items-center text-sm">
          <p className="text-custom-medium-gray">
            Didn't receive?{' '}
            <button type="button" className="text-custom-coral font-bold underline hover:opacity-80">
              Resend it
            </button>
          </p>
          <span className="text-custom-dark-gray font-medium">120 s</span>
        </div>

        <Button variant="filled" rounded="lg" className="w-full py-3.5 bg-custom-dark-blue hover:bg-[#001D35]">
          Go to Dashboard
        </Button>

      </form>
    </div>
  );
}