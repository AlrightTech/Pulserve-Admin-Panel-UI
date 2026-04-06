"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import Button from "@/app/components/ui/Button";
import SuccessModal from "../components/SuccessModal";

export default function Signup() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form submit handler jo modal open karega
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
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

      {/* Back Arrow */}
      <div>
        <Link
          href="/login"
          className="text-custom-dark-blue hover:text-custom-coral inline-block"
        >
          <ArrowLeft size={21} />
        </Link>
      </div>

      {/* Header Text */}
      <div className="mb-8 mt-8 lg:mt-18 text-left lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-custom-charcoal tracking-tight font-dm-sans">
          Sign Up
        </h2>
        <p className="text-custom-dim-gray text-lg lg:text-xl mt-8 font-normal">
          Sign up to start using Pulsurv
        </p>
      </div>

      <div className="space-y-6 lg:px-12">
        {/* onSubmit handler yahan add kiya hai taake button click par modal khule */}
        <form className="space-y-5" onSubmit={handleSignup}>
          {/* Full Name Field */}
          <div className="space-y-2">
            <label className="font-medium text-custom-auth tracking-tight text-base">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="mt-2 w-full px-3 py-3 bg-[#F7FAFC] border border-custom-border rounded-lg focus:outline-none text-custom-custom-authtext text-base"
            />
          </div>

          {/* E-mail Field */}
          <div className="space-y-2">
            <label className="font-medium text-custom-auth tracking-tight text-base">
              E-mail
            </label>
            <input
              type="email"
              placeholder="user123##@email.com"
              className="mt-2 w-full px-3 py-3 bg-[#F7FAFC] border border-custom-border rounded-lg focus:outline-none text-custom-custom-authtext text-base"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="font-medium text-custom-auth tracking-tight text-base">
              Password
            </label>
            <div className="mt-2 flex w-full border border-custom-border rounded-lg overflow-hidden bg-[#F7FAFC]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="flex-1 px-3 py-3 bg-[#F7FAFC] focus:outline-none text-custom-custom-authtext text-base"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="px-4 bg-[#EDF2F7] border-l border-custom-border text-custom-medium-gray flex items-center justify-center"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
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
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter password"
                className="flex-1 px-3 py-3 bg-[#F7FAFC] focus:outline-none text-custom-custom-authtext text-base"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="px-4 bg-[#EDF2F7] border-l border-custom-border text-custom-medium-gray flex items-center justify-center"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Signup Button */}
          <Button
            type="submit"
            variant="filled"
            rounded="lg"
            className="w-full py-3.5 bg-custom-dark-blue hover:bg-[#001D35] mt-6 font-bold text-white"
          >
            Sign up
          </Button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-base text-custom-medium-gray pt-2">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-custom-coral font-medium underline"
          >
            Sign In
          </Link>
        </p>
      </div>

      {/* Success Modal Integration */}
      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}