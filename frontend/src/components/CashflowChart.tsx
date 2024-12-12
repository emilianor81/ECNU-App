import React from 'react';
import { Download } from 'lucide-react';

const CashflowChart = () => {
  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Cashflow Stat</h2>
        <button className="flex items-center gap-2 text-gray-600">
          <span>Export</span>
          <Download className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-600 rounded"></div>
          <span className="text-sm text-gray-600">Income</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-100 rounded"></div>
          <span className="text-sm text-gray-600">Expense</span>
        </div>
      </div>

      {/* Chart placeholder - in a real implementation, use a charting library like recharts */}
      <div className="h-48 bg-gray-50 rounded-lg"></div>
    </div>
  );
};

export default CashflowChart;