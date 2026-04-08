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
      {/* Backdrop/Overlay */}
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
              className="text-custom-carcoal hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X size={14} />
            </button>
          </div>

          <div className="mt-2">
            <h2 className="text-xl font-bold text-custom-charcoal">
              Add New Client
            </h2>
          </div>
        </div>
        {/* Form Body */}
        <form className="p-6 space-y-4 pt-0 overflow-y-auto max-h-[60vh] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5 mt-6">Company Name</label>
            <input type="text" placeholder="Enter company name" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-custom-coral" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Primary Contact Name</label>
            <input type="text" placeholder="Enter contact name" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-custom-coral" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Contact Email</label>
            <input type="email" placeholder="Enter contact email" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-custom-coral" />
          </div>

          {/* Select Fields Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Subscription Plan</label>
                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none bg-white">
                  <option>Basic</option>
                  <option>Professional</option>
                  <option>Enterprise</option>
                </select>
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Subscription Status</label>
                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none bg-white">
                  <option>Active</option>
                  <option>Suspended</option>
                </select>
             </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Account Status</label>
            <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none bg-white">
              <option>Active</option>
              <option>Disabled</option>
            </select>
          </div>
        </form>

        {/* Footer Actions */}
        <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50">
          <button 
            onClick={onClose}
            className="cursor-pointer px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button 
            className="px-6 py-2.5 text-sm font-medium bg-[#001F3F] text-white cursor-pointer rounded-lg hover:bg-[#00152b] transition-colors"
          >
            Create Client
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddClientModal;