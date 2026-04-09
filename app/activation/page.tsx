import { Lock } from "lucide-react";
import Link from "next/link";
import Button from "@/app/components/ui/Button";

export default function ActivationPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center py-20 px-4 font-sans">
      <div className="max-w-3xl w-full">
        <h1 className="text-2xl font-bold text-custom-charcoal mb-2">
          Activate Your Account
        </h1>
        <p className="text-custom-dim-gray text-sm font-normal lg:mb-10 mb-4">
          Complete your account setup and enter payment details to activate your
          subscription.
        </p>

        <h2 className="text-xl font-semibold mb-6 text-custom-charcoal">
            Create Your Password
        </h2>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          
          <div className="space-y-4 bg-custom-white">
            <div>
              <label className="text-sm font-semibold mb-1 block text-custom-charcoal">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400 size-4" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold mb-1 block text-custom-charcoal">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400 size-4" />
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>
            <p className="text-xs text-gray-400">
              Password must be at least 8 characters long.
            </p>
            <Link href="/activation/plan" className="block w-full">
              <Button
                href="/activation/plan"
                variant="filled"
                className="w-full py-3 mt-4 text-sm"
              >
                Continue
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
