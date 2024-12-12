import React from 'react';
import { LayoutDashboard, Box, ShoppingCart, Truck, Users, Package, BarChart3, Wallet, HelpCircle, Settings } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, text: 'Dashboard', active: true },
  { icon: Box, text: 'Shipments' },
  { icon: ShoppingCart, text: 'Orders' },
  { icon: Truck, text: 'Fleet Management' },
  { icon: Users, text: 'Drivers' },
  { icon: Package, text: 'Inventory' },
  { icon: BarChart3, text: 'Report & Analytics' },
  { icon: Wallet, text: 'Billing & Payments' },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-100 h-screen p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <Truck className="w-6 h-6 text-emerald-600" />
        <span className="font-semibold text-xl">Fastship</span>
      </div>
      
      <nav className="flex-1">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 cursor-pointer ${
              item.active 
                ? 'bg-emerald-50 text-emerald-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.text}</span>
          </div>
        ))}
      </nav>

      <div className="mt-auto space-y-4">
        <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
          <HelpCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Help</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
          <Settings className="w-5 h-5" />
          <span className="text-sm font-medium">Settings</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">Leslie Alexander</p>
            <p className="text-xs text-gray-500">Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;