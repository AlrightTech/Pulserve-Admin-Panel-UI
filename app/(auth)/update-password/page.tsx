"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import Button from '@/app/components/ui/Button';

export default function UpdatePasswordPage() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex flex-col w-full max-w-[440px] mx-auto px-4 py-8 bg-custom-white">
      {/* 1. Top Logo */}
      <div className="flex justify-center mb-12">
        <Image src="/images/pulserv-logo2.png" alt="Pulserv Logo" width={180} height={50} className="object-contain" />
      </div>

      {/* 2. Back Link & Header */}
      <div className="relative mb-14">
        <Link href="/login" className="absolute left-0 top-1 text-custom-dark-blue"><ArrowLeft size={24} /></Link>
        <h2 className="text-2xl font-bold text-custom-dark-gray text-center font-dm-sans">Update Password</h2>
      </div>

      {/* 3. Form */}
      <form className="space-y-6">
        {/* New Password */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-custom-dim-gray uppercase tracking-wider">New Password</label>
          <div className="relative">
            <input 
              type={showPass ? "text" : "password"} 
              placeholder="@#*%" 
              className="w-full px-4 py-3 bg-custom-bg-light border border-custom-border rounded-lg focus:outline-none" 
            />
            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-custom-medium-gray">
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-custom-dim-gray uppercase tracking-wider">Confirm Password</label>
          <div className="relative">
            <input 
              type={showConfirm ? "text" : "password"} 
              placeholder="@#*%" 
              className="w-full px-4 py-3 bg-custom-bg-light border border-custom-border rounded-lg focus:outline-none" 
            />
            <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-custom-medium-gray">
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <Button variant="filled" rounded="lg" className="w-full py-3.5 bg-custom-dark-blue mt-4">
          Update Password
        </Button>
      </form>
    </div>
  );
}