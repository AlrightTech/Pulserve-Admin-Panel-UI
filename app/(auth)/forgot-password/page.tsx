"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Button from '@/app/components/ui/Button';

export default function ForgotPasswordPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Yahan link send karne ka logic aaye ga
    // Filhaal direct redirect kar rahay hain next step par
    router.push('/update-password'); 
  };

  return (
    <div className="flex flex-col w-full mx-auto px-8 lg:px-14 py-8 bg-custom-white">
      
      {/* Logo Section */}
      <div className="flex justify-center mb-4">
        <Image 
          src="/images/pulserv-logo2.png" 
          alt="Pulserv Logo" 
          width={245} 
          height={60}
          style={{ height: 'auto' }} 
          className="object-contain" 
        />
      </div>

      {/* Back Arrow to Login */}
      <div>
        <Link 
          href="/login" 
          className="text-custom-dark-blue hover:text-custom-coral inline-block"
        >
          <ArrowLeft size={21} />
        </Link>
      </div>

      {/* Heading Section */}
      <div className="mb-8 mt-8 lg:mt-18 text-left lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-custom-charcoal font-dm-sans">
          Forgot Password
        </h2>
      </div>

      <div className="space-y-6 lg:px-12">
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* E-mail Field */}
          <div className="space-y-2">
            <label className="font-medium text-custom-auth tracking-tight text-base">
              E-mail
            </label>
            <input 
              required
              type="email" 
              placeholder="Enter registered email" 
              className="mt-2 w-full px-3 py-3 bg-[#F7FAFC] border border-custom-border rounded-lg focus:outline-none text-custom-custom-authtext text-base" 
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit"
            variant="filled" 
            rounded="lg" 
            className="w-full py-3.5 bg-custom-dark-blue hover:bg-custom-coral mt-6 font-semibold text-custom-white text-sm"
          >
            Send Reset Link
          </Button>
        </form>
      </div>
    </div>
  );
}