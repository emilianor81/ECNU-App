import { Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold mb-2">ECNU App</h3>
            <p className="text-gray-400">
              © 2024 Autor: 
              <a 
                href="https://www.linkedin.com/in/ing-emilianor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 ml-1"
              >
                Emiliano R.
              </a>
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <a
              href={isAuthenticated ? "/admin" : "/login"}
              className="text-gray-400 hover:text-gray-300 flex items-center gap-2 text-sm transition-colors"
            >
              <Shield className="w-4 h-4" />
              Administración
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 