"use client";
import React from 'react';
import { X } from 'lucide-react';

const EditSubscriptionModal = ({ isOpen, onClose, data }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">Edit Subscription</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={20}/></button>
        </div>
        
        <form className="p-6 space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase">Plan</label>
            <select className="w-full mt-1 border p-2.5 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500">
              <option>{data?.plan || "Select Plan"}</option>
              <option>Premium</option>
              <option>Standard</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase">Billing Cycle</label>
            <select className="w-full mt-1 border p-2.5 rounded-lg bg-gray-50 outline-none">
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase">Status</label>
            <select className="w-full mt-1 border p-2.5 rounded-lg bg-gray-50 outline-none">
              <option>Active</option>
              <option>Trial</option>
              <option>Cancelled</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase">Expiry Date</label>
            <input type="date" className="w-full mt-1 border p-2.5 rounded-lg bg-gray-50" defaultValue="2026-04-15" />
          </div>

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 border rounded-lg font-bold text-gray-600 hover:bg-gray-50">Cancel</button>
            <button type="submit" className="flex-1 py-2.5 bg-[#001f3f] text-white rounded-lg font-bold hover:bg-opacity-90">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSubscriptionModal;