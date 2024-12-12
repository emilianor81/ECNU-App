import React from 'react';
import { Calendar, Truck, Plane } from 'lucide-react';

const ShipmentList = () => {
  const shipments = [
    {
      id: 'DEMO-C548783',
      type: 'In Transit',
      icon: Truck,
      from: 'Circlelife US - Contom LU',
      date: 'Nov 15 - Dec 20',
      progress: 60,
    },
    {
      id: 'DEMO-C548784',
      type: 'Custom',
      icon: Plane,
      from: 'Circlelife US - Contom LU',
      date: 'Nov 15 - Dec 20',
      progress: 40,
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-4">
          <button className="text-emerald-600 border-b-2 border-emerald-600 pb-2">
            Followed Shipment
          </button>
          <button className="text-gray-400 pb-2">
            Delay Shipment
          </button>
          <button className="text-gray-400 pb-2">
            Last update
          </button>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
          <Calendar className="w-4 h-4" />
          <span>Monthly</span>
        </button>
      </div>

      <div className="space-y-4">
        {shipments.map((shipment) => (
          <div key={shipment.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">{shipment.id}</span>
                <span className={`flex items-center gap-1 text-sm ${
                  shipment.type === 'In Transit' ? 'text-emerald-600' : 'text-blue-600'
                }`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                  {shipment.type}
                </span>
              </div>
              <shipment.icon className="w-12 h-12 text-gray-400" />
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <Truck className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">{shipment.from}</span>
              <span className="text-sm text-gray-400">ETA: {shipment.date}</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Shipment Progress</span>
                <span>{shipment.progress}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-600 rounded-full"
                  style={{ width: `${shipment.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShipmentList;