import React from 'react';
import { 
  BarChart3, 
  AlertTriangle, 
  RotateCcw, 
  Map, 
  FileText, 
  Download, 
  Hash, 
  TrendingUp, 
  Lightbulb, 
  Target, 
  Trash2, 
  Search,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  Network,
  Archive,
  Layers,
  Anchor
} from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  isNew?: boolean;
}

interface ToolsGridProps {
  onNavigate?: (page: string) => void;
}

const ToolsGrid: React.FC<ToolsGridProps> = ({ onNavigate }) => {
  const tools: Tool[] = [
    {
      id: 'link-analyzer',
      name: 'Link Analyzer Dashboard',
      description: 'Comprehensive link analysis and insights',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    },
    {
      id: 'inbound',
      name: 'Inbound',
      description: 'Build incoming interlink for an article',
      icon: <Plus className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600'
    },
    {
      id: 'outbound',
      name: 'Outbound',
      description: 'Build outgoing interlink for an article',
      icon: <ArrowUpRight className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600'
    },
    {
      id: 'silo',
      name: 'Silo',
      description: 'Interlink pillar article using topic cluster',
      icon: <Network className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-purple-500 to-pink-600'
    },
    {
      id: 'archive-silo',
      name: 'Archive Silo',
      description: 'Build links for your archive pages',
      icon: <Archive className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-gray-500 to-slate-600'
    },
    {
      id: 'custom-network',
      name: 'Custom Network',
      description: 'Build custom site network',
      icon: <Network className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      isNew: true
    },
    {
      id: 'bulk',
      name: 'Bulk',
      description: 'Auto internal linking in bulk',
      icon: <Layers className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
    },
    {
      id: 'bulk-2',
      name: 'Bulk 2.0',
      description: 'Advanced bulk linking features',
      icon: <Layers className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-violet-500 to-purple-600'
    },
    {
      id: 'anchor-manager',
      name: 'Anchor Manager',
      description: 'Manage and optimize anchor texts',
      icon: <Anchor className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    {
      id: 'link-analyzer',
      name: 'Link Analyzer Dashboard',
      description: 'Comprehensive link analysis and insights',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    },
    {
      id: 'broken-link-checker',
      name: 'Broken Link Checker',
      description: 'Detect and fix broken links automatically',
      icon: <AlertTriangle className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-red-500 to-orange-600'
    },
    {
      id: 'redirect-checker',
      name: 'Redirect Checker',
      description: 'Monitor and manage redirects',
      icon: <RotateCcw className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600'
    },
    {
      id: 'link-mapping',
      name: 'Link Mapping Tool',
      description: 'Visualize your site\'s link structure',
      icon: <Map className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
    }
  ];

  const additionalTools: Tool[] = [
    {
      id: 'post-summary',
      name: 'Per-Post Link Summary',
      description: 'Detailed link analysis for individual posts',
      icon: <FileText className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-teal-500 to-green-600'
    },
    {
      id: 'link-export',
      name: 'Link Export Tool',
      description: 'Export link data in various formats',
      icon: <Download className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600'
    },
    {
      id: 'anchor-analyzer',
      name: 'Anchor Text Analyzer',
      description: 'Analyze and optimize anchor text distribution',
      icon: <Hash className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-pink-500 to-rose-600'
    },
    {
      id: 'growth-tracker',
      name: 'Link Growth Tracker',
      description: 'Track link building progress over time',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-green-500 to-teal-600'
    },
    {
      id: 'optimization-suggestions',
      name: 'Link Optimization Suggestions',
      description: 'AI-powered link optimization recommendations',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-yellow-500 to-amber-600'
    },
    {
      id: 'relevancy-checker',
      name: 'Content-to-Link Relevancy Checker',
      description: 'Ensure contextual relevance of your links',
      icon: <Target className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600'
    },
    {
      id: 'link-cleanup',
      name: 'Link Cleanup Tool',
      description: 'Remove unnecessary and harmful links',
      icon: <Trash2 className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-red-500 to-pink-600'
    },
    {
      id: 'orphan-detector',
      name: 'Orphan Page Detector',
      description: 'Find pages with no internal links',
      icon: <Search className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-gray-500 to-zinc-600'
    }
  ];

  const allTools = [...tools, ...additionalTools];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Link Building</h1>
        <p className="text-slate-400">Comprehensive link management and optimization tools</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allTools.map((tool) => (
          <div
            key={tool.id}
            className={`${tool.color} rounded-xl p-6 text-white hover:transform hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden`}
          >
            {tool.isNew && (
              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                NEW
              </div>
            )}
            
            <div className="mb-4">
              {tool.icon}
            </div>
            
            <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
            <p className="text-sm opacity-90">{tool.description}</p>
            
            <div className="mt-4 flex items-center justify-between">
              <button 
                onClick={() => {
                  if (tool.id === 'link-analyzer' && onNavigate) {
                    onNavigate('link-analyzer');
                  }
                }}
                className="text-white hover:underline text-sm font-medium cursor-pointer"
              >
                Launch Tool →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-slate-800 rounded-xl p-6 border border-slate-700">
        <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors">
            Sync All Links
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors">
            Generate Report
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-colors">
            Bulk Optimize
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolsGrid;