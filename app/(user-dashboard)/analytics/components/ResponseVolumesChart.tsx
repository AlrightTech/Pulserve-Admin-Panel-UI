"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Feb 17', value: 1100 }, { date: 'Feb 18', value: 1150 },
  { date: 'Feb 19', value: 1120 }, { date: 'Feb 20', value: 1220 },
  { date: 'Feb 21', value: 1310 }, { date: 'Feb 22', value: 1180 },
  { date: 'Feb 23', value: 1280 },
];

export default function ResponseVolumesChart() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="h-[300px] min-w-[550px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 5 }}>

            {/* Dashed vertical grid lines like in the image */}
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={true}
              horizontal={false}
              stroke="#e0e0e0"
            />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              domain={[0, 1400]}
              ticks={[0, 350, 700, 1050, 1400]}
              label={{
                value: 'Responses',
                angle: -90,
                position: 'insideLeft',
                style: { textAnchor: 'middle', fill: '#9ca3af', fontSize: 12 },
                offset: -5,
              }}
            />

            <Tooltip
              cursor={{ fill: 'rgba(0,0,0,0.04)' }}
              contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />

            <Bar
              dataKey="value"
              fill="#F3704B"
              radius={[6, 6, 0, 0]}
              barSize={55}
            />

          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}