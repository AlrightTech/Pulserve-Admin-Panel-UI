import React from "react";

interface PaymentItem {
  date: string;
  amount: string;
  status: string;
  method: string;
}

interface PaymentHistoryTableProps {
  history: PaymentItem[];
}

export default function PaymentHistoryTable({ history }: PaymentHistoryTableProps) {
  return (
    <div className="bg-custom-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-[#E0E0E0]">
        <h3 className="text-xl font-semibold text-custom-charcoal">Payment History</h3>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left min-w-[600px]">
          <thead className="text-sm text-custom-charcoal font-semibold border-b border-[#E0E0E0]">
            <tr>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-left">Payment Method</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {history.map((item, i) => (
              <tr key={i} className="text-sm font-normal text-custom-charcoal">
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4 font-semibold">{item.amount}</td>
                <td className="px-6 py-4">
                  <span className="bg-[#E8F5E9] text-[#2E7D32] px-2.5 py-1 rounded-full text-[12px] font-medium">
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-left font-normal text-custom-dim-gray">{item.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}