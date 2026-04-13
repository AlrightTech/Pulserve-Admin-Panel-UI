import { CreditCard, Calendar, LockIcon, MapPin, Shield } from "lucide-react";
import Link from "next/link";
import Button from "@/app/components/ui/Button";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center py-20 px-4">
      <div className="max-w-3xl w-full">

        {/* Header — PlanPage jaisa */}
        <h1 className="text-2xl font-bold text-custom-charcoal mb-2 text-center md:text-left">
          Activate Your Account
        </h1>
        <p className="text-sm text-custom-dim-gray mb-4 text-center md:text-left lg:mb-12">
          Complete your account setup and enter payment details to activate your subscription.
        </p>
        <h2 className="text-xl font-semibold mb-6 text-custom-charcoal">Payment Details</h2>

        {/* Card — PlanPage jaisa */}
        <div className="bg-white p-8 px-6 rounded-xl shadow-sm border border-gray-100">
          <div className="space-y-4">

            {/* Card Number */}
            <div>
              <label className="text-sm font-semibold mb-1.5 block text-custom-charcoal">Card Number</label>
              <div className="relative text-custom-dim-gray">
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 size-4" />
                <input
                  placeholder="1234 5678 9012 3456"
                  className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 text-sm text-gray-800 placeholder:text-gray-300"
                />
              </div>
            </div>

            {/* Expiry + CVC */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold mb-1.5 block text-custom-charcoal">Expiry Date</label>
                <div className="relative text-custom-dim-gray">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 size-4" />
                  <input
                    placeholder="MM / YY"
                    className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 text-sm text-gray-800 placeholder:text-gray-300"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold mb-1.5 block text-custom-charcoal">CVC</label>
                <div className="relative text-custom-dim-gray">
                  <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4" />
                  <input
                    placeholder="123"
                    className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 text-sm text-gray-800 placeholder:text-gray-300"
                  />
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div>
              <label className="text-sm font-semibold mb-1.5 block text-custom-charcoal">Billing Address</label>
              <div className="relative text-custom-dim-gray">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-4" />
                <input
                  placeholder="123 Main Street, City, State, ZIP"
                  className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 text-sm text-gray-800 placeholder:text-gray-300"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="text-sm font-semibold mb-1.5 block text-custom-charcoal">Country</label>
              <input
                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-gray-200 text-sm"
              />
            </div>

            {/* Secure Payment Notice */}
            <div className="bg-gray-50 p-4 rounded-lg flex gap-3">
              <div className="text-emerald-500 h-fit shrink-0">
                <Shield size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-custom-charcoal">Secure Payment</p>
                <p className="text-[11px] leading-relaxed text-custom-dim-gray">
                  Your payment information is encrypted and secure. We use Stripe for payment processing.
                </p>
              </div>
            </div>

                        <div className="border-b border-gray-200 my-6"></div>


            {/* Button — PlanPage jaisa */}
            <Link href="/activation/success" className="block w-full mt-2">
              <Button
                variant="filled"
                className="w-full py-3 text-sm rounded-lg"
              >
                Start Subscription
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}