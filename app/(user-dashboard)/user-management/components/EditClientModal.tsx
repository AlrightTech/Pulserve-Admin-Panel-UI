"use client";
import React from 'react';
import { X } from 'lucide-react';

interface EditClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  clientData: any;
}

const EditClientModal = ({ isOpen, onClose, clientData }: EditClientModalProps) => {
  if (!isOpen || !clientData) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg z-10 overflow-hidden relative font-sans">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">Edit Client</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <form className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company Name</label>
            <input type="text" defaultValue={clientData.name} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-custom-coral text-sm" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Primary Contact Name</label>
            <input type="text" defaultValue={clientData.name} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-custom-coral text-sm" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Contact Email</label>
            <input type="email" defaultValue={clientData.email} disabled className="w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-400 text-sm cursor-not-allowed" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subscription Plan</label>
            <select defaultValue={clientData.plan} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-custom-coral">
              <option>Basic</option>
              <option>Professional</option>
              <option>Enterprise</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subscription Expiry</label>
            <input type="date" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-custom-coral text-sm" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subscription Status</label>
              <select defaultValue={clientData.subStatus} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none">
                <option>Active</option>
                <option>Suspended</option>
                <option>Expired</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Account Status</label>
              <select defaultValue={clientData.accountStatus} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none">
                <option>Active</option>
                <option>Disabled</option>
              </select>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50">
          <button onClick={onClose} className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            Cancel
          </button>
          <button className="px-6 py-2.5 text-sm font-bold bg-[#001F3F] text-white rounded-lg hover:bg-[#00152b] transition-colors shadow-lg">
            Update Client
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditClientModal;