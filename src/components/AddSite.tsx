import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

interface AddSiteProps {
  onSiteAdd: (siteData: { url: string; language: string; platform: string }) => void;
}

const AddSite: React.FC<AddSiteProps> = ({ onSiteAdd }) => {
  const [formData, setFormData] = useState({
    url: '',
    language: 'ENGLISH',
    platform: 'WordPress'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.url.trim()) {
      onSiteAdd(formData);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Add Site</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white text-lg font-medium mb-3">
            WordPress Address (URL)
          </label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="url"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              placeholder="Example: https://domain.com/"
              className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-white text-lg font-medium mb-3">
            Language
          </label>
          <div className="relative">
            <select
              value={formData.language}
              onChange={(e) => setFormData({ ...formData, language: e.target.value })}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
            >
              <option value="ENGLISH">English</option>
              <option value="SPANISH">Spanish</option>
              <option value="FRENCH">French</option>
              <option value="GERMAN">German</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
          </div>
          <p className="text-slate-400 text-sm mt-2">
            This is the language is used in your website.
          </p>
        </div>

        <div>
          <label className="block text-white text-lg font-medium mb-3">
            Platform
          </label>
          <div className="relative">
            <select
              value={formData.platform}
              onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
            >
              <option value="WordPress">WordPress</option>
              <option value="Shopify">Shopify</option>
              <option value="Custom">Custom</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default AddSite;