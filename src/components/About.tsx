import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Hey there! I'm Alex, a passionate mountain biker and content creator with over 5 years of experience shredding trails and sharing adventures. My mission is to inspire others to discover the joy of mountain biking and explore the great outdoors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through my channel, I bring you weekly videos featuring trail reviews, bike maintenance tips, gear recommendations, and epic riding adventures from around the world.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800&h=600&fit=crop"
              alt="Rider profile"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-emerald-500 text-white p-4 rounded-lg">
              <p className="text-2xl font-bold">250K+</p>
              <p className="text-sm">Subscribers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;