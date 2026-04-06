"use client";
import React from 'react';
import { X } from 'lucide-react';
import Button from '@/app/components/ui/Button';

interface AddClientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddClientModal = ({ isOpen, onClose }: AddClientModalProps) => {
  if (!isOpen) return null; // Agar open nahi hai toh kuch render na karein

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop/Overlay */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg z-10 overflow-hidden relative">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-custom-charcoal">Add New Client</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <form className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
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
            className="px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button 
            className="px-6 py-2.5 text-sm font-medium bg-[#001F3F] text-white rounded-lg hover:bg-[#00152b] transition-colors"
          >
            Create Client
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddClientModal;