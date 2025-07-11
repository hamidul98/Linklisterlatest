import React from 'react';
import { Search, BarChart3, Link as LinkIcon, Download, Settings, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "Automatic Link Detection",
      description: "Scan all pages and posts on your website to identify every internal and external link automatically.",
      color: "bg-gradient-to-br from-blue-500 to-purple-600",
      textColor: "text-white"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-gray-800" />,
      title: "Link Analytics Dashboard",
      description: "Get comprehensive insights with total posts, links, internal vs external ratios, and 30-day sync activity charts.",
      color: "bg-gradient-to-br from-orange-300 to-orange-400",
      textColor: "text-gray-800"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Broken Link Detection",
      description: "Automatically identify and highlight broken or redirected links to fix SEO-damaging issues quickly.",
      color: "bg-gradient-to-br from-pink-400 to-rose-500",
      textColor: "text-white"
    },
    {
      icon: <LinkIcon className="w-8 h-8 text-gray-800" />,
      title: "WordPress Integration",
      description: "Seamlessly integrate with your WordPress admin dashboard using modern UI with gradients and dark mode.",
      color: "bg-gradient-to-br from-purple-300 to-purple-400",
      textColor: "text-gray-800"
    },
    {
      icon: <Download className="w-8 h-8 text-white" />,
      title: "CSV Export",
      description: "Export all detected links for reporting, backup, or further analysis with a single click.",
      color: "bg-gradient-to-br from-cyan-400 to-blue-500",
      textColor: "text-white"
    },
    {
      icon: <Settings className="w-8 h-8 text-gray-800" />,
      title: "API-Powered Sync",
      description: "Connect to external platforms via API key for advanced link management and real-time synchronization.",
      color: "bg-gradient-to-br from-green-300 to-teal-400",
      textColor: "text-gray-800"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Meet Linklister
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Smart Link Management for WordPress
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Linklister helps you manage, analyze, and optimize all the links on your WordPress website through a centralized, 
            visually-rich admin dashboard with real-time sync and reporting features.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 shadow-lg`}
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className={`text-xl font-bold ${feature.textColor} mb-4`}>
                {feature.title}
              </h3>
              <p className={`${feature.textColor} opacity-90`}>
                {feature.description}
              </p>
              <button className={`mt-6 ${feature.textColor} hover:underline font-medium flex items-center`}>
                Explore more →
              </button>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl p-8">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-6">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Easy WordPress Setup
            </h3>
            <p className="text-gray-800 opacity-90">
              Install the plugin, add your API key, and start scanning your site in minutes. 
              Monitor results and export data as needed.
            </p>
            <button className="mt-6 text-gray-800 hover:underline font-medium flex items-center">
              Explore more →
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Complete Link Analytics
            </h3>
            <p className="text-white opacity-90">
              Get full visibility into your site's linking structure with comprehensive analytics, 
              broken link detection, and optimization recommendations.
            </p>
            <button className="mt-6 text-white hover:underline font-medium flex items-center">
              Explore more →
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200">
            Start Your SEO Journey →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;