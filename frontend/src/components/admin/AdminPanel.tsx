import { useState } from 'react';
import {  Video, Users, Calendar } from 'lucide-react';
import AdminVideos from './AdminVideos';
import AdminPartners from './AdminPartners';
import AdminEvents from './AdminEvents';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('videos');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white min-h-screen p-4 border-r">
          <h1 className="text-xl font-bold mb-8">Panel de Admin</h1>
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('videos')}
              className={`w-full flex items-center gap-2 p-3 rounded-lg ${
                activeTab === 'videos' ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-gray-50'
              }`}
            >
              <Video className="w-5 h-5" />
              <span>Videos</span>
            </button>
            <button
              onClick={() => setActiveTab('partners')}
              className={`w-full flex items-center gap-2 p-3 rounded-lg ${
                activeTab === 'partners' ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-gray-50'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Partners</span>
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`w-full flex items-center gap-2 p-3 rounded-lg ${
                activeTab === 'events' ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-gray-50'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>Eventos</span>
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 p-8">
          {activeTab === 'videos' && <AdminVideos />}
          {activeTab === 'partners' && <AdminPartners />}
          {activeTab === 'events' && <AdminEvents />}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 