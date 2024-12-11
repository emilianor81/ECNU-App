import React from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "Epic Mountain Descent in the Alps",
    thumbnail: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=600&h=400&fit=crop",
    views: "124K",
    duration: "12:45"
  },
  {
    id: 2,
    title: "Beginner's Guide to Trail Riding",
    thumbnail: "https://images.unsplash.com/photo-1622914607338-957fb9f10b57?w=600&h=400&fit=crop",
    views: "89K",
    duration: "15:20"
  },
  {
    id: 3,
    title: "Mountain Bike Maintenance Tips",
    thumbnail: "https://images.unsplash.com/photo-1605164599901-db7f0dca2ccd?w=600&h=400&fit=crop",
    views: "156K",
    duration: "18:30"
  }
];

const VideoGallery = () => {
  return (
    <section className="py-20 bg-gray-50" id="videos">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Latest Videos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group relative rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{video.views} views</span>
                  <span>{video.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;