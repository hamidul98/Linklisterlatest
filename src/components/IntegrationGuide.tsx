import React, { useState } from 'react';
import { Copy, Download, ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react';

interface IntegrationGuideProps {
  siteUrl: string;
  apiKey: string;
}

const IntegrationGuide: React.FC<IntegrationGuideProps> = ({ siteUrl, apiKey }) => {
  const [showApiKey, setShowApiKey] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    settings: false,
    prepare: false,
    batch: false,
    paste: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const steps = [
    {
      id: 'copy',
      number: 1,
      title: 'Copy the API key',
      description: 'Use this API key to connect with your site.',
      completed: true
    },
    {
      id: 'install',
      number: 2,
      title: 'Install & Activate the Plugin on',
      description: siteUrl,
      completed: false
    },
    {
      id: 'paste',
      number: 3,
      title: "Paste API Key, Click on 'Prepare Data' & Then 'Save Settings and Sync'",
      description: '',
      completed: false
    }
  ];

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Get Started with Linklister in Minutes 🚀
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Steps */}
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step.completed ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                    {step.description && (
                      <p className="text-slate-400 text-sm">{step.description}</p>
                    )}

                    {step.id === 'copy' && (
                      <div className="mt-4">
                        <div className="mb-4">
                          <label className="block text-white text-sm font-medium mb-2">
                            Your API Key
                          </label>
                          <div className="relative">
                            <input
                              type={showApiKey ? 'text' : 'password'}
                              value={apiKey}
                              readOnly
                              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 pr-20 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-3">
                              <button
                                onClick={() => setShowApiKey(!showApiKey)}
                                className="text-slate-400 hover:text-white transition-colors"
                              >
                                {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </button>
                              <button
                                onClick={() => copyToClipboard(apiKey)}
                                className="text-slate-400 hover:text-white transition-colors"
                              >
                                <Copy className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <p className="text-slate-400 text-sm mt-2">
                            Copy this API key and paste it in your WordPress plugin settings.
                          </p>
                        </div>
                        <div className="bg-slate-700 rounded-lg p-4">
                          <p className="text-slate-300 text-sm">
                            Get your unique API key from your LinkLister dashboard after registration.
                          </p>
                        </div>
                      </div>
                    )}

                    {step.id === 'install' && (
                      <div className="mt-4 bg-slate-700 rounded-lg p-4">
                        <h4 className="text-white font-medium mb-3">Download Our Official Plugin</h4>
                        <button
                          onClick={() => window.open('https://drive.google.com/file/d/13kATizc-41NEJ4ym7zv_4Xj532C2Yv9T/view?usp=sharing', '_blank')}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </button>
                        <p className="text-slate-400 text-sm mt-3">
                          If the download button does not work, try downloading from the{' '}
                          <a href="#" className="text-blue-400 hover:text-blue-300">official WordPress site</a>.
                        </p>
                      </div>
                    )}

                    {step.id === 'paste' && (
                      <div className="mt-4 space-y-3">
                        {[
                          { id: 'settings', title: "On your site, Go to Linklister > Settings" },
                          { id: 'prepare', title: "Click the 'Prepare Data' button" },
                          { id: 'batch', title: "Wait for all the pages and posts data to get prepared(On Batch)" },
                          { id: 'paste', title: "Paste the API Key & Press 'Save Settings & Sync'" }
                        ].map((item) => (
                          <div key={item.id} className="bg-slate-700 rounded-lg">
                            <button
                              onClick={() => toggleSection(item.id)}
                              className="w-full px-4 py-3 text-left flex items-center justify-between text-white hover:bg-slate-600 transition-colors rounded-lg"
                            >
                              <span className="text-sm">{item.title}</span>
                              {expandedSections[item.id] ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </button>
                            {expandedSections[item.id] && (
                              <div className="px-4 pb-3">
                                <p className="text-slate-400 text-sm">
                                  Detailed instructions for {item.title.toLowerCase()}...
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Video */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
                <h3 className="text-white font-medium mb-2">
                  How to Integrate WordPress Site with Linklister (Easy Tutorial)
                </h3>
                <div className="flex items-center justify-center space-x-4 text-sm text-slate-400">
                  <span>Watch later</span>
                  <span>Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationGuide;