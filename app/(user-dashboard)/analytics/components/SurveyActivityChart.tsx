"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Feb 17', value: 340 }, { date: 'Feb 18', value: 345 },
  { date: 'Feb 19', value: 350 }, { date: 'Feb 20', value: 352 },
  { date: 'Feb 21', value: 355 }, { date: 'Feb 22', value: 353 },
  { date: 'Feb 23', value: 358 },
];

export default function SurveyActivityChart() {
  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} />
          <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
          <Line type="monotone" dataKey="value" stroke="#1e293b" strokeWidth={2} dot={{ r: 4, fill: '#1e293b' }} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}