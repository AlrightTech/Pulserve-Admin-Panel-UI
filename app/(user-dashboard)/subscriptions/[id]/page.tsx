"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation'; // useRouter add kiya
import { User, Mail, Calendar, CreditCard, ArrowLeft } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar }
 from 'recharts';
import DataPrivacyNotice from "../components/DataPrivacyNotice";


const lineData = [
  { name: 'Sep', value: 20 }, { name: 'Oct', value: 28 },
  { name: 'Nov', value: 35 }, { name: 'Dec', value: 38 },
  { name: 'Jan', value: 42 }, { name: 'Feb', value: 45 },
];

const barData = [
  { name: 'Sep', value: 45000 }, { name: 'Oct', value: 62000 },
  { name: 'Nov', value: 78000 }, { name: 'Dec', value: 82000 },
  { name: 'Jan', value: 90000 }, { name: 'Feb', value: 95000 },
];

const history = [
  { date: '15 Feb 2026', amount: '$299.00', status: 'Paid', method: 'Credit Card' },
  { date: '15 Jan 2026', amount: '$299.00', status: 'Paid', method: 'Credit Card' },
  { date: '15 Dec 2025', amount: '$299.00', status: 'Paid', method: 'Credit Card' },
];

export default function SubscriptionDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const user = {
    name: id === '1' ? "Guy" : id === '2' ? "Bernard" : "Calvin",
    email: id === '2' ? "admin@acme.com" : "user@example.com",
    status: id === '3' ? "Trial" : id === '4' ? "Cancelled" : "Active",
    plan: id === '1' ? "Premium" : "Standard",
    startDate: "15 Jan 2024",
    lastPayment: "15 Feb 2025"
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-xs text-gray-400">Subscription ID: #A{id}</p>
          <span className={`mt-2 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold ${
            user.status === "Active" ? "bg-green-50 text-green-600" : 
            user.status === "Trial" ? "bg-blue-50 text-blue-600" : "bg-red-50 text-red-600"
          }`}>
            ● {user.status}
          </span>
        </div>
        <button onClick={() => router.back()} className="flex items-center gap-2 text-custom-dim-gray cursor-pointer hover:text-custom-charcoal text-sm">
           <ArrowLeft size={16} /> Back to List
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Plan', value: user.plan, sub: 'Monthly' },
          { label: 'Monthly Cost', value: '$99', sub: 'per month' },
          { label: 'Expiry Date', value: '15 Apr 2026', sub: 'in 10 days' },
          { label: 'Active Users', value: '10', sub: 'total users' },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">{item.label}</p>
            <p className="text-lg font-bold text-gray-800">{item.value}</p>
            <p className="text-[10px] text-gray-400">{item.sub}</p>
          </div>
        ))}
      </div>

      {/* Details & Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Subscription Details Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-custom-charcoal">Subscription Details</h3>
          <div className="space-y-4">
            <DetailRow icon={<User size={14}/>} label="User Name" value={user.name} />
            <DetailRow icon={<Mail size={14}/>} label="Email" value={user.email} />
            <DetailRow icon={<Calendar size={14}/>} label="Start Date" value={user.startDate} />
            <DetailRow icon={<CreditCard size={14}/>} label="Last Payment" value={user.lastPayment} />
          </div>

          <div className="pt-6 border-t border-gray-50">
            <h4 className="text-xs font-bold text-gray-400 uppercase mb-4">Plan Features</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-custom-dim-gray">
                <span>Storage</span>
                <span className="font-semibold text-custom-charcoal">500 GB</span>
              </div>
              <div className="flex justify-between text-custom-dim-gray">
                <span>API Calls</span>
                <span className="font-semibold text-custom-charcoal">Unlimited</span>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-8">
          <div>
            <p className="text-sm font-bold text-custom-charcoal mb-4">User Growth</p>
            <div className="h-[150px] w-full">
              <ResponsiveContainer>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#1e293b" strokeWidth={2} dot={{fill: '#1e293b'}} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-custom-charcoal mb-4">API Usage</p>
            <div className="h-[150px] w-full">
              <ResponsiveContainer>
                <BarChart data={barData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="value" fill="#f97316" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Payment History Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50">
          <h3 className="text-lg font-bold text-custom-charcoal">Payment History</h3>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50/50 text-[10px] uppercase text-gray-400 font-bold">
            <tr>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Method</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {history.map((item, i) => (
              <tr key={i} className="text-sm text-custom-charcoal">
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4 font-bold">{item.amount}</td>
                <td className="px-6 py-4">
                  <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full text-[10px] font-bold">Paid</span>
                </td>
                <td className="px-6 py-4 text-right text-custom-dim-gray">{item.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DataPrivacyNotice />

    </div>
  );
}

function DetailRow({ icon, label, value }: any) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] uppercase font-bold text-gray-400">{label}</p>
      <div className="flex items-center gap-2 text-sm font-medium text-custom-charcoal">
        <span className="text-gray-300">{icon}</span> {value}
      </div>
      
    </div>
  );
}