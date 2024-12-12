import { Play } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
  youtubeUrl: string;
}

const VideoGallery = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/videos`);
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoClick = (youtubeUrl: string) => {
    window.open(youtubeUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50" id="videos">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Latest Videos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => handleVideoClick(video.youtubeUrl)}
            >
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