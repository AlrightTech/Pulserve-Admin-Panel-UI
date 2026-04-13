import { Check } from "lucide-react";
import Link from "next/link";
import Button from "@/app/components/ui/Button";

export default function PlanPage() {
  const features = ["Unlimited Surveys", "Advanced Analytics", "AI Insights", "Custom Branding", "Priority Support"];

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center py-20 px-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-2xl font-bold text-custom-charcoal mb-2 text-center md:text-left">Activate Your Account</h1>
        <p className="text-sm text-custom-dim-gray mb-8 text-center md:text-left lg:mb-12 mb-4">Complete your account setup and enter payment details to activate your subscription.</p>
          <h2 className="text-xl font-semibold mb-6 text-custom-charcoal">Your Subscription Plan</h2>

        <div className="bg-white p-8 px-6 rounded-xl shadow-sm border border-gray-100">
          <div className=" ">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-custom-charcoal mb-1.5">Professional Plan</h3>
                <p className="text-sm text-custom-dim-gray font-normal">Monthly Billing</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold text-custom-dark-blue mb-1">$49</span>
                <p className="text-sm text-custom-dim-gray font-normal ">per month</p>
              </div>
            </div>
            <div className="border-b border-gray-200 my-7"></div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-custom-charcoal">Features Included:</p>
                <div className="grid grid-cols-1 gap-4">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm text-custom-dim-gray">
                      {/* Exact Figma Style Checkbox */}
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#E7F7F2] shrink-0">
                        <Check className="text-[#10B981] size-3 stroke-[3px]" />
                      </div>
                      <span className="font-normal text-sm text-custom-dim-gray">{f}</span>
                    </div>
                  ))}
                </div>
            </div>
          </div>

                      <div className="border-b border-gray-200 my-7"></div>

          {/* Action Button */}
          <Link href="/activation/payment" className="block w-full">
            <Button
              href="/activation/payment"
              variant="filled"
              className="w-full py-3 text-sm rounded-lg"
            >
              Continue to Payment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}