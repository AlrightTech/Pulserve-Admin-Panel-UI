"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import Button from '@/app/components/ui/Button';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col w-full max-w-[440px] mx-auto px-4 py-8 bg-custom-white">
      <div className="flex justify-center mb-12">
        <Image src="/images/pulserv-logo2.png" alt="Pulserv Logo" width={180} height={50} className="object-contain" />
      </div>

      <div className="relative mb-10 text-center">
        <Link href="/" className="absolute left-0 top-1 text-custom-dark-blue hover:text-custom-coral"><ArrowLeft size={24} /></Link>
        <h2 className="text-2xl font-bold text-custom-dark-gray font-dm-sans">Welcome back</h2>
        <p className="text-custom-medium-gray text-sm mt-2">Log in to access your Pulserv dashboard</p>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-custom-charcoal mb-4">Login</h3>
        <form className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-bold text-custom-dim-gray uppercase tracking-wider text-[10px]">E-mail</label>
            <input type="email" placeholder="admin@email.com" className="w-full px-4 py-3 bg-custom-bg-light border border-custom-border rounded-lg focus:outline-none text-custom-charcoal" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-custom-dim-gray uppercase tracking-wider text-[10px]">Password</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="••••" className="w-full px-4 py-3 bg-custom-bg-light border border-custom-border rounded-lg focus:outline-none text-custom-charcoal" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-custom-medium-gray"><Eye size={18} /></button>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs">
            <label className="flex items-center gap-2 text-custom-medium-gray cursor-pointer">
              <input type="checkbox" className="w-3.5 h-3.5 border-custom-border" /> Remember me
            </label>
<Link href="/forgot-password" className="text-[12px] font-bold text-custom-coral">
  Forgot Password?
</Link>          </div>

          <Button variant="filled" rounded="lg" className="w-full py-3.5 bg-custom-dark-blue hover:bg-[#001D35]">Login</Button>
        </form>
        <p className="text-center text-sm text-custom-medium-gray pt-4">
          Don't have an account? <Link href="/signup" className="text-custom-coral font-bold">Login</Link>
        </p>
      </div>
    </div>
  );
}