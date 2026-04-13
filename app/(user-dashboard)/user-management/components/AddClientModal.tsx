"use client";
import React from 'react';
import { X } from 'lucide-react';
import Button from '@/app/components/ui/Button';

interface AddClientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddClientModal = ({ isOpen, onClose }: AddClientModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="bg-custom-white rounded-xl border border-custom-border shadow-2xl w-full max-w-xl z-10 overflow-hidden relative flex flex-col max-h-[90vh]">
        
        {/* Header — EditSubscriptionModal jaisa */}
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
            <h2 className="text-xl font-bold text-custom-charcoal">Add New Client</h2>
          </div>
        </div>

        {/* Form — same styles as EditSubscriptionModal */}
        <form className="px-8 py-6 space-y-4 overflow-y-auto max-h-[60vh] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">

          {/* Company Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-800">Company Name</label>
            <input
              type="text"
              placeholder="Enter company name"
              className="mt-1.5 w-full bg-white border border-gray-200 text-gray-800 text-sm px-3.5 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Primary Contact Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-800">Primary Contact Name</label>
            <input
              type="text"
              placeholder="Enter contact name"
              className="mt-1.5 w-full bg-white border border-gray-200 text-gray-800 text-sm px-3.5 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Contact Email */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-800">Contact Email</label>
            <input
              type="email"
              placeholder="Enter contact email"
              className="mt-1.5 w-full bg-white border border-gray-200 text-gray-800 text-sm px-3.5 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Subscription Plan + Status — 2 col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Subscription Plan */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-800">Subscription Plan</label>
              <div className="relative mt-1.5">
                <select className="w-full appearance-none bg-white border border-gray-200 text-gray-800 text-sm px-3.5 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer">
                  <option>Basic</option>
                  <option>Professional</option>
                  <option>Enterprise</option>
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>

            {/* Subscription Status */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-800">Subscription Status</label>
              <div className="relative mt-1.5">
                <select className="w-full appearance-none bg-white border border-gray-200 text-gray-800 text-sm px-3.5 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer">
                  <option>Active</option>
                  <option>Suspended</option>
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>

          </div>

          {/* Account Status */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-800">Account Status</label>
            <div className="relative mt-1.5">
              <select className="w-full appearance-none bg-custom-white border border-gray-200 text-gray-800 text-sm px-3.5 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer">
                <option>Active</option>
                <option>Disabled</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>

          {/* Buttons — same as EditSubscriptionModal */}
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
              Create Client
            </Button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddClientModal;