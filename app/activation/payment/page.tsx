import { CreditCard, Calendar, LockIcon, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center py-20 px-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-2xl font-bold text-[#1a2b3c] mb-2">Activate Your Account</h1>
        <p className="text-gray-500 mb-8">Please enter your payment details below.</p>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-6">Payment Details</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block text-gray-600">Card Number</label>
              <div className="relative text-gray-400">
                <CreditCard className="absolute left-3 top-3 size-4" />
                <input placeholder="1234 5678 9012 3456" className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block text-gray-600">Expiry Date</label>
                <div className="relative text-gray-400">
                  <Calendar className="absolute left-3 top-3 size-4" />
                  <input placeholder="MM / YY" className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block text-gray-600">CVC</label>
                <div className="relative text-gray-400">
                  <LockIcon className="absolute left-3 top-3 size-4" />
                  <input placeholder="123" className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block text-gray-600">Billing Address</label>
              <div className="relative text-gray-400">
                <MapPin className="absolute left-3 top-3 size-4" />
                <input placeholder="123 Main Street, City, State, ZIP" className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex gap-3 border border-gray-100">
              <div className="p-2 bg-white rounded border border-emerald-100 text-emerald-500 h-fit">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-700">Secure Payment</p>
                <p className="text-[11px] leading-relaxed text-gray-500">Your payment information is encrypted and secure. We use Stripe for payment processing.</p>
              </div>
            </div>
            <Link href="/activation/success">
              <button className="w-full bg-[#0a1d37] text-white py-3 rounded-lg font-medium hover:bg-[#0f2a4d] transition-colors mt-2">
                Start Subscription
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}