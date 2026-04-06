"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Router import kiya
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import Button from '@/app/components/ui/Button';

export default function UpdatePasswordPage() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter(); // Router initialize kiya

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Yahan password update karne ki API call hogi
    // Success hone par login page par redirect karein
    router.push('/login'); 
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
          className="object-contain" 
        />
      </div>

      {/* Back Arrow - Link to Login */}
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
          Update Password
        </h2>
      </div>

      <div className="space-y-6 lg:px-12">
        {/* onSubmit handler add kiya */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* New Password Field */}
          <div className="space-y-2">
            <label className="font-medium text-custom-auth tracking-tight text-base">
              New Password
            </label>
            <div className="mt-2 flex w-full border border-custom-border rounded-lg overflow-hidden bg-[#F7FAFC]">
              <input 
                required
                type={showPass ? "text" : "password"} 
                placeholder="@#*%" 
                className="flex-1 px-3 py-3 bg-[#F7FAFC] focus:outline-none text-custom-custom-authtext text-base" 
              />
              <button 
                type="button" 
                onClick={() => setShowPass(!showPass)} 
                className="px-4 bg-[#EDF2F7] border-l border-custom-border text-custom-medium-gray flex items-center justify-center"
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <label className="font-medium text-custom-auth tracking-tight text-base">
              Confirm Password
            </label>
            <div className="mt-2 flex w-full border border-custom-border rounded-lg overflow-hidden bg-[#F7FAFC]">
              <input 
                required
                type={showConfirm ? "text" : "password"} 
                placeholder="@#*%" 
                className="flex-1 px-3 py-3 bg-[#F7FAFC] focus:outline-none text-custom-custom-authtext text-base" 
              />
              <button 
                type="button" 
                onClick={() => setShowConfirm(!showConfirm)} 
                className="px-4 bg-[#EDF2F7] border-l border-custom-border text-custom-medium-gray flex items-center justify-center"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit"
            variant="filled" 
            rounded="lg" 
            className="w-full py-3.5 bg-custom-dark-blue hover:bg-[#001D35] mt-6 font-bold text-white text-base"
          >
            Update Password
          </Button>
        </form>
      </div>
    </div>
  );
}