import React from 'react';
import { Calendar } from 'lucide-react';

const ShipmentChart = () => {
  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Shipment Analytics</h2>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
          <Calendar className="w-4 h-4" />
          <span>Monthly</span>
        </button>
      </div>
      
      <div className="flex items-center gap-8 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Total Delivery:</span>
            <span className="font-semibold">343345</span>
            <span className="text-emerald-600 text-sm">↑ 1.3%</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">On Delivery:</span>
            <span className="font-semibold">2,162</span>
            <span className="text-emerald-600 text-sm">↑ 4.25%</span>
          </div>
        </div>
      </div>

      {/* Chart placeholder - in a real implementation, use a charting library like recharts */}
      <div className="h-64 bg-gray-50 rounded-lg"></div>
    </div>
  );
};

export default ShipmentChart;