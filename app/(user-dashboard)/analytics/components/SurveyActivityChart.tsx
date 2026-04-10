"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Feb 17', value: 330 }, 
  { date: 'Feb 18', value: 335 },
  { date: 'Feb 19', value: 340 }, 
  { date: 'Feb 20', value: 342 },
  { date: 'Feb 21', value: 343 }, 
  { date: 'Feb 22', value: 343 },
  { date: 'Feb 23', value: 343 },
];

export default function SurveyActivityChart() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="h-[300px] min-w-[550px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#E5E7EB" />
            
            <XAxis 
              dataKey="date" 
              axisLine={{ stroke: '#E5E7EB' }} 
              tickLine={true} 
              tick={{ fontSize: 12, fill: '#9ca3af' }} 
              dy={10} 
            />
            
            <YAxis 
              axisLine={{ stroke: '#E5E7EB' }} 
              tickLine={true} 
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              domain={[0, 340]}
              ticks={[0, 85, 170, 255, 340]}
              label={{ 
                value: 'Number of Surveys', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle', fill: '#9ca3af', fontSize: 12 },
                offset: -10
              }}
            />
            
            <Tooltip 
              contentStyle={{ 
                borderRadius: '8px', 
                border: 'none', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
              }} 
            />
            
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#0a1d37" 
              strokeWidth={2} 
              dot={{ r: 4, fill: '#0a1d37', strokeWidth: 2, stroke: '#0a1d37' }} 
              activeDot={{ r: 6, fill: '#0a1d37' }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}