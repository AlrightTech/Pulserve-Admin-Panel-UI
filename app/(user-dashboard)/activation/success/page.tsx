import { Check } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6">
      <div className="max-w-xl w-full text-center">
        {/* ... baaki icons aur text same rahega ... */}
        
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
          <Check className="text-emerald-600 size-8" strokeWidth={3} />
        </div>
        
        <h2 className="text-3xl font-bold text-[#0a1d37] mb-2">Subscription Activated</h2>
        <p className="text-gray-500 mb-10">Your account is now active and ready to use. Welcome to Pulsurv!</p>

        {/* Plan Details Card */}
        <div className="bg-white border border-gray-100 rounded-xl p-8 w-full flex justify-between items-center mb-10 shadow-sm">
           {/* ... Plan info ... */}
        </div>

        {/* DASHBOARD LINK START */}
        <Link href="/"> 
          <button className="bg-[#0a1d37] text-white px-12 py-3.5 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-blue-900/10">
            Go to Dashboard
          </button>
        </Link>
        {/* DASHBOARD LINK END */}

      </div>
    </div>
  );
}