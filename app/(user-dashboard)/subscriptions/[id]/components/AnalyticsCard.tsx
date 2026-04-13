import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

interface DataPoint {
  name: string;
  value: number;
}

interface AnalyticsCardProps {
  lineData: DataPoint[];
  barData: DataPoint[];
}

export default function AnalyticsCard({
  lineData,
  barData,
}: AnalyticsCardProps) {
  return (
    <div className="lg:col-span-2 bg-custom-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-8">
      

      {/* User Growth */}
      <div>
        <h3 className="text-xl font-semibold text-custom-charcoal mb-6">
        Usage Analytics
      </h3>
        <p className="text-base font-medium text-custom-charcoal mb-4">
          User Growth
        </p>
        <div className="w-full overflow-x-auto">
          <div className="h-[150px] min-w-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f5f5f5"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#1e293b"
                  strokeWidth={2}
                  dot={{ fill: "#1e293b" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* API Usage */}
      <div>
        <p className="text-base font-medium text-custom-charcoal mb-4">
          API Usage
        </p>
        <div className="w-full overflow-x-auto">
          <div className="h-[150px] min-w-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
              >
                {/* Dashed grid — only vertical lines as in image */}
                <CartesianGrid
                  strokeDasharray="4 4"
                  vertical={false}
                  horizontal={true}
                  stroke="#e5e7eb"
                />

                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#666666" }}
                  dy={8}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10.5, fill: "#666666" }}
                  domain={[0, 100000]}
                  ticks={[0, 25000, 50000, 75000, 100000]}
                  width={60}
                />

                <Tooltip
                  cursor={{ fill: "rgba(0,0,0,0.04)" }}
                  contentStyle={{
                    borderRadius: "10px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
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
      </div>
    </div>
  );
}
