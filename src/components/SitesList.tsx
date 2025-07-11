import React from 'react';
import { Plus, Grid, List, ChevronDown } from 'lucide-react';

interface Site {
  id: string;
  name: string;
  url: string;
  status: 'active' | 'pending';
  needsConfiguration?: boolean;
}

interface SitesListProps {
  sites: Site[];
  onAddSite: () => void;
  onConfigureSite: (siteId: string) => void;
}

const SitesList: React.FC<SitesListProps> = ({ sites, onAddSite, onConfigureSite }) => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Grid className="w-4 h-4" />
          </button>
          <button className="text-slate-400 hover:text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={onAddSite}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Site</span>
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <select className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Domain (A-Z)</option>
            <option>Domain (Z-A)</option>
            <option>Date Created</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6">
        {sites.map((site) => (
          <div key={site.id} className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">W</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{site.name}</h3>
                    {site.needsConfiguration && (
                      <p className="text-orange-400 text-sm">Please configure your domain settings.</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button className="text-slate-400 hover:text-white">
                    <div className="w-5 h-5 border border-current rounded"></div>
                  </button>
                  <button className="text-slate-400 hover:text-white">
                    <div className="w-5 h-5">⚡</div>
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <div className="w-5 h-5">🗑️</div>
                  </button>
                </div>
              </div>

              {site.needsConfiguration && (
                <div className="mt-4">
                  <button
                    onClick={() => onConfigureSite(site.id)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Configure
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {sites.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 mb-4">No sites added yet</div>
            <button
              onClick={onAddSite}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Add Your First Site
            </button>
          </div>
        )}
      </div>

      {sites.some(site => site.status === 'active') && (
        <div className="fixed bottom-6 right-6">
          <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="text-sm">Project created successfully!</span>
            <button className="text-white hover:text-gray-200">
              <span className="text-lg">×</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SitesList;