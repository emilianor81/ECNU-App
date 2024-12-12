import React from 'react';
import { Youtube, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1920&h=1080&fit=crop"
          alt="Mountain biker at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Alex Rider</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Exploring trails, sharing adventures, and bringing you the best mountain biking content
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              <Youtube className="w-5 h-5" />
              Subscribe on YouTube
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;