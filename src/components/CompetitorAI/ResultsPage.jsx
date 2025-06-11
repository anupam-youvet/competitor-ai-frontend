import React from 'react';
import { ArrowRight } from 'lucide-react';

const ResultsPage = ({ setCurrentStep }) => (
  <div className="min-h-screen bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <div className="space-y-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-start space-x-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#0B0D17] mb-4">
                Top Insight: Competitor X is using AI to personalize customer experiences, 
                leading to a 20% increase in conversion rates.
              </h3>
              <p className="text-gray-600 mb-6">
                Learn more about how Competitor X is implementing AI and how you can adapt these 
                strategies for your business.
              </p>
              <button
                onClick={() => setCurrentStep('reportType')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center space-x-2"
              >
                <span>Get Full Report</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="w-32 h-24 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">X</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ResultsPage; 