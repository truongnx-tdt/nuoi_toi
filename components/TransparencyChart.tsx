import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Cơm Tấm & Bún Đậu', value: 60 },
  { name: 'Trà Sữa Full Topping', value: 25 },
  { name: 'Phí Duy Trì Sự Sống', value: 10 },
  { name: 'Tiết Kiệm (Để ăn tiếp)', value: 5 },
];

const COLORS = ['#ea580c', '#f97316', '#fb923c', '#fdba74'];

const TransparencyChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
      <h3 className="text-xl font-bold text-center mb-4 text-brand-800">Cơ Cấu Giải Ngân (Dự Kiến)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value}%`} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-center text-xs text-gray-400 italic mt-2">* Số liệu mang tính chất minh họa, thực tế có thể ăn nhiều hơn.</p>
    </div>
  );
};

export default TransparencyChart;