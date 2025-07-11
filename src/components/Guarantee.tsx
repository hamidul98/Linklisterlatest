import React from 'react';
import { Shield, CreditCard } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Payment Icons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-sm font-medium text-gray-700">Powered by</span>
              <div className="text-blue-600 font-bold">Stripe</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-5 bg-red-500 rounded-sm"></div>
              <div className="w-8 h-5 bg-blue-500 rounded-sm"></div>
              <div className="w-8 h-5 bg-yellow-500 rounded-sm"></div>
              <div className="w-8 h-5 bg-green-500 rounded-sm"></div>
            </div>
          </div>

          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-green-600 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">
              Secured by 14 Days Moneyback Guarantee!
            </h2>
          </div>
          
          <p className="text-lg text-gray-600">
            Try risk-free! Not satisfied? We will refund you - no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;