import React from 'react';
import { Star, Play, ArrowRight } from 'lucide-react';

interface HeroProps {
  onTryFree: () => void;
}

const Hero: React.FC<HeroProps> = ({ onTryFree }) => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Social Proof */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">+5</span>
              </div>
            </div>
            <span className="ml-3 text-gray-600">Loved by over <span className="font-semibold text-purple-600">6000</span> SEOs</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Semantically <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Relevant</span> Link Management
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl">40X Faster with Perfect Accuracy</span>
          </h1>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "I was reviewing it and found it so good. I will use it extensively in some of the sites I'm making."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">MZ</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Matt Zimmerman</p>
                  <p className="text-sm text-gray-600">Founder, ZimmWriter</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "I've started using it and honestly, what used to take me hours now takes minutes."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">CK</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Casey Keith</p>
                  <p className="text-sm text-gray-600">SEO Veteran</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The only working link management tool on the market. This SaaS grabbed my attention."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">MG</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Massimilano Geraci</p>
                  <p className="text-sm text-gray-600">Semantic SEO Specialist</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="flex items-center space-x-2 bg-white text-purple-600 px-8 py-3 rounded-xl font-medium border-2 border-purple-200 hover:border-purple-300 transition-all duration-200 transform hover:scale-105">
              <Play className="w-5 h-5" />
              <span>Watch How it Works</span>
            </button>
            <button 
              onClick={onTryFree}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>All App Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>Free 7 Day Trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>Moneyback Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;