"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import Button from "@/app/components/ui/Button";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col w-full mx-auto px-8 lg:px-14 py-8 bg-custom-white">
      <div className="flex justify-center mb-4">
        <Image
          src="/images/pulserv-logo2.png"
          alt="Pulserv Logo"
          width={245}
          height={60}
          className="object-contain"
        />
      </div>

      <div>
        <Link
          href="/"
          className=" text-custom-dark-blue hover:text-custom-coral"
        >
          <ArrowLeft size={20} />
        </Link>
      </div>

      <div className="mb-10 text-center lg:mt-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-custom-charcoal tracking-wide font-dm-sans">
          Welcome back
        </h2>
        <p className="text-custom-dim-gray text-sm lg:text-lg mt-4">
          Log in to access your Pulserv dashboard
        </p>
      </div>

      <div className="space-y-6 lg:px-10 ">
        <h3 className="text-3xl font-bold text-custom-charcoal mb-8">Login</h3>
        <form className="space-y-5">
          <div className="space-y-2">
            <label className=" font-medium text-custom-auth tracking-tight text-base">
              E-mail
            </label>
            <input
              type="email"
              placeholder="admin@email.com"
              className="mt-3 w-full px-3 py-3 bg-[#F7FAFC] border border-custom-border rounded-lg focus:outline-none text-custom-custom-authtext text-base"
            />{" "}
          </div>

          <div className="space-y-2 mt-8">
            <label className="font-medium text-custom-auth tracking-tight text-base">
              Password
            </label>
            <div className="mt-3 flex w-full border border-custom-border rounded-lg overflow-hidden bg-[#F7FAFC]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="****"
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

          <div className="flex justify-between items-center lg:text-md">
            <label className="flex items-center gap-2 cursor-pointer font-normal text-custom-auth tracking-tight text-base">
              <input 
                type="checkbox" 
                className="w-4 h-4 appearance-none border border-solid border-[#CFD9E0] rounded-[4px] cursor-pointer checked:bg-custom-coral checked:border-custom-coral relative transition-all duration-200"
              />
              Remember me
            </label>
            <Link
              href="/forgot-password"
              className="text-md font-semibold text-custom-coral underline"
            >
              Forgot Password?
            </Link>{" "}
          </div>

          <Button
            variant="filled"
            rounded="lg"
            className="text-sm! w-full py-3.5 bg-custom-dark-blue hover:bg-[#001D35] mt-6"
          >
            Login
          </Button>
        </form>
        <p className="text-center text-base text-custom-medium-gray pt-0">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-custom-coral font-normal underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
