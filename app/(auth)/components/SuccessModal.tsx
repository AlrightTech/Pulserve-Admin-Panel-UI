"use client";
import React from "react";
import { X, Check } from "lucide-react";
import Button from "@/app/components/ui/Button";
import Link from "next/link";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg bg-white rounded-2xl p-8 shadow-xl text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        {/* Success Icon Container */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-custom-coral rounded-full flex items-center justify-center shadow-lg shadow-orange-200">
            <Check size={40} className="text-custom-white stroke-[3px]" />
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-3xl font-semibold text-custom-charcoal mb-4">
          Account created successfully
        </h2>
        <p className="text-custom-dim-gray font-normal text-xl mb-6">
          Select a plan to continue
        </p>

        {/* CTA Button */}
        <Link href="/activation">
          <Button
            variant="filled"
            className="w-42 py-3 bg-custom-dark-blue text-custom-white font-normal rounded-lg mx-auto block"
          >
            Choose Plan
          </Button>
        </Link>
      </div>
    </div>
  );
}
