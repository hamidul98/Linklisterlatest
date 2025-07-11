import React from 'react';
import { Globe, Activity, Shield } from 'lucide-react';

const Dashboard = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-2 text-green-400">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">Automatic Link Detection</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">WordPress Integration</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">All Sites in One Dashboard</span>
            </div>
          </div>
          
          <div className="inline-flex items-center space-x-2 text-white/80 mb-2">
            <Globe className="w-4 h-4" />
            <span className="text-sm">https://linklister.io</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LL</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Linklister</span>
            </div>
            <div className="text-sm text-gray-600">
              Credits: 5 out of 50000 • <span className="text-green-600">●</span> Active
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Charts */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Link Building</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-500 rounded-lg p-4 text-white">
                    <div className="text-2xl font-bold">245</div>
                    <div className="text-sm opacity-90">Internal Links</div>
                  </div>
                  <div className="bg-blue-400 rounded-lg p-4 text-white">
                    <div className="text-2xl font-bold">189</div>
                    <div className="text-sm opacity-90">External Links</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Knowledge Base</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Support</span>
                </div>
              </div>
            </div>

            {/* Right Side - Features */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Link Analytics</h3>
                <p className="text-sm text-gray-600">Real-time link monitoring and analysis</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-100 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-900">Broken Links</div>
                  <div className="text-xs text-gray-600">Auto-detect issues</div>
                </div>
                <div className="bg-purple-100 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-900">CSV Export</div>
                  <div className="text-xs text-gray-600">Export all data</div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {[
                  { name: 'Inbound', desc: 'Build semantic network for a single article', color: 'bg-teal-100' },
                  { name: 'Outbound', desc: 'Automatically create full-site links', color: 'bg-blue-100' },
                  { name: 'Silo', desc: 'Organize articles using topic clusters', color: 'bg-gray-100' },
                  { name: 'Anchor Manager', desc: 'Optimize anchor text strategy', color: 'bg-blue-100' }
                ].map((feature, idx) => (
                  <div key={idx} className={`${feature.color} rounded-lg p-3`}>
                    <div className="w-6 h-6 bg-white rounded-full mb-2 flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    </div>
                    <div className="text-xs font-medium text-gray-900">{feature.name}</div>
                    <div className="text-xs text-gray-600 mt-1">{feature.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;