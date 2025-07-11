import React, { useState } from 'react';
import { Link, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onTryFree: () => void;
}

const Header: React.FC<HeaderProps> = ({ onTryFree }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Link className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Linklister</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors">
                <span>Features</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">
              Pricing
            </a>
            <a href="#login" className="text-gray-700 hover:text-purple-600 transition-colors">
              Login
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={onTryFree}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200"
            >
              Try Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-700 hover:text-purple-600 transition-colors">
                Features
              </a>
              <a href="#resources" className="block text-gray-700 hover:text-purple-600 transition-colors">
                Resources
              </a>
              <a href="#pricing" className="block text-gray-700 hover:text-purple-600 transition-colors">
                Pricing
              </a>
              <a href="#login" className="block text-gray-700 hover:text-purple-600 transition-colors">
                Login
              </a>
              <button 
                onClick={onTryFree}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
              >
                Try Free
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;