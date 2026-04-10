"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', Logins: 1100, Surveys: 150,  Responses: 6200  },
  { month: 'Feb', Logins: 1300, Surveys: 500,  Responses: 8500  },
  { month: 'Mar', Logins: 1050, Surveys: 100,  Responses: 1300  },
  { month: 'Apr', Logins: 1200, Surveys: 100,  Responses: 1600  },
  { month: 'May', Logins: 1150, Surveys: 200,  Responses: 2000  },
  { month: 'Jun', Logins: 1400, Surveys: 200,  Responses: 2500  },
];

const renderLegend = (props: any) => {
  const { payload } = props;
  return (
    <div className="flex justify-center gap-6 pt-4">
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full border-2"
            style={{ borderColor: entry.color, backgroundColor: 'white' }}
          />
          <span style={{ color: entry.color, fontSize: 13, fontWeight: 500 }}>
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function UsageTrendsChart() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="h-[350px] min-w-[550px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>

            {/* Dashed grid — both vertical & horizontal like in image */}
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={true}
              horizontal={true}
              stroke="#e0e0e0"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 13, fill: '#9ca3af' }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 13, fill: '#9ca3af' }}
              domain={[0, 10000]}
              ticks={[0, 2500, 5000, 7500, 10000]}
            />

            <Tooltip
              contentStyle={{
                borderRadius: '10px',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                fontSize: 12,
              }}
            />

            <Legend content={renderLegend} />

            {/* Dark navy line — Logins */}
            <Line
              type="monotone"
              dataKey="Logins"
              stroke="#0f172a"
              strokeWidth={2.5}
              dot={{ r: 5, fill: '#0f172a', strokeWidth: 0 }}
              activeDot={{ r: 7 }}
            />

            {/* Orange line — Surveys */}
            <Line
              type="monotone"
              dataKey="Surveys"
              stroke="#f97316"
              strokeWidth={2.5}
              dot={{ r: 5, fill: '#f97316', strokeWidth: 0 }}
              activeDot={{ r: 7 }}
            />

            {/* Green line — Responses */}
            <Line
              type="monotone"
              dataKey="Responses"
              stroke="#3a7d44"
              strokeWidth={2.5}
              dot={{ r: 5, fill: '#3a7d44', strokeWidth: 0 }}
              activeDot={{ r: 7 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}