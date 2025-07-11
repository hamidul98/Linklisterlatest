import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface PlatformSelectionProps {
  onPlatformSelect: (platform: string) => void;
}

const PlatformSelection: React.FC<PlatformSelectionProps> = ({ onPlatformSelect }) => {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const platforms = [
    { id: 'wordpress', name: 'WordPress', icon: '🔗' },
    { id: 'shopify', name: 'Shopify', icon: '🛍️' },
    { id: 'custom', name: 'Custom', icon: '⚙️' }
  ];

  const handleSelect = (platform: string) => {
    setSelectedPlatform(platform);
    setIsOpen(false);
    onPlatformSelect(platform);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full border border-slate-700">
        <h2 className="text-2xl font-bold text-white mb-2">Choose Your Project Platform</h2>
        <p className="text-slate-400 mb-6">Select platform from below dropdown</p>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-left text-white flex items-center justify-between hover:bg-slate-600 transition-colors"
          >
            <span className={selectedPlatform ? 'text-white' : 'text-slate-400'}>
              {selectedPlatform ? platforms.find(p => p.id === selectedPlatform)?.name : 'Select Platform'}
            </span>
            <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-slate-700 border border-slate-600 rounded-lg shadow-lg z-10">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => handleSelect(platform.id)}
                  className="w-full px-4 py-3 text-left text-white hover:bg-slate-600 transition-colors flex items-center space-x-3 first:rounded-t-lg last:rounded-b-lg"
                >
                  <span className="text-lg">{platform.icon}</span>
                  <span>{platform.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlatformSelection;