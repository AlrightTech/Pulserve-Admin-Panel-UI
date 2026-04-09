import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PlanPage() {
  const features = ["Unlimited Surveys", "Advanced Analytics", "AI Insights", "Custom Branding", "Priority Support"];

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center py-20 px-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-2xl font-bold text-[#1a2b3c] mb-2 text-center md:text-left">Activate Your Account</h1>
        <p className="text-gray-500 mb-8 text-center md:text-left">Choose the plan that fits your needs.</p>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-6">Your Subscription Plan</h2>
          <div className="border border-gray-100 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-bold text-xl text-[#0a1d37]">Professional Plan</h3>
                <p className="text-sm text-gray-500 font-medium">Monthly Billing</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold text-[#0a1d37]">$49</span>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">per month</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-700">Features Included:</p>
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="text-emerald-500 size-4" /> {f}
                </div>
              ))}
            </div>
          </div>
          <Link href="/activation/payment">
            <button className="w-full bg-[#0a1d37] text-white py-3 rounded-lg font-medium hover:bg-[#0f2a4d] transition-colors">
              Continue to Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}