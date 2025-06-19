import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-primary-700 to-primary-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-full p-2">
              <svg className="w-8 h-8 text-primary-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold">NBA Player Matchup Analyzer</h1>
              <p className="text-sm text-primary-200">Head-to-head player comparisons and statistics</p>
            </div>
          </div>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-primary-200 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-200 transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-200 transition-colors">Help</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
