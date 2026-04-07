import { Lock } from "lucide-react";
import Link from "next/link";

export default function ActivationPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center py-20 px-4 font-sans">
      <div className="max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-[#1a2b3c] mb-2">Activate Your Account</h1>
        <p className="text-gray-500 mb-8">Complete your account setup and enter payment details to activate your subscription.</p>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-6 text-gray-700">Create Your Password</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block text-gray-600">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400 size-4" />
                <input type="password" placeholder="Enter your password" 
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block text-gray-600">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400 size-4" />
                <input type="password" placeholder="Confirm your password" 
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
            </div>
            <p className="text-xs text-gray-400">Password must be at least 8 characters long.</p>
            <Link href="/activation/plan" className="block w-full">
              <button className="w-full bg-[#0a1d37] text-white py-3 rounded-lg font-medium mt-4 hover:bg-[#0f2a4d] transition-colors">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}