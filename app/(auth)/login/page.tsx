"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import Button from '@/app/components/ui/Button';

export default function Login

() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col w-full mx-auto px-8 lg:px-14 py-8 bg-custom-white">
      <div className="flex justify-center mb-4">
        <Image src="/images/pulserv-logo2.png" alt="Pulserv Logo" width={250} height={60} className="object-contain" />
      </div>

      <div>
                <Link href="/" className=" text-custom-dark-blue hover:text-custom-coral"><ArrowLeft size={20} /></Link>

      </div>

      <div className="mb-10 text-center lg:mt-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-custom-dark-gray font-dm-sans">Welcome back</h2>
        <p className="text-custom-medium-gray text-sm lg:text-xl mt-4">Log in to access your Pulserv dashboard</p>
      </div>

      <div className="space-y-6 lg:px-10 ">
        <h3 className="text-3xl font-bold text-custom-charcoal mb-8">Login</h3>
        <form className="space-y-5">
          <div className="space-y-2">
            <label className=" font-normal text-custom-dim-gray tracking-wider text-md">E-mail</label>
            <input type="email" placeholder="admin@email.com" className="mt-3 w-full px-3 py-3 bg-custom-bg-light border border-custom-border rounded-lg focus:outline-none text-custom-charcoal" />
          </div>

          <div className="space-y-2">
            <label className="text-md font-normal text-custom-dim-gray tracking-wider ">Password</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="••••" className="mt-3 w-full px-3 py-3 bg-custom-bg-light border border-custom-border rounded-lg focus:outline-none text-custom-charcoal" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-custom-medium-gray"><Eye size={18} /></button>
            </div>
          </div>

          <div className="flex justify-between items-center lg:text-md">
            <label className="flex items-center gap-2 text-custom-medium-gray cursor-pointer">
              <input type="checkbox" className="w-4 h-4 border-custom-border" /> Remember me
            </label>
<Link href="/forgot-password" className="text-md font-semibold text-custom-coral underline">
  Forgot Password?
</Link>          </div>

          <Button variant="filled" rounded="lg" className="w-full py-3.5 bg-custom-dark-blue hover:bg-[#001D35]">Login</Button>
        </form>
        <p className="text-center text-lg text-custom-medium-gray pt-4">
          Don't have an account? <Link href="/signup" className="text-custom-coral font-bold underline">Signup</Link>
        </p>
      </div>
    </div>
  );
}