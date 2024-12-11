import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: number;
  bgColor: string;
}

const StatCard = ({ icon, title, value, change, bgColor }: StatCardProps) => {
  const isPositive = change >= 0;
  
  return (
    <div className={`${bgColor} rounded-2xl p-6 flex-1`}>
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <span className="text-sm text-gray-600">{title}</span>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-semibold">{value}</span>
        <div className={`flex items-center gap-1 text-sm ${
          isPositive ? 'text-emerald-600' : 'text-red-500'
        }`}>
          {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
          <span>{Math.abs(change)}% vs Last Month</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;