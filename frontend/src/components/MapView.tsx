import React from 'react';
import { MapPin } from 'lucide-react';

const MapView = () => {
  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-lg font-semibold mb-4">Map view</h2>
      
      {/* Map placeholder - in a real implementation, use a mapping library like Mapbox or Google Maps */}
      <div className="h-[400px] bg-gray-50 rounded-lg relative">
        <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-medium">DEMO-C548783</span>
            <MapPin className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-sm text-gray-600">4140 Parker Rd. Allentown, New Mexico 31134</p>
        </div>
      </div>
    </div>
  );
};

export default MapView;