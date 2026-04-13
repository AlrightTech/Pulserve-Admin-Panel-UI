"use client";
import React from 'react';
import { X } from 'lucide-react';
import Button from '@/app/components/ui/Button';

const EditSubscriptionModal = ({ isOpen, onClose, data }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      
      {/* Separate Backdrop — click karo toh modal band ho */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="bg-custom-white rounded-xl border border-custom-border shadow-2xl w-full max-w-xl z-10 overflow-hidden relative flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="flex flex-col p-6 pt-4 pb-2 shrink-0">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-custom-charcoal hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X size={14} />
            </button>
          </div>
          <div className="mt-2">
            <h2 className="text-xl font-bold text-custom-charcoal">
              Edit Subscription
            </h2>
          </div>
        </div>

        {/* Form */}
        <form className="px-8 py-6 space-y-4 overflow-y-auto max-h-[60vh] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">

          {/* Plan */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-800">Plan</label>
            <div className="relative mt-1.5">
              <select className="w-full appearance-none bg-white border border-gray-200 text-gray-800 text-sm px-3.5 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer">
                <option>Premium</option>
                <option>Standard</option>
                <option>Basic</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>

          {/* Billing Cycle */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-800">Billing Cycle</label>
            <div className="relative mt-1.5">
              <select className="w-full appearance-none bg-white border border-gray-200 text-gray-800 text-sm px-3.5 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer">
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>

          {/* Status */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-800">Status</label>
            <div className="relative mt-1.5">
              <select className="w-full appearance-none bg-custom-white border border-gray-200 text-gray-800 text-sm px-3.5 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer">
                <option>Active</option>
                <option>Trial</option>
                <option>Cancelled</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>

          {/* Expiry Date */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-800">Expiry Date</label>
            <input
              type="date"
              defaultValue="2026-04-15"
              className="mt-1.5 w-full bg-custom-white border border-gray-200 text-gray-800 text-sm px-3.5 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 pt-2">
            <Button
              variant="soft"
              rounded="lg"
              type="button"
              onClick={onClose}
              className="px-6 text-sm"
            >
              Cancel
            </Button>

            <Button
              variant="filled"
              rounded="lg"
              type="submit"
              className="px-6 text-sm"
            >
              Save Changes
            </Button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditSubscriptionModal;