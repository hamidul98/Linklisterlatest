import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  ExternalLink, 
  FileText,
  Activity,
  Globe,
  Link as LinkIcon,
  Search,
  Filter,
  Download,
  RefreshCw
} from 'lucide-react';

const LinkAnalyzerDashboard: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Sample data - in real app this would come from API
  const stats = {
    totalPosts: 245,
    internalLinks: 1847,
    externalLinks: 423,
    brokenLinks: 12
  };

  const chartData = {
    lineChart: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      internal: Math.floor(Math.random() * 50) + 20,
      external: Math.floor(Math.random() * 20) + 5
    })),
    bubbleData: Array.from({ length: 20 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 10,
      label: `Page ${i + 1}`
    })),
    heatmapData: Array.from({ length: 7 }, (_, week) =>
      Array.from({ length: 7 }, (_, day) => ({
        week,
        day,
        value: Math.random() * 100
      }))
    ).flat()
  };

  const tableData = [
    { title: 'Homepage', url: '/', internalLinks: 25, externalLinks: 3, status: 'healthy' },
    { title: 'About Us', url: '/about', internalLinks: 18, externalLinks: 5, status: 'warning' },
    { title: 'Services', url: '/services', internalLinks: 32, externalLinks: 8, status: 'healthy' },
    { title: 'Blog Post 1', url: '/blog/post-1', internalLinks: 15, externalLinks: 12, status: 'healthy' },
    { title: 'Contact', url: '/contact', internalLinks: 8, externalLinks: 2, status: 'error' },
    { title: 'Products', url: '/products', internalLinks: 28, externalLinks: 6, status: 'healthy' },
    { title: 'FAQ', url: '/faq', internalLinks: 22, externalLinks: 4, status: 'warning' },
    { title: 'Privacy Policy', url: '/privacy', internalLinks: 5, externalLinks: 1, status: 'healthy' }
  ];

  return (
    <div className="p-8 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Link Analyzer Dashboard</h1>
            <p className="text-slate-400">Comprehensive link analysis and insights for your website</p>
          </div>
          <div className="flex items-center space-x-4">
            <select 
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Scorecards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <FileText className="w-8 h-8" />
              <TrendingUp className="w-5 h-5 text-blue-200" />
            </div>
            <div className="text-3xl font-bold mb-1">{stats.totalPosts}</div>
            <div className="text-blue-100 text-sm">Posts & Pages</div>
            <div className="text-blue-200 text-xs mt-2">+12% from last month</div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <LinkIcon className="w-8 h-8" />
              <TrendingUp className="w-5 h-5 text-green-200" />
            </div>
            <div className="text-3xl font-bold mb-1">{stats.internalLinks}</div>
            <div className="text-green-100 text-sm">Internal Links</div>
            <div className="text-green-200 text-xs mt-2">+8% from last month</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <ExternalLink className="w-8 h-8" />
              <TrendingUp className="w-5 h-5 text-purple-200" />
            </div>
            <div className="text-3xl font-bold mb-1">{stats.externalLinks}</div>
            <div className="text-purple-100 text-sm">External Links</div>
            <div className="text-purple-200 text-xs mt-2">+3% from last month</div>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="w-8 h-8" />
              <Activity className="w-5 h-5 text-red-200" />
            </div>
            <div className="text-3xl font-bold mb-1">{stats.brokenLinks}</div>
            <div className="text-red-100 text-sm">Broken Links</div>
            <div className="text-red-200 text-xs mt-2">-2 from last week</div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Line Chart */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Link Trends</h3>
              <BarChart3 className="w-5 h-5 text-slate-400" />
            </div>
            <div className="h-64 flex items-end justify-between space-x-1">
              {chartData.lineChart.slice(-14).map((data, index) => (
                <div key={index} className="flex flex-col items-center space-y-1 flex-1">
                  <div className="flex flex-col items-center space-y-1 w-full">
                    <div 
                      className="bg-blue-500 rounded-t w-full transition-all duration-300 hover:bg-blue-400"
                      style={{ height: `${(data.internal / 70) * 100}%`, minHeight: '4px' }}
                    ></div>
                    <div 
                      className="bg-purple-500 rounded-b w-full transition-all duration-300 hover:bg-purple-400"
                      style={{ height: `${(data.external / 70) * 100}%`, minHeight: '2px' }}
                    ></div>
                  </div>
                  <div className="text-xs text-slate-400 transform -rotate-45 origin-left">
                    {data.date.split('/')[1]}/{data.date.split('/')[2]}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-sm text-slate-300">Internal Links</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded"></div>
                <span className="text-sm text-slate-300">External Links</span>
              </div>
            </div>
          </div>

          {/* Bubble Chart */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Page Link Density</h3>
              <Globe className="w-5 h-5 text-slate-400" />
            </div>
            <div className="h-64 relative bg-slate-900 rounded-lg overflow-hidden">
              {chartData.bubbleData.map((bubble, index) => (
                <div
                  key={index}
                  className="absolute rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                  style={{
                    left: `${bubble.x}%`,
                    top: `${bubble.y}%`,
                    width: `${bubble.size}px`,
                    height: `${bubble.size}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  title={`${bubble.label}: ${Math.round(bubble.size)} links`}
                ></div>
              ))}
            </div>
            <div className="text-center mt-4">
              <span className="text-sm text-slate-400">Bubble size represents link count per page</span>
            </div>
          </div>
        </div>

        {/* Heatmap */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Link Activity Heatmap</h3>
            <Activity className="w-5 h-5 text-slate-400" />
          </div>
          <div className="grid grid-cols-7 gap-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="text-center text-sm text-slate-400 mb-2">{day}</div>
            ))}
            {chartData.heatmapData.map((cell, index) => (
              <div
                key={index}
                className="aspect-square rounded transition-all duration-200 hover:scale-110 cursor-pointer"
                style={{
                  backgroundColor: `rgba(59, 130, 246, ${cell.value / 100})`,
                }}
                title={`Activity: ${Math.round(cell.value)}%`}
              ></div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-slate-400">Less</span>
            <div className="flex space-x-1">
              {[0.2, 0.4, 0.6, 0.8, 1.0].map((opacity) => (
                <div
                  key={opacity}
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: `rgba(59, 130, 246, ${opacity})` }}
                ></div>
              ))}
            </div>
            <span className="text-sm text-slate-400">More</span>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Top Pages by Link Count</h3>
            <BarChart3 className="w-5 h-5 text-slate-400" />
          </div>
          <div className="space-y-4">
            {tableData.slice(0, 6).map((page, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-24 text-sm text-slate-400">{page.title}</div>
                <div className="flex-1 bg-slate-700 rounded-full h-6 relative overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(page.internalLinks / 35) * 100}%` }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">
                    {page.internalLinks} internal
                  </div>
                </div>
                <div className="w-16 text-sm text-slate-400 text-right">{page.externalLinks} ext</div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-slate-800 rounded-xl border border-slate-700">
          <div className="p-6 border-b border-slate-700">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Page Link Analysis</h3>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search pages..."
                    className="bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <select 
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Pages</option>
                  <option value="healthy">Healthy</option>
                  <option value="warning">Warning</option>
                  <option value="error">Error</option>
                </select>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-700">
                <tr>
                  <th className="text-left py-4 px-6 text-slate-300 font-medium">Title</th>
                  <th className="text-left py-4 px-6 text-slate-300 font-medium">URL</th>
                  <th className="text-center py-4 px-6 text-slate-300 font-medium">Internal Links</th>
                  <th className="text-center py-4 px-6 text-slate-300 font-medium">External Links</th>
                  <th className="text-center py-4 px-6 text-slate-300 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {tableData.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-700/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="text-white font-medium">{row.title}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-slate-400 font-mono text-sm">{row.url}</div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        {row.internalLinks}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                        {row.externalLinks}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        row.status === 'healthy' ? 'bg-green-500/20 text-green-300' :
                        row.status === 'warning' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {row.status === 'healthy' ? 'Healthy' : 
                         row.status === 'warning' ? 'Warning' : 'Error'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 border-t border-slate-700">
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>Showing 1-8 of 245 pages</span>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded bg-slate-700 hover:bg-slate-600 transition-colors">Previous</button>
                <span className="px-3 py-1">1 of 31</span>
                <button className="px-3 py-1 rounded bg-slate-700 hover:bg-slate-600 transition-colors">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkAnalyzerDashboard;