"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Feb 17', value: 800 }, { date: 'Feb 18', value: 850 },
  { date: 'Feb 19', value: 820 }, { date: 'Feb 20', value: 900 },
  { date: 'Feb 21', value: 950 }, { date: 'Feb 22', value: 880 },
  { date: 'Feb 23', value: 920 },
];

export default function ResponseVolumesChart() {
  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} />
          <Tooltip cursor={{fill: '#f9fafb'}} contentStyle={{ borderRadius: '10px', border: 'none' }} />
          <Bar dataKey="value" fill="#f97316" radius={[4, 4, 0, 0]} barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}