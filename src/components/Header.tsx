import React from 'react';
import { Search, Calendar } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl font-semibold">Overview</h1>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 border rounded-lg">
          <Calendar className="w-4 h-4" />
          <span>November 2024</span>
        </div>

        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
          Add Shipment
        </button>
      </div>
    </div>
  );
};

export default Header;