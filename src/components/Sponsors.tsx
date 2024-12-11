import React from 'react';
import { ArrowRight } from 'lucide-react';

const Sponsors = () => {
  return (
    <section className="py-20 bg-white" id="sponsors">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Partner With Me</h2>
          <p className="text-gray-600">
            Looking to promote your brand to an engaged audience of mountain biking enthusiasts?
            Let's create amazing content together!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="flex items-center justify-center p-8 bg-gray-50 rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop"
              alt="Sponsor 1"
              className="max-h-12 opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex items-center justify-center p-8 bg-gray-50 rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop"
              alt="Sponsor 2"
              className="max-h-12 opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex items-center justify-center p-8 bg-gray-50 rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop"
              alt="Sponsor 3"
              className="max-h-12 opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex items-center justify-center p-8 bg-gray-50 rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop"
              alt="Sponsor 4"
              className="max-h-12 opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Become a Partner
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;