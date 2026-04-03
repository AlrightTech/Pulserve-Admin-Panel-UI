"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Button from '@/app/components/ui/Button';

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col w-full max-w-[440px] mx-auto px-4 py-8 bg-custom-white">
      <div className="flex justify-center mb-12">
        <Image src="/images/pulserv-logo2.png" alt="Pulserv Logo" width={180} height={50} className="object-contain" />
      </div>

      <div className="relative mb-10">
        <Link href="/login" className="absolute left-0 top-1 text-custom-dark-blue"><ArrowLeft size={24} /></Link>
        <h2 className="text-2xl font-bold text-custom-dark-gray text-center font-dm-sans">Forgot Password</h2>
      </div>

      <div className="space-y-6 mt-12">
        <form className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-bold text-custom-dim-gray uppercase tracking-wider text-[10px]">E-mail</label>
            <input type="email" placeholder="Enter registered email" className="w-full px-4 py-3 bg-custom-bg-light border border-custom-border rounded-lg focus:outline-none text-custom-charcoal" />
          </div>

          <Button variant="filled" rounded="lg" className="w-full py-3.5 bg-custom-dark-blue mt-4">Send Reset Link</Button>
        </form>
      </div>
    </div>
  );
}