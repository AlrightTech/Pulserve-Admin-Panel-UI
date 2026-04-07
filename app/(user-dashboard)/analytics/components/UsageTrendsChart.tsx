"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', clients: 1000, surveys: 500, responses: 6000 },
  { month: 'Feb', clients: 1200, surveys: 600, responses: 8000 },
  { month: 'Mar', clients: 1100, surveys: 550, responses: 3000 },
  { month: 'Apr', clients: 1300, surveys: 700, responses: 2500 },
  { month: 'May', clients: 1400, surveys: 750, responses: 2800 },
];

export default function UsageTrendsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} />
          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} />
          <Tooltip />
          <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', paddingTop: '20px' }} />
          <Line type="monotone" dataKey="clients" stroke="#1e293b" strokeWidth={2} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="surveys" stroke="#f97316" strokeWidth={2} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="responses" stroke="#22c55e" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}