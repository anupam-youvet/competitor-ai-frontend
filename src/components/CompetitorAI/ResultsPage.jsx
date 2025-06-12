import React from "react";
import { ArrowRight } from "lucide-react";

const ResultsPage = ({ setCurrentStep, snapshot }) => {
  return snapshot ? (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="space-y-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-start space-x-6">
              <div
                className="prose prose-invert max-w-none leading-relaxed mb-2"
                dangerouslySetInnerHTML={{
                  __html: snapshot,
                }}
              />
            </div>
            <div className="flex-1">
              <button
                onClick={() => {
                  setCurrentStep("reportType");
                  window.scrollTo(0, 0);
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center space-x-2"
              >
                <span>Get Full Report</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ResultsPage;
